import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { TheaterData } from '../models/theater-data.interface';
import {ChadsTheaters} from '../dataForTesting/chadsTheaters'
import { ComponentTelephoneService } from '../component-telephone.service';
import { TheaterDetails } from '../models/theater-details.interface';
@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  @Input()theaters:any;
  currentTheaterName:string = '';
  selectedTheater:TheaterDetails|null = null;
  isToggleTheaters:boolean = false;
  showTimes:any
  isShowTimes:boolean = false;
  constructor(private api:FlixterApiService, private phone:ComponentTelephoneService ){}
  getTheaters(){
    // if(this.theaters){
    //   return this.theaters as data;
    // }else{
    //   return;
    // }
  }
  getShowTimes(e:{
    time:string,
    date:string
  }[]) {
    this.showTimes = e;
  }
  toggleShowTimes() {
    this.isShowTimes = !this.isShowTimes;
  }
  toggleTheaters() {
    this.isToggleTheaters = !this.isToggleTheaters;
  }
  clickTheaterLink(index:number, theaterName:string) {
    this.selectedTheater = this.theaters[index];
    this.currentTheaterName = theaterName;
    this.toggleTheaters()
    //this.theaterNameEvent.emit(name)
    //this.phone.getTheaterName(this.theaterName);
    // console.log(theaterId)
    // this.phone.getTheaterId(theaterId);
  }
  ngOnInit(): void {
    this.theaters = ChadsTheaters;
    this.phone.getTheaterList(this.theaters);
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
