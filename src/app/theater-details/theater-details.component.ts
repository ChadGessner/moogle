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
  constructor(private api:FlixterApiService){}
  fetchJson() {
    fetch('file:theaterDetail.json', {}).then(res => 
      res.json()
    ).then(jsonData => {
      console.log(jsonData)
      return  jsonData
      
    });
  }
  ngOnInit(): void {
    
    this.theaterDetails =  Jesus;
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
