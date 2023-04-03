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
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent {
  @Input()movieImage:string = '';
  @Input()directedBy:string = '';
  @Input()releaseDate:string = '';
  @Input()totalGross:string = '';
  @Input()isActive:boolean = false;
  constructor(){}
  getTotalGross() {
    let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return this.totalGross.toString() === '-1' ? '<i class="bi bi-bandaid"></i>' : `${USDollar.format(Number(this.totalGross))}`;
  }
}
