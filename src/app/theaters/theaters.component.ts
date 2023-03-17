import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { data } from '../models/theater-data.interface';
import {BobSaget} from '../dataForTesting/bobSagetLoginData'
@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  @Input()theaters:any;
  constructor(private api:FlixterApiService ){}
  getTheaters(){
    // if(this.theaters){
    //   return this.theaters as data;
    // }else{
    //   return;
    // }
  }
  clickTheaterLink(theaterId:string) {
    //this.api.getTheaterDetails(theaterId);
  }
  ngOnInit(): void {
    this.theaters = BobSaget;
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
