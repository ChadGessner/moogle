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
  animations: [
    trigger('componentState', [
      state('show', style({
        'transform' : 'translateX(0)'
      })),
      state('hidden', style({
        
        'transform' : 'translateX(9000px)'
      })),
      transition('show => hidden', animate(1000)),
      transition('hidden => show', animate(1000)),
    ])
  ]
})
export class MovieReviewsComponent {
  @Input()movieImage:string = '';
  @Input()isActive:boolean = false;
  @Input()tomatometer:number = 0;
  @Input()ratingCount:number = 0;
  @Input()consensus:string = '';
  constructor(){}

}
