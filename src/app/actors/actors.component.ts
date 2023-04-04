import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  constructor(
    private api:FlixterApiService,
     private render:Renderer2,
      private route:ActivatedRoute,
       private router:Router){}

  progressBarStyle() {
    const len = this.actor.data.person.filmography.length;
    return {
      'width' :
      `${ ((this.filmographyIndex + 1)/len) * 100 }%`
    }
  }
  navigateToMovieDetails() {
    this.router.navigate([
      'movie-detail',
      this.actor.data.person.filmography[this.filmographyIndex].emsVersionId
    ])
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
  }

  @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    if(target && this.notIsActive.filter(x=>x.id === target.id).length > 0){
      
      this.notIsActive.forEach(
        (x)=>{
          if(x){
            let el = document.getElementById(x.id) as HTMLElement
            x.isActive = x.id === target.id ? true : false;
            console.log(target)
            
              if(el.classList.contains('alert-success') || el.classList.contains('alert-info')){
                this.render.removeClass(
                  el,
                  'alert-info'
                )
                this.render.removeClass(
                  el,
                  'alert-success'
                )
                this.render.addClass(
                  el,
                  `${x.isActive ? 'alert-success' : 'alert-info'}`
                )
                console.log(el)
              }
            }
        }
      )
    }
  }

  getTomatometerValue(value:number){
    const result = value === -1 ? 'Tomatometer: ' + '<i class="bi bi-bandaid"></i>' : 'Tomatometer: ' + value.toString();
    return result;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (x:Params)=>{
        this.api.getActorData(x['id'])
        .subscribe(
          (x)=>{
            if(x){
              console.log(JSON.stringify(x))
              this.actor = x
            }
          }
        )
      }
    )
    //this.actor = Actor;
    
  }
}
