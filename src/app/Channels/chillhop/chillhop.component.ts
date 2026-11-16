import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chillhop',
  templateUrl: './chillhop.component.html',
  styleUrls: ['./chillhop.component.css']
})
export class ChillhopComponent implements OnInit {
  tracks = ['KxpViLLzlrc', 'IU3yBo2szD8', 'D_uLM5i0Z4c', 'QyGbnE-RHKA', 'd0MeskbA0ec'];
  titles = ['Chillhop Hideaway', 'The Best of Chillhop', 'Endless Sunday', 'Plant Café', 'Slow Mornings'];

  constructor() { }

  ngOnInit(): void {
  }

}
