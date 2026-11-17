import { Component, ViewChild } from '@angular/core';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { ActivatedRoute } from '@angular/router';
import { MusicLibraryService } from '../music-library.service';

interface Station { name: string; subtitle: string; accent: string; icon: string; tracks: string[]; titles: string[]; route: string; }

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css'] })
export class DashboardComponent {
  @ViewChild(YoutubePlayerComponent) player?: YoutubePlayerComponent;
  activeStation = 0;
  isPlaying = false;
  currentTrackIndex = 0;
  volume = 100;
  startedFromWelcome = false;
  showAddLink = false;
  favoriteLink = '';
  favoriteMessage = '';
  stations: Station[] = [
    { name: 'Anime Vibe', subtitle: 'Dreamy scenes & soft beats', accent: 'pink', icon: '✨', route: '/anime-vibe', tracks: ['-OGo3Dug1O0', 'A3LRQ33w1SU', 'Gu-g8FRG4Zs', 'k7P985NUlE4', 'QyGbnE-RHKA', 'KxpViLLzlrc', 'd0MeskbA0ec', 'jfKfPfyJRdk', '5qap5aO4i9A', '53gNFOqDFcE'], titles: ['Anime Lofi Chill Mix', 'One Piece Study Vibes', 'Deep Focus Anime Mix', 'Popular Anime Lofi Remix', 'Plant Café', 'Chillhop Hideaway', 'Slow Mornings', 'Lofi Study Radio', 'Late Night Lofi', 'Pomodoro Focus Mix'] },
    { name: 'Lofi Girl', subtitle: 'Study, focus & slow mornings', accent: 'lilac', icon: '🎧', route: '/lofi-girl', tracks: ['D_uLM5i0Z4c', 'd0MeskbA0ec', 'IU3yBo2szD8', 'jfKfPfyJRdk', '5qap5aO4i9A', '53gNFOqDFcE', 'KxpViLLzlrc', 'QyGbnE-RHKA', 'Gu-g8FRG4Zs', '7NOSDKb0HlU'], titles: ['Endless Sunday', 'Slow Mornings', 'The Best of Chillhop', 'Lofi Girl Study Radio', 'Lofi Hip Hop Radio', 'Pomodoro Focus Music', 'Chillhop Hideaway', 'Plant Café', 'Deep Focus & Energy', 'Calm Study Beats'] },
    { name: 'Chillhop', subtitle: 'Laid-back beats with groove', accent: 'blue', icon: '🎶', route: '/chillhop', tracks: ['KxpViLLzlrc', 'IU3yBo2szD8', 'D_uLM5i0Z4c', 'QyGbnE-RHKA', 'd0MeskbA0ec', 'jfKfPfyJRdk', '5qap5aO4i9A', '8b3fqIBrNW0', '53gNFOqDFcE', '7NOSDKb0HlU'], titles: ['Chillhop Hideaway', 'The Best of Chillhop', 'Endless Sunday', 'Plant Café', 'Slow Mornings', 'Lofi Study Radio', 'Lofi Hip Hop Radio', 'Lofi Hip Hop Mix Part 2', 'Pomodoro Focus Music', 'Chill Beats to Work To'] },
    { name: 'My Favs', subtitle: 'Your songs, saved locally', accent: 'favs', icon: '♥', route: '/my-playlist', tracks: [], titles: [] }
  ];
  constructor(route: ActivatedRoute, private library: MusicLibraryService) { this.startedFromWelcome = route.snapshot.queryParamMap.get('welcome') === '1'; this.refreshFavorites(); this.loadFavoriteTitles(); const routePath = route.snapshot.url[0]?.path; this.activeStation = routePath === 'lofi-girl' ? 1 : routePath === 'chillhop' ? 2 : routePath === 'my-playlist' ? 3 : 0; }
  get station(): Station { return this.stations[this.activeStation]; }
  selectStation(index: number): void { this.activeStation = index; }
  playTrack(index: number): void { this.player?.selectTrack(index); }
  togglePlayback(): void { this.player?.togglePlayPause(); }
  previousTrack(): void { this.player?.previous(); }
  nextTrack(): void { this.player?.next(); }
  setPlaying(value: boolean): void { this.isPlaying = value; }
  setTrack(index: number): void { this.currentTrackIndex = index; }
  setVolume(value: string): void { this.volume = Number(value); this.player?.setVolume(this.volume); }
  refreshFavorites(): void { const saved = this.library.getTracks().filter(track => track.kind !== 'playlist'); const favs = this.stations[3]; favs.tracks = saved.map(track => track.id); favs.titles = saved.map(track => track.title || 'Saved YouTube track'); }
  openAddLink(): void { this.favoriteMessage = ''; this.favoriteLink = ''; this.showAddLink = true; }
  closeAddLink(): void { this.showAddLink = false; }
  async addFavoriteLink(): Promise<void> {
    const video = this.favoriteLink.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([^?&/]+)/);
    if (!video) { this.favoriteMessage = 'Paste a YouTube song link.'; return; }
    let title = 'Saved YouTube track';
    try { const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(this.favoriteLink)}&format=json`); if (response.ok) title = (await response.json()).title || title; } catch { /* Keep the fallback title when metadata is unavailable. */ }
    this.library.addTrack({ id: video[1], title, kind: 'video', url: this.favoriteLink });
    this.refreshFavorites(); this.favoriteLink = ''; this.favoriteMessage = 'Added to the end of My Favs.';
  }
  async loadFavoriteTitles(): Promise<void> { for (const track of this.library.getTracks()) { if (track.kind === 'video' && track.title === 'Saved YouTube track' && track.url) { try { const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(track.url)}&format=json`); if (response.ok) { const title = (await response.json()).title; if (title) this.library.updateTrack(track.id, { title }); } } catch { /* Keep the saved fallback title. */ } } } this.refreshFavorites(); }
  removeFavorite(index: number): void { const saved = this.library.getTracks(); if (saved[index]) { this.library.removeTrack(saved[index].id); this.refreshFavorites(); } }
}
