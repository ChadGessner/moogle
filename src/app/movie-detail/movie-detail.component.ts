import { Component, Input, OnInit } from '@angular/core';
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
  
  constructor(private api:FlixterApiService, private phone:ComponentTelephoneService){

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
          
    //       console.log(JSON.stringify(this.movieDetail))
    //     }
    //   }
    // )
  }
}
