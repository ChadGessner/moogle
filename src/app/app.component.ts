import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlixterApiService } from './flixter-api.service';
import {TheaterData} from 'src/app/models/theater-data.interface';
import {Theater} from 'src/app/models/theater.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'moogle-app';
  apiResult:any;
  constructor(private api:FlixterApiService) {}

  ngOnInit(): void {
    this.api.getLocalTheaterData().subscribe(
      (x)=>
      this.apiResult = x
    )
  }
}
