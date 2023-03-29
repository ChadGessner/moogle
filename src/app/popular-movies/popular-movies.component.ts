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
     private phone:ComponentTelephoneService,
     private router:Router){}


     
     passEmsVersionId(id: string) {
      this.router.navigate([
        '/movie-detail', id
      ])
    }
      navigate(url:string) {

        window.open(url);
      }
  getPopularMovie(event:string) {
    return this.phone.getPopularMovieURL(event);
  }
  popularMovieSubscription(){
    this.api.popularMovieEvent.subscribe(
      (x)=>{
        if(x){
          this.popularMovies = x;
          JSON.stringify(this.popularMovies);
        }
      }
    )
  }
// addIndex(){this.endPopularMovieIndex++}
  ngOnInit(): void {
    this.api.getPopularMovieList().subscribe((x) =>{ 
      this.popularMovies = x;
      console.log("test");
      // for(let p of this.popularMovies)
      // {
      //   console.log(p.posterImage.url);

      // }
      // console.log(this.popularMovies.data.posterImage.url);
    } );
    // this.newsSubscription();
  }

  getNextSixPopularMovies(startIndex: number, endIndex: number): void {
    this.startPopularMovieIndex = endIndex++
    this.endPopularMovieIndex = endIndex + 4
    this.startOfPopularMovies = false
    if (this.endPopularMovieIndex >= this.popularMovies.data.popular.length)
    {
      this.startPopularMovieIndex = this.popularMovies.data.popular.length - 5
      this.endPopularMovieIndex = this.popularMovies.data.popular.length
      this.endOfPopularMovies = true;
    }
  }
  getLastSixPopularMovies(startIndex: number, endIndex: number): void {
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
  getFirstSixPopularMovies(): void {
    this.startPopularMovieIndex = 0
    this.endPopularMovieIndex = 5
    this.startOfPopularMovies = true;
    this.endOfPopularMovies = false;
  }
}
