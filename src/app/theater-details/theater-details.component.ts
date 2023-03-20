import { Component, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { TheaterDetails } from '../models/theater-details.interface';
import {TheaterDetailTest} from '../dataForTesting/theaterDetail';
import { ComponentTelephoneService } from '../component-telephone.service';

@Component({
  selector: 'app-theater-details',
  templateUrl: './theater-details.component.html',
  styleUrls: ['./theater-details.component.css']
})
export class TheaterDetailsComponent implements OnInit {
  theaterId:string = '';
  theaterDetails:any;
  isShowTimes:boolean = false;
  currentTitlesList:any;
  currentTitle:any;
  currentTitleIndex:number = 0;
  maxMovieListLength:number = -1;
  constructor(private api:FlixterApiService, private phone:ComponentTelephoneService){}
  toggleShowTimes(){
    this.isShowTimes = !this.isShowTimes
  }
   setRatingImagePath(rating:string) {
    switch(rating){
      case 'G':
        return 'assets/images/G.png';
      case 'PG':
        return 'assets/images/PG.png';
      case 'PG-13':
        return 'assets/images/PG-13.png';
      case 'NC-17':
        return 'assets/images/NC-17.png';
      case 'R':
        return 'assets/images/R.png';
      default: 
      return 'assets/images/G.png';
    }
   }
   passEmsVersionId(id:string){
    //return this.phone.getEmsVersionId(id);
  }
  nextTitle() {
    console.log('some other shit')
    this.currentTitleIndex++;
    if(this.currentTitleIndex === this.maxMovieListLength){
      this.currentTitleIndex = 0;
      this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
      return;
    }
    this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
  }
  previousTitle() {
    console.log('some shit')
    this.currentTitleIndex--;
    if(this.currentTitleIndex === 0){
      this.currentTitleIndex = this.maxMovieListLength-1;
      this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
      return;
    }
    this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
  }
  ngOnInit(): void {
    
     this.theaterDetails =  TheaterDetailTest;
     this.currentTitlesList = this.theaterDetails.data.theaterShowtimeGroupings.movies;
     this.maxMovieListLength = this.currentTitlesList.length;
     this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
    // console.log(Jesus);
    // this.phone.theaterIdEvent.subscribe(
    //   (y)=>{
    //     if(y){
    //       this.theaterId = y;
          
    //     }
    //   }
    // )
    // this.api.theatersDetailsEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.theaterDetails = x as TheaterDetails;
    //       //console.log(JSON.stringify(this.theaterDetails));
    //     }
    //   }
    // )
    
  }
}
