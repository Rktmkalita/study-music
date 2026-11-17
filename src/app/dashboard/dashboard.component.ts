import { Component, ViewChild } from '@angular/core';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { ActivatedRoute } from '@angular/router';

interface Station { name: string; subtitle: string; accent: string; icon: string; tracks: string[]; titles: string[]; route: string; }

@Component({ selector: 'app-dashboard', templateUrl: './dashboard.component.html', styleUrls: ['./dashboard.component.css'] })
export class DashboardComponent {
  @ViewChild(YoutubePlayerComponent) player?: YoutubePlayerComponent;
  activeStation = 0;
  isPlaying = false;
  startedFromWelcome = false;
  stations: Station[] = [
    { name: 'Anime Vibe', subtitle: 'Dreamy scenes & soft beats', accent: 'pink', icon: '✨', route: '/anime-vibe', tracks: ['-OGo3Dug1O0', 'A3LRQ33w1SU', 'QyGbnE-RHKA', 'KxpViLLzlrc'], titles: ['Anime Lofi Chill Mix', 'One Piece Study Vibes', 'Plant Café', 'Chillhop Hideaway'] },
    { name: 'Lofi Girl', subtitle: 'Study, focus & slow mornings', accent: 'lilac', icon: '🎧', route: '/lofi-girl', tracks: ['D_uLM5i0Z4c', 'd0MeskbA0ec', 'IU3yBo2szD8', 'KxpViLLzlrc'], titles: ['Endless Sunday', 'Slow Mornings', 'The Best of Chillhop', 'Chillhop Hideaway'] },
    { name: 'Chillhop', subtitle: 'Laid-back beats with groove', accent: 'blue', icon: '🎶', route: '/chillhop', tracks: ['KxpViLLzlrc', 'IU3yBo2szD8', 'D_uLM5i0Z4c', 'QyGbnE-RHKA'], titles: ['Chillhop Hideaway', 'The Best of Chillhop', 'Endless Sunday', 'Plant Café'] }
  ];
  constructor(route: ActivatedRoute) { this.startedFromWelcome = route.snapshot.queryParamMap.get('welcome') === '1'; }
  get station(): Station { return this.stations[this.activeStation]; }
  selectStation(index: number): void { this.activeStation = index; }
  playTrack(index: number): void { this.player?.selectTrack(index); }
  togglePlayback(): void { this.player?.togglePlayPause(); }
  previousTrack(): void { this.player?.previous(); }
  nextTrack(): void { this.player?.next(); }
  setPlaying(value: boolean): void { this.isPlaying = value; }
}
