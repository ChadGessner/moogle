import { Component, Input } from '@angular/core';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.css'],
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
  //]
})
export class MovieDescriptionComponent {
  @Input()isActive:boolean = false;
  @Input()synopsis:string = '';
  @Input()movieImage:string = '';
  //componentState:string = 'hidden'
}
