import { NgFor, NgIf, } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit {

  @Output() ratingsData = new EventEmitter<any[]>();

  ngOnInit() {
    this.ratingsData.emit(this.ratings);
  }

  @Output() dataEmitter = new EventEmitter<any[]>();

  averageRating: number = 0;

  ratings: any[] = [
    {
      "starCount": 5,
      "nonFilledStarCount": 0,
      "name": "John Doe",
      "content": "Nice thing!"
    },
    {
      "starCount": 4,
      "nonFilledStarCount": 1,
      "name": "Keisha Holmes",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "starCount": 1,
      "nonFilledStarCount": 4,
      "name": "Allison Ratliff",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      "starCount": 5,
      "nonFilledStarCount": 0,
      "name": "Chioma Ubogagu",
      "content": "Hoping you see enough for me to continue to the next round! If not, I appreciate the opportunity and all the best in filling the role:)"
    }
  ]
}
