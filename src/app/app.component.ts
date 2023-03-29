import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { FlixterApiService } from './api.service';
import {TheaterData} from 'src/app/models/theater-data.interface';
import {theater} from 'src/app/models/theater.interface';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'moogle-app';
  @Input()apiResult:any;
  show:boolean = false;
  @Input()registeredUser:any;
  constructor(private api:FlixterApiService) {}
  getShow() {
    this.show = !this.show;
    console.log(this.show)
  }
  ngOnInit(): void {
    
  this.api.registerEvent.subscribe((x)=> this.registeredUser = x)
  
  }
}
