import { Component, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { FlixterApiService } from '../../api.service';
import { ComponentTelephoneService } from '../../component-telephone.service';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetail } from '../../dataForTesting/movieDetail';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
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

export class MovieDetailComponent implements OnInit {
  @Input()movieDetail:any;
  @Input()emsVersionId:string = ''
  componentState:string = 'hidden'
  imagesList:any[]|null = null;
  currentImageIndex:number = 0;
  castIndex:number = 0;
  @Output()showTrailer:boolean = false;
  @Output()trailerUrl:any;
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
  },{
    id:'card-tab-four',
    isActive:false
  },{
    id:'card-tab-five',
    isActive:false
  },{
    id:'card-tab-six',
    isActive:false
  }]
  constructor(
    private api:FlixterApiService,
     private phone:ComponentTelephoneService,
      private render:Renderer2,
       private route:ActivatedRoute ){

  }
//   background-repeat: no-repeat;
// background-position: center center;
// -webkit-background-size: cover;
// -moz-background-size: cover;
// -o-background-size: cover;
// background-size: cover;
  
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
  castIncrementEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    const len = this.movieDetail.data.movie.cast.length;
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
    const len = this.movieDetail.data.movie.cast.length;
    return {
      'width' :
      `${ ((this.castIndex + 1)/len) * 100 }%`
    }
  }
  @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    console.log(target)
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
            if(x.id === 'card-tab-six'){
              this.showTrailer = x.isActive;
              this.trailerUrl = this.movieDetail.data.movie.trailer.url
            }
        }
      }
      )
    }
  }

  categoryName() {
    return document.getElementById(this.notIsActive.filter(x=>x.isActive)[0].id)?.innerText;
  }
  // carouselPlus() {

  //   this.currentImageIndex++;
  //   return this.validateImageIndex(this.currentImageIndex)
  // }
  // subImageIndex(){
  //   return this.validateImageIndex(this.currentImageIndex-1);
  // }
  // addImageIndex() {
  //   return this.validateImageIndex(this.currentImageIndex+1);
  // }
  // validateImageIndex(index:number) {
  //   let images = this.imagesList as any[];
  //   if(index < 0) {
  //     index = images.length - 1;
  //   }
  //   if(index === images.length){
  //     index = 0;
  //   }
  //   return index;
  // }
  // carouselMinus() {

  //   this.currentImageIndex--;
  //   return this.validateImageIndex(this.currentImageIndex)
  // }
  addMovieDetail() {
    var images = [];
    this.movieDetail.data.movie.backgroundImage.url;
    for(let i = 0; i < this.movieDetail.data.movie.images.length; i++){
      
      images.push(this.movieDetail.data.movie.images[i])
    }
    console.log(images)
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (p:Params)=>{
        console.log(p['emsVersionId'])
        this.api.getMovieDetailsById(p['emsVersionId']).subscribe(
          (x:{})=>{
            console.log(x)
            this.movieDetail = x
            this.imagesList = this.movieDetail.data.movie.images;
          }
        )
      }
    )
  }
}
