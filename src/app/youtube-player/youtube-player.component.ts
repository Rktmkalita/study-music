import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';

declare const YT: any;

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css'],
})
export class YoutubePlayerComponent implements AfterViewInit, OnChanges, OnDestroy {
  private static apiPromise: Promise<any> | null = null;
  private static instanceCount = 0;

  @Input() videoIds: string[] = [];
  @Input() trackTitles: string[] = [];
  @Input() backgroundMode = false;
  @Input() startIndex = 0;
  @Input() startSeconds = 10;
  @Input() userInitiated = false;
  currentIndex = 0;
  statusMessage = '';
  isPlaying = false;
  @Output() playingChange = new EventEmitter<boolean>();
  readonly playerElementId = `youtube-player-${YoutubePlayerComponent.instanceCount++}`;
  private player: any;
  private apiReady = false;
  private failedVideoIds = new Set<string>();
  private soundUnlocked = false;

  ngAfterViewInit(): void {
    this.currentIndex = this.startIndex;
    YoutubePlayerComponent.loadApi().then(() => {
      this.apiReady = true;
      this.createPlayer();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoIds'] && this.apiReady && this.player && this.videoIds.length) {
      this.failedVideoIds.clear();
      this.currentIndex = this.startIndex;
      this.loadCurrent();
    }
  }

  ngOnDestroy(): void {
    if (this.player) this.player.destroy();
  }

  next(): void {
    if (!this.videoIds.length || !this.player) return;
    this.moveToAvailableTrack(1);
  }

  previous(): void {
    if (!this.videoIds.length || !this.player) return;
    this.moveToAvailableTrack(-1);
  }

  togglePlayPause(): void {
    if (!this.player) return;
    if (this.isPlaying) this.player.pauseVideo();
    else this.player.playVideo();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (this.backgroundMode && this.player && typeof this.player.setSize === 'function') {
      this.player.setSize(window.innerWidth, window.innerHeight);
    }
  }

  @HostListener('document:pointerdown')
  unlockSound(): void {
    if (this.soundUnlocked || !this.player) return;
    this.soundUnlocked = true;
    this.player.unMute();
    this.player.setVolume(100);
  }

  selectTrack(index: number): void {
    if (!this.player || !this.videoIds.length) return;
    this.currentIndex = Math.max(0, Math.min(index, this.videoIds.length - 1));
    this.failedVideoIds.clear();
    this.loadCurrent();
  }

  get currentTitle(): string { return this.trackTitles[this.currentIndex] || `Track ${this.currentIndex + 1}`; }

  private createPlayer(): void {
    if (this.player || !this.videoIds.length) return;
    const youtube = (window as any).YT;
    this.player = new youtube.Player(this.playerElementId, {
      width: this.backgroundMode ? window.innerWidth : '100%', height: this.backgroundMode ? window.innerHeight : '390', videoId: this.videoIds[this.currentIndex],
      playerVars: { playsinline: 1, rel: 0, autoplay: 1, start: this.startSeconds, controls: this.backgroundMode ? 0 : 1, cc_load_policy: 0, iv_load_policy: 3 },
      events: { onStateChange: (event: any) => {
        this.isPlaying = event.data === youtube.PlayerState.PLAYING;
        this.playingChange.emit(this.isPlaying);
        if (event.data === youtube.PlayerState.PLAYING) this.disableCaptions(event.target);
        if (event.data === youtube.PlayerState.ENDED) this.next();
      }, onReady: (event: any) => { this.disableCaptions(event.target); if (!this.userInitiated) event.target.mute(); else event.target.unMute(); event.target.playVideo(); }, onError: (event: any) => this.handlePlayerError(event.data) },
    });
  }

  private loadCurrent(): void {
    this.statusMessage = '';
    this.disableCaptions(this.player);
    this.player.loadVideoById({ videoId: this.videoIds[this.currentIndex], startSeconds: this.startSeconds });
  }

  private disableCaptions(player: any): void {
    try {
      player.unloadModule('captions');
      player.setOption('captions', 'track', {});
    } catch (_) { /* Older embeds may not expose the captions module. */ }
  }

  private moveToAvailableTrack(direction: number): void {
    for (let step = 0; step < this.videoIds.length; step += 1) {
      this.currentIndex = (this.currentIndex + direction + this.videoIds.length) % this.videoIds.length;
      if (!this.failedVideoIds.has(this.videoIds[this.currentIndex])) {
        this.loadCurrent();
        return;
      }
    }
    this.statusMessage = 'No playable videos remain in this queue.';
  }

  private handlePlayerError(errorCode: number): void {
    this.failedVideoIds.add(this.videoIds[this.currentIndex]);
    const hasAlternative = this.videoIds.some(id => !this.failedVideoIds.has(id));
    if (hasAlternative) {
      this.statusMessage = 'That video is unavailable, skipping to the next song.';
      this.moveToAvailableTrack(1);
    } else {
      this.statusMessage = 'This video cannot be embedded. Try adding another song.';
    }
  }

  private static loadApi(): Promise<any> {
    if ((window as any).YT && (window as any).YT.Player) {
      return Promise.resolve((window as any).YT);
    }
    if (this.apiPromise) return this.apiPromise;

    this.apiPromise = new Promise(resolve => {
      const previousCallback = (window as any).onYouTubeIframeAPIReady;
      (window as any).onYouTubeIframeAPIReady = () => {
        if (previousCallback) previousCallback();
        resolve((window as any).YT);
      };

      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(script);
      }
    });
    return this.apiPromise;
  }
}
