import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
import { TestNews } from '../dataForTesting/theNews';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit{
  popularMovies:any;
  startPopularMovieIndex: number = 0;
  endPopularMovieIndex: number = 5;
  startOfPopularMovies: boolean = true;
  endOfPopularMovies: boolean = false;
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
          this.popularMovies = x;
          JSON.stringify(this.popularMovies);
        }
      }
    )
  }

  ngOnInit(): void {
    this.api.getNewsStoryList().subscribe(x => this.popularMovies = x);
    // this.newsSubscription();
  }

  getNextSixStories(startIndex: number, endIndex: number): void {
    this.startPopularMovieIndex = endIndex++
    this.endPopularMovieIndex = endIndex + 4
    this.startOfPopularMovies = false
    if (this.endPopularMovieIndex >= this.popularMovies.data.newsStories.length)
    {
      this.startPopularMovieIndex = this.popularMovies.data.newsStories.length - 5
      this.endPopularMovieIndex = this.popularMovies.data.newsStories.length
      this.endOfPopularMovies = true;
    }
  }
  getLastSixStories(startIndex: number, endIndex: number): void {
    if (startIndex <= 5)
    {
      
      this.startPopularMovieIndex = startIndex = 0
      this.endPopularMovieIndex = 5;
      this.startOfPopularMovies = true

    }
    else
    {
      this.startPopularMovieIndex = startIndex - 5
      this.endPopularMovieIndex = endIndex - 5
    }

  }
  getFirstSixStories(): void {
    this.startPopularMovieIndex = 0
    this.endPopularMovieIndex = 5
    this.startOfPopularMovies = true;
    this.endOfPopularMovies = false;
  }
}
