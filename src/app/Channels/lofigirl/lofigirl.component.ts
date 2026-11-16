import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lofigirl',
  templateUrl: './lofigirl.component.html',
  styleUrls: ['./lofigirl.component.css']
})
export class LofigirlComponent implements OnInit {
  tracks = ['D_uLM5i0Z4c', 'QyGbnE-RHKA', 'd0MeskbA0ec', 'KxpViLLzlrc', 'IU3yBo2szD8'];
  titles = ['Endless Sunday', 'Plant Café', 'Slow Mornings', 'Chillhop Hideaway', 'The Best of Chillhop'];

  constructor() { }

  ngOnInit(): void {
  }

}
