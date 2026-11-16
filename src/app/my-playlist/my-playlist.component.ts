import { Component } from '@angular/core';
import { MusicLibraryService, SavedTrack } from '../music-library.service';

@Component({ selector: 'app-my-playlist', templateUrl: './my-playlist.component.html', styleUrls: ['./my-playlist.component.css'] })
export class MyPlaylistComponent {
  link = '';
  tracks: SavedTrack[] = [];
  playing: string[] = [];
  playingTitles: string[] = [];
  message = '';

  constructor(private library: MusicLibraryService) { this.refresh(); }

  add(): void {
    const match = this.link.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([^?&/]+)/);
    if (!match) { this.message = 'Paste a YouTube video link.'; return; }
    this.library.addTrack({ id: match[1], title: 'YouTube track' });
    this.link = ''; this.message = 'Added to your browser playlist.'; this.refresh();
  }

  refresh(): void { this.tracks = this.library.getTracks(); this.playing = this.tracks.map(track => track.id); this.playingTitles = this.tracks.map(track => track.title); }
  remove(id: string): void { this.library.removeTrack(id); this.refresh(); }
  move(id: string, direction: -1 | 1): void { this.library.moveTrack(id, direction); this.refresh(); }
  clear(): void { this.library.clearTracks(); this.message = 'Playlist cleared from this browser.'; this.refresh(); }
}
