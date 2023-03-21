import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
import { TestNews } from '../dataForTesting/theNews';
import { Router } from '@angular/router';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit{
  //news:any;
  news = TestNews;
  
  constructor(
    private api:FlixterApiService,
     private phone:ComponentTelephoneService){}
      navigate(url:string) {

        window.location.href = url;
      }
  getStory(event:string) {
    return this.phone.getNewsURL(event);
  }
  // newsSubscription(){
  //   this.api.newsEvent.subscribe(
  //     (x)=>{
  //       if(x){
  //         this.news = x;
  //         JSON.stringify(this.news);
  //       }
  //     }
  //   )
  // }

  ngOnInit(): void {
    //this.newsSubscription();
  }
}
