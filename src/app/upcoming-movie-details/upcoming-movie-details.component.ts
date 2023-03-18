import { Component, OnInit, Input } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { UpcomingMovieDetailsTest } from '../dataForTesting/upcomingMovieDetailsTest';
@Component({
  selector: 'app-upcoming-movie-details',
  templateUrl: './upcoming-movie-details.component.html',
  styleUrls: ['./upcoming-movie-details.component.css']
})
export class UpcomingMovieDetailsComponent implements OnInit {
  @Input()upcomingMovieDetails:any;
  constructor(private api:FlixterApiService){}

  ngOnInit(): void {
    this.upcomingMovieDetails = UpcomingMovieDetailsTest;
    console.log(this.upcomingMovieDetails)
    // this.api.getUpcomingMovieDetails();
    // this.api.upcomingMovieDetailsEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.upcomingMovieDetails = x;
    //       console.log(JSON.stringify(this.upcomingMovieDetails))
    //     }
    //   }
    // )
  }
}