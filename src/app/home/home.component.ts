import { Component, OnInit } from '@angular/core';
import { FlixterApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any;
  isLoggedIn: boolean = true
  constructor(private api:FlixterApiService){}
  isMoviesOrNews: boolean = true;
  index: number = 1;

  ngOnInit(): void {
    //this.api.getNewsStoryList()
    this.api.registerEvent.subscribe(
      (x)=>{
        if(x){
          this.user = x;
        }
      }
    )
    // console.log(this.user)
    // console.log(this.user.id)
    // console.log(this.api.user)
    // console.log(this.api.user.id)
    
  }

  getPopularMovies()
  {
 this.isMoviesOrNews = false

  }
  getMovies()
  {
    this.isMoviesOrNews = true
  }
}
