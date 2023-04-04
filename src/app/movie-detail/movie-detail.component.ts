import { Component, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetail } from '../dataForTesting/movieDetail';
import { IFavoriteMovieDetails } from '../models/favorite-movie-details.interface';
// import { MovieFavoriteDirective } from '../movie-favorite.directive';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-movie-detail',
  host: {
    class: 'no-scroll'
  },
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  animations: [
    trigger('componentState', [
      state('show', style({
         'transform' : 'translateX({{disp}})',
          'overflow' : 'hidden'
      }), {params: {disp : '0%'}}),
      state('hidden', style({
        // 'right' : '{{hide}}'
         'transform' : 'translateX({{disp}})',
         'overflow' : 'hidden'
      }), {params : {disp : '100%'}}),
      transition('show <=> hidden', animate(500)),
      
    ])
  ]
 })

export class MovieDetailComponent implements OnInit {
  @Input()movieDetail:any;
  @Input()emsVersionId:string = ''
  animationDisplayMod = 0;
  componentState:string = 'hidden'
  imagesList:any[]|null = null;
  currentImageIndex:number = 0;
  currentUserIdRxjs: any;
  currentEmsVersionIdRxjs: any;
  currentEmsIdRxjs: any;
  castIndex:number = 0;
  favorites: any;
  isFavorited: any = false;
  favoriteMovie: IFavoriteMovieDetails | undefined;
  currentDisplayIndex:number = 0;
  

  @Output()showTrailer:boolean = false;
  @Output()trailerUrl:any;

  notIsActive:{
    id:string,
    isActive:boolean,
     defaultPosition:number,
      paramValue:string}[] = [{

    id:'card-tab-one',
    isActive:true,
    defaultPosition: 0,
    paramValue: '0vm'
  },{
    id:'card-tab-two',
    isActive:false,
    defaultPosition: 100,
    paramValue: '100vm'
  },{
    id:'card-tab-three',
    isActive:false,
    defaultPosition: 200,
    paramValue: '200vm'
  },{
    id:'card-tab-four',
    isActive:false,
    defaultPosition: 300,
    paramValue: '300vm'
  },{
    id:'card-tab-five',
    isActive:false,
    defaultPosition: 400,
    paramValue: '400vm'
  },{
    id:'card-tab-six',
    isActive:false,
    defaultPosition: 500,
    paramValue: '500vm'
  }]
  constructor(
    private api:FlixterApiService,
      private render:Renderer2,
       private route:ActivatedRoute){}


       setEmsVersionIdRxjs(emsVersionIdRxjs: any) {
        this.api.setEmsVersionIdRxjs(emsVersionIdRxjs);
      };
      setEmsIdRxjs(emsIdRxjs: any) {
        this.api.setEmsIdRxjs(emsIdRxjs);
      };
      getUser(){
        return this.api.getLoggedInUser()
      }

  getBackgroundImage() {
    return {
      'background' : `url("${this.movieDetail.data.movie.backgroundImage.url}")`,
      //'image-rendering' : 'auto',
      'background-repeat ' : 'no-repeat',
      'background-position' : 'center center',
      'background-size' : 'cover',
      //'-webkit-background-size' : 'cover',
      //'background-size' : '300px 150px',
      'height' : '100rem',
      'width' : 'auto'
    }
  }
  getAnimationParams(){
    return (this.currentDisplayIndex * 100)
  }
  returnAnimationParam(index:number){
    return `${this.notIsActive[index].defaultPosition - this.getAnimationParams()}vw`;
  }
  @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    let previousDisplayIndex = this.currentDisplayIndex;
    if(target && this.notIsActive.filter(x=>x.id === target.id).length > 0){
      
      this.notIsActive.forEach(
        (x, i)=>{
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
            if(x.id === 'card-tab-six'){
              this.showTrailer = x.isActive;
              this.trailerUrl = this.movieDetail.data.movie.trailer.url
            }
            if(x.isActive){
              this.currentDisplayIndex = i;
            }
        }
        
      }

      )
      
    }
    let q = 0;
    this.notIsActive.forEach((x)=>{
      
      x.isActive ? q += 1 : q
      console.log(q + " " + x.isActive)
    })
    console.log(this.currentDisplayIndex)
    console.log(previousDisplayIndex)
    this.componentState = previousDisplayIndex < this.currentDisplayIndex ? 'show' : 'hidden';
    
      this.notIsActive.forEach((x,i)=>{
        x.paramValue = this.returnAnimationParam(i)
      })
  }
 

  ngOnInit(): void {
    this.api.currentEmsVersionIdRxjs.subscribe((value) => {
      this.currentEmsVersionIdRxjs = value;
    });

    this.api.currentUserIdRxjs.subscribe((value) => {
      this.currentUserIdRxjs = value;
    });

    this.api.currentEmsIdRxjs.subscribe((value) => {
      this.currentEmsIdRxjs = value;
    });
    

    this.notIsActive.forEach((x,i)=>{
      x.paramValue = this.returnAnimationParam(i)
    })

    this.route.params.subscribe(
      (p:Params)=>{
        console.log(p['emsVersionId'] as string)
        this.setEmsVersionIdRxjs(p['emsVersionId'] as string)
       // this.movieDetail = MovieDetail;
       // this.imagesList = this.movieDetail.data.movie.images;
        this.api.getMovieDetailsById(p['emsVersionId']).subscribe(
          (x:{})=>{
            console.log(JSON.stringify(x))
            this.movieDetail = x
            this.imagesList = this.movieDetail.data.movie.images;
          }
        )
      }

    )
  }
}
