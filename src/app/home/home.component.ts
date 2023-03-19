import { Component, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private api:FlixterApiService){}

  ngOnInit(): void {
    //this.api.getNewsStoryList()
  }
}
