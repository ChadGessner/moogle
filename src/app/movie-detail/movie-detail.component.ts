import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
//import { TheaterDetailsComponent } from '../theater-details/theater-details.component';
import { MovieDetail } from '../dataForTesting/movieDetail';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()movieDetail:any;
  @Input()emsVersionId:string = ''
  imagesList:any[]|null = null;
  currentImageIndex:number = 0;
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
  }]
  constructor(private api:FlixterApiService, private phone:ComponentTelephoneService, private render:Renderer2 ){

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
  categoryName() {
    return document.getElementById(this.notIsActive.filter(x=>x.isActive)[0].id)?.innerText;
  }
  carouselPlus() {

    this.currentImageIndex++;
    return this.validateImageIndex(this.currentImageIndex)
  }
  subImageIndex(){
    return this.validateImageIndex(this.currentImageIndex-1);
  }
  addImageIndex() {
    return this.validateImageIndex(this.currentImageIndex+1);
  }
  validateImageIndex(index:number) {
    let images = this.imagesList as any[];
    if(index < 0) {
      index = images.length - 1;
    }
    if(index === images.length){
      index = 0;
    }
    return index;
  }
  carouselMinus() {

    this.currentImageIndex--;
    return this.validateImageIndex(this.currentImageIndex)
  }
  ngOnInit(): void {
    this.movieDetail = MovieDetail;
    this.imagesList = this.movieDetail.data.movie.images;
    
    // this.phone.emsVersionIdEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.emsVersionId = x;
    //       console.log(this.emsVersionId)
    //     }
    //   }
    // )
    // this.api.movieDetailsByIdEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.movieDetail = x;
    //       this.imagesList = this.movieDetail.data.movie.images;
    //       console.log(JSON.stringify(this.movieDetail))
    //     }
    //   }
    // )
  }
}
