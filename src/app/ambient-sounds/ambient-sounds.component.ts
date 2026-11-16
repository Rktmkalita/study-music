import { Component, OnDestroy } from '@angular/core';

@Component({ selector: 'app-ambient-sounds', templateUrl: './ambient-sounds.component.html', styleUrls: ['./ambient-sounds.component.css'] })
export class AmbientSoundsComponent implements OnDestroy {
  rainActive = false;
  noiseActive = false;
  rainVolume = 0.22;
  noiseVolume = 0.1;
  private rainNodes: any = null;
  private noiseNodes: any = null;

  toggle(type: 'rain' | 'noise'): void {
    if (type === 'rain' && this.rainActive) { this.stop(type); return; }
    if (type === 'noise' && this.noiseActive) { this.stop(type); return; }
    const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return;
    const context = new AudioContextClass();
    const sampleRate = context.sampleRate;
    const buffer = context.createBuffer(1, sampleRate * 2, sampleRate);
    const data = buffer.getChannelData(0);
    let last = 0;
    for (let i = 0; i < data.length; i += 1) {
      const white = Math.random() * 2 - 1;
      last = type === 'rain' ? last * 0.985 + white * 0.08 : white * 0.18;
      data[i] = last;
    }
    const source = context.createBufferSource();
    source.buffer = buffer; source.loop = true;
    const gain = context.createGain(); gain.gain.value = type === 'rain' ? this.rainVolume : this.noiseVolume;
    source.connect(gain); gain.connect(context.destination); source.start();
    if (type === 'rain') { this.rainNodes = { context, source, gain }; this.rainActive = true; }
    else { this.noiseNodes = { context, source, gain }; this.noiseActive = true; }
  }

  setVolume(type: 'rain' | 'noise', value: number): void {
    if (type === 'rain') this.rainVolume = value;
    else this.noiseVolume = value;
    const nodes = type === 'rain' ? this.rainNodes : this.noiseNodes;
    if (nodes) nodes.gain.gain.value = value;
  }

  stop(type: 'rain' | 'noise'): void {
    const nodes = type === 'rain' ? this.rainNodes : this.noiseNodes;
    if (nodes) { nodes.source.stop(); nodes.context.close(); }
    if (type === 'rain') { this.rainNodes = null; this.rainActive = false; }
    else { this.noiseNodes = null; this.noiseActive = false; }
  }

  ngOnDestroy(): void { this.stop('rain'); this.stop('noise'); }
}
