import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { TheaterData } from '../models/theater-data.interface';
import {ChadsTheaters} from '../dataForTesting/chadsTheaters'
import { ComponentTelephoneService } from '../component-telephone.service';
@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  @Input()theaters:any;
  constructor(private api:FlixterApiService, private phone:ComponentTelephoneService ){}
  getTheaters(){
    // if(this.theaters){
    //   return this.theaters as data;
    // }else{
    //   return;
    // }
  }
  clickTheaterLink(theaterId:string) {
    // console.log(theaterId)
    // this.phone.getTheaterId(theaterId);
  }
  ngOnInit(): void {
    this.theaters = ChadsTheaters;
    // this.api.theatersEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       console.log(x)
    //       return this.theaters = x as data;
    //     }else{
    //       return;
    //     }
        
    //   }
    // )
  }
}
