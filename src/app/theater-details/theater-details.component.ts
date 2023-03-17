import { Component, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { TheaterDetails } from '../models/theater-details.interface';
import {Jesus} from '../dataForTesting/theaterDetail';

@Component({
  selector: 'app-theater-details',
  templateUrl: './theater-details.component.html',
  styleUrls: ['./theater-details.component.css']
})
export class TheaterDetailsComponent implements OnInit {
  theaterDetails:any;
  isShowTimes:boolean = false
  constructor(private api:FlixterApiService){}
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
  ngOnInit(): void {
    
    this.theaterDetails =  Jesus;
    console.log(Jesus);
    
    // this.api.theatersDetailsEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.theaterDetails = x as TheaterDetails
    //       console.log(JSON.stringify(this.theaterDetails))
    //     }
    //   }
    // )
  }
}
