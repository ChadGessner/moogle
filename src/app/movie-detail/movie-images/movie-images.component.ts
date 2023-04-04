import { Component, Input } from '@angular/core';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-movie-images',
  templateUrl: './movie-images.component.html',
  styleUrls: ['./movie-images.component.css'],
  animations: [
    trigger('componentState', [
      state('show', style({
        'transform' : 'translateX(0)'
      })),
      state('hidden', style({
        'overflow' : 'hidden',
        'transform' : 'translateX(9000px)'
      })),
      transition('show => hidden', animate(1000)),
      transition('hidden => show', animate(1000)),
    ])
  ]
})

export class MovieImagesComponent {
  componentState:string = 'hidden'
  @Input()isActive:boolean = false;
  @Input()images:{
    url:string, 
     type:string,
      width:number,
       height:number}[] = [];
  @Input()movieImage:string = '';
  currentIndex:number = 1;
  constructor(){}
  carouselPlus() {

    this.currentIndex++;
    return this.validateImageIndex(this.currentIndex)
  }
  subImageIndex(){
    return this.validateImageIndex(this.currentIndex-1);
  }
  addImageIndex() {
    return this.validateImageIndex(this.currentIndex+1);
  }
  validateImageIndex(index:number) {
    let images = this.images as any[];
    if(index < 0) {
      index = images.length - 1;
    }
    if(index === images.length){
      index = 0;
    }
    return index;
  }
  carouselMinus() {

    this.currentIndex--;
    return this.validateImageIndex(this.currentIndex)
  }
}
