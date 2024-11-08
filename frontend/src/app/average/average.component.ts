import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-average',
  standalone: true,
  imports: [NgFor],
  templateUrl: './average.component.html',
  styleUrl: './average.component.css'
})
export class AverageComponent implements OnInit {
  averageRating: number = 0;
  nonFilteredStars: number = 0;

  ngOnInit() {
    this.findAverageRating();
  }
  @Input() ratingsArray: any[] = [];

  findAverageRating() {
    let sum = 0;
    if(this.ratingsArray.length == 0) {
    } else {
        for(let rating of this.ratingsArray) {
          sum += rating.starCount;
          this.averageRating = Math.floor(sum/(this.ratingsArray.length));
          this.nonFilteredStars = 5 - this.averageRating;
        }
    }
    // console.log("Average:", this.averageRating, this.nonFilteredStars);
  }
}
