import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RatingComponent } from "./rating/rating.component";
import { AverageComponent } from './average/average.component';
import { SpecificRatingComponent } from './specific-rating/specific-rating.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RatingComponent, AverageComponent, SpecificRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit() {
    // console.log("Parent");
  }
  title = 'inRhythmAssessment';
  
  receivedRatingsData: any[] = [];

  getRatingsData(array: any[]) {
    this.receivedRatingsData = array;
    // console.log("Recieved data from child:", this.receivedRatingsData)
  }
}
