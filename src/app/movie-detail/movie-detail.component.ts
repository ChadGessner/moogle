import { Component, Input, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
import { TheaterDetailsComponent } from '../theater-details/theater-details.component';
import { MovieDetail } from '../dataForTesting/movieDetail';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()movieDetail:any;
  @Input()emsVersionId:string = ''
  constructor(private api:FlixterApiService, private phone:ComponentTelephoneService){

  }
  ngOnInit(): void {
    this.movieDetail = MovieDetail;
    // this.phone.emsVersionIdEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.emsVersionId = x;
    //       this.api.getMovieDetailsById(this.emsVersionId)
          
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
