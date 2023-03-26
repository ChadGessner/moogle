import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
import { TestNews } from '../dataForTesting/theNews';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}




@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit{

  news:any;
  startNewsIndex: number = 0;
  endNewsIndex: number = 5;
  startOfNews: boolean = true;
  endOfNews: boolean = false;
  // news = TestNews;
  
  constructor(
    private api:FlixterApiService,
     private phone:ComponentTelephoneService){}
      navigate(url:string) {

        window.open(url);
      }
  getStory(event:string) {
    return this.phone.getNewsURL(event);
  }
  newsSubscription(){
    this.api.newsEvent.subscribe(
      (x)=>{
        if(x){
          this.news = x;
          JSON.stringify(this.news);
        }
      }
    )
  }

  ngOnInit(): void {
    this.api.getNewsStoryList().subscribe(x => this.news = x);
    // this.newsSubscription();
  }

  getNextSixStories(startIndex: number, endIndex: number): void {
    this.startNewsIndex = endIndex++
    this.endNewsIndex = endIndex + 4
    this.startOfNews = false
    if (this.endNewsIndex >= this.news.data.newsStories.length)
    {
      this.startNewsIndex = this.news.data.newsStories.length - 5
      this.endNewsIndex = this.news.data.newsStories.length
      this.endOfNews = true;
    }
  }
  getLastSixStories(startIndex: number, endIndex: number): void {
    if (startIndex <= 5)
    {
      
      this.startNewsIndex = startIndex = 0
      this.endNewsIndex = 5;
      this.startOfNews = true

    }
    else
    {
      this.startNewsIndex = startIndex - 5
      this.endNewsIndex = endIndex - 5
    }

  }
  getFirstSixStories(): void {
    this.startNewsIndex = 0
    this.endNewsIndex = 5
    this.startOfNews = true;
    this.endOfNews = false;
  }
}

