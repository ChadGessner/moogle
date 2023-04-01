import { Component,Input } from '@angular/core';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-movie-cast',
  templateUrl: './movie-cast.component.html',
  styleUrls: ['./movie-cast.component.css'],
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
  constructor(){}
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
