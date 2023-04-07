import { Component, Input } from '@angular/core';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-movie-reviews',
  templateUrl: './movie-reviews.component.html',
  styleUrls: ['./movie-reviews.component.css'],
})
export class MovieReviewsComponent {
  @Input()movieImage:string = '';
  @Input()isActive:boolean = false;
  @Input()tomatometer:number = 0;
  @Input()ratingCount:number = 0;
  @Input()consensus:string = '';
  constructor(){}
  windowWidth() {
    console.log(window.innerWidth)
    return window.innerWidth;
  }
  getTomatometerData(data:number|string) {
    return data = data.toString() === '-1' || data.toString() === 'N/A' ? '<i class="bi bi-bandaid"></i>' : data;
  }
}
