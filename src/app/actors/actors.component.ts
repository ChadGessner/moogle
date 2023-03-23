import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FlixterApiService } from '../api.service';
import {Actor} from '../dataForTesting/actor'
@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})

export class ActorsComponent implements OnInit {
  @Input()actorId:string = ''
  @Input()actor:any;
  filmographyIndex:number = 0
  notIsActive:{
    id:string,
    isActive:boolean}[] = [{
    id:'card-tab-one',
    isActive:true
  },{
    id:'card-tab-two',
    isActive:false
  },{
    id:'card-tab-three',
    isActive:false
  }]
  constructor(private api:FlixterApiService, private render:Renderer2){}

  progressBarStyle() {
    const len = this.actor.data.person.filmography.length;
    return {
      'width' :
      `${ ((this.filmographyIndex + 1)/len) * 100 }%`
    }
  }

  castIncrementEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    const len = this.actor.data.person.filmography.length;
    console.log(target.id)
    if(target && target.id === 'cast-prev'){
      this.filmographyIndex--;
    }
    if(target && target.id === 'cast-next'){
      this.filmographyIndex++;
    }
    if(this.filmographyIndex >= len){
      this.filmographyIndex = 0;
    }
    if(this.filmographyIndex < 0){
      this.filmographyIndex = this.filmographyIndex + len;
    }
    console.log(this.filmographyIndex)
    const progress = document.getElementById('progress-bar');
    // console.log(progress)
    // this.render.setStyle(
    //   progress,
    //   'width',
    //   `${ ((this.castIndex + 1)/len) * 100 }%`
    // )
  }

  @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    if(target && this.notIsActive.filter(x=>x.id === target.id).length > 0){
      
      this.notIsActive.forEach(
        (x)=>{
          if(x){
            x.isActive = x.id === target.id;
            this.render.removeClass(
              document.getElementById(x.id),
              'bg-primary'
            )
            this.render.removeClass(
              document.getElementById(x.id),
              'bg-secondary'
            )
             this.render.addClass(
              document.getElementById(x.id),
              `${x.isActive ? 'bg-secondary' : 'bg-primary'}`
            )
        }
      }
      )
    }
  }
  ngOnInit(): void {
    this.actor = Actor;
    //console.log(this.actor.data.person.name)
    // this.api.celebrityDetailsEvent.subscribe(
    //   (x)=>{
    //     if(x) {
    //       console.log(JSON.stringify(x))
    //       this.actor = x
    //     }
    //   }
    // )
  }
}
