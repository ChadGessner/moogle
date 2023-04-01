import { Component, Input } from '@angular/core';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css'],
  // animations: [
  //   trigger('componentState', [
  //     state('show', style({
  //       'transform' : 'translateX(0)'
  //     })),
  //     state('hidden', style({
  //       'overflow' : 'hidden',
  //       'transform' : 'translateX(9000px)'
  //     })),
  //     transition('show => hidden', animate(1000)),
  //     transition('hidden => show', animate(1000)),
  //   ])
  // ]
})
export class MovieInfoComponent {
  @Input()movieImage:string = '';
  @Input()directedBy:string = '';
  @Input()releaseDate:string = '';
  @Input()totalGross:string = '';
  @Input()isActive:boolean = false;
}
