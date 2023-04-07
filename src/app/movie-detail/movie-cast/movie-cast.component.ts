import { Component,Input } from '@angular/core';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css'],
 
})

export class MovieCastComponent {
  componentState:string = 'hidden'
  @Input() movieImage:string = '';
  @Input() isActive:boolean = false;
  @Input() castIndex:number = 0;
  @Input() movieCast:{
    id:string,
     role:string,
      name:string,
       characterName:string,
        headShotImage:string}[] = [];
  constructor(
    private router:Router
  ){}
  windowWidth() {
    return window.innerWidth;
  }
  navigateToActorDetails() {
    const actorId = this.movieCast[this.castIndex].id
    if(actorId) {
      this.router.navigate([
        'actor',
        actorId
      ])
    }
  }
  castIncrementEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    const len = this.movieCast.length;
    console.log(target.id)
    if(target && target.id === 'cast-prev'){
      this.castIndex--;
    }
    if(target && target.id === 'cast-next'){
      this.castIndex++;
    }
    if(this.castIndex >= len){
      this.castIndex = 0;
    }
    if(this.castIndex < 0){
      this.castIndex = this.castIndex + len;
    }
    console.log(this.castIndex)
    const progress = document.getElementById('progress-bar');
  }
  progressBarStyle() {
    const len = this.movieCast.length;
    return {
      'width' :
      `${ ((this.castIndex + 1)/len) * 100 }%`
    }
  }
}
