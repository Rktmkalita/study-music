import { Injectable } from '@angular/core';

export interface SavedTrack { id: string; title: string; kind?: 'video' | 'playlist'; url?: string; }

@Injectable({ providedIn: 'root' })
export class MusicLibraryService {
  private key = 'lofi-music-user-tracks';

  getTracks(): SavedTrack[] {
    try { return JSON.parse(localStorage.getItem(this.key) || '[]'); } catch { return []; }
  }

  addTrack(track: SavedTrack): void {
    const tracks = this.getTracks().filter(item => item.id !== track.id);
    tracks.push(track);
    localStorage.setItem(this.key, JSON.stringify(tracks));
  }

  updateTrack(id: string, changes: Partial<SavedTrack>): void {
    const tracks = this.getTracks().map(track => track.id === id ? { ...track, ...changes } : track);
    localStorage.setItem(this.key, JSON.stringify(tracks));
  }

  removeTrack(id: string): void {
    localStorage.setItem(this.key, JSON.stringify(this.getTracks().filter(item => item.id !== id)));
  }

  moveTrack(id: string, direction: -1 | 1): void {
    const tracks = this.getTracks();
    const index = tracks.findIndex(track => track.id === id);
    const nextIndex = index + direction;
    if (index < 0 || nextIndex < 0 || nextIndex >= tracks.length) return;
    [tracks[index], tracks[nextIndex]] = [tracks[nextIndex], tracks[index]];
    localStorage.setItem(this.key, JSON.stringify(tracks));
  }

  clearTracks(): void { localStorage.removeItem(this.key); }
}
