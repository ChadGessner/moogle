import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { data } from '../models/theater-data.interface';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  @Input()theaters:any;
  constructor(private api:FlixterApiService ){}
  getTheaters(){
    if(this.theaters){
      return this.theaters as data;
    }else{
      return;
    }
    
  }
  ngOnInit(): void {
    this.api.theatersEvent.subscribe(
      (x)=>{
        if(x){
          console.log(x)
          return this.theaters = x as data;
        }else{
          return;
        }
        
      }
    )
  }
}
