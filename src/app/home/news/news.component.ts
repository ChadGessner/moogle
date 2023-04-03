import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlixterApiService } from '../../api.service';
import { TestNews } from '../../dataForTesting/theNews';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnInit {

  news: any;
  startNewsIndex: number = 0;
  endNewsIndex: number = 5;
  startOfNews: boolean = true;
  endOfNews: boolean = false;


  constructor(
    private api: FlixterApiService) { }
  navigate(url: string) {

    window.open(url);
  }
  newsSubscription() {
    this.api.newsEvent.subscribe(
      (x) => {
        if (x) {
          this.news = x;
          JSON.stringify(this.news);
        }
      }
    )
  }

  ngOnInit(): void {
    this.api.getNewsStoryList().subscribe(x => this.news = x);

  }
}

