import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animevibe',
  templateUrl: './animevibe.component.html',
  styleUrls: ['./animevibe.component.css']
})
export class AnimevibeComponent implements OnInit {
  tracks = ['-OGo3Dug1O0', 'A3LRQ33w1SU', 'QyGbnE-RHKA', 'KxpViLLzlrc', 'd0MeskbA0ec'];
  titles = ['Anime Lofi Chill Mix', 'One Piece Study Vibes', 'Plant Café', 'Chillhop Hideaway', 'Slow Mornings'];

  constructor() { }

  ngOnInit(): void {
  }

}
