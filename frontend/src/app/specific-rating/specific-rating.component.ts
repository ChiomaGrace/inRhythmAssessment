import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-rating',
  standalone: true,
  imports: [NgFor],
  templateUrl: './specific-rating.component.html',
  styleUrl: './specific-rating.component.css'
})
export class SpecificRatingComponent implements OnInit {
  ngOnInit() {
    this.spotlightRating();
  }
  @Input() ratingsArray: any[] = [];

  averageRating: number = 0;
  nonFilteredStars: number = 0;
  name: string = "";
  content: string = "";

  spotlightRating() {
    for(const key in this.ratingsArray) {
      this.averageRating = this.ratingsArray[key].starCount;
      this.nonFilteredStars = this.ratingsArray[key].nonFilledStarCount;
      this.name = this.ratingsArray[key].name;
      this.content = this.ratingsArray[key].content;
      }
  }
}
