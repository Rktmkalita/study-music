import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <section class="about page">
      <p class="eyebrow">ABOUT LOFIMUSIC</p>
      <h1>A small place to slow down.</h1>
      <p class="lead">LofiMusic is a simple anime-inspired listening space for mellow beats, study sessions, and quiet background music.</p>
      <div class="about-grid">
        <article><h2>Listen your way</h2><p>Choose a mood from the built-in channels, then use the player controls to move through the queue. When a video ends, the next one starts automatically.</p></article>
        <article><h2>Powered by YouTube</h2><p>Music plays through YouTube's official embedded player. We do not download, extract, or host the audio ourselves.</p></article>
        <article><h2>Your playlist stays local</h2><p>Songs you add to My Playlist are saved in this browser's local storage. There are no accounts, sign-ins, backend servers, or synced data.</p></article>
        <article><h2>Made for calm</h2><p>Put on a mix while studying, coding, reading, drawing, or simply letting the day become a little quieter.</p></article>
      </div>
    </section>
  `,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
