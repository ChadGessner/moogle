import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlixterApiService } from '../../api.service';
import { UpcomingMovieDetailsTest } from '../../dataForTesting/upcomingMovieDetailsTest';
import { UpcomingMovieDetails } from '../../models/upcoming-movie-details.interface';
@Component({
  selector: 'app-upcoming-movie-details',
  templateUrl: './upcoming-movie-details.component.html',
  styleUrls: ['./upcoming-movie-details.component.css']
})
export class UpcomingMovieDetailsComponent implements OnInit {
  upcomingMovieDetails: any;
  startMovieIndex: number = 0;
  endMovieIndex: number = 5;
  startOfMovies: boolean = true;
  endOfMovies: boolean = false;

  constructor(
    private api: FlixterApiService,
      private route: ActivatedRoute,
       private router:Router) { }
  passEmsVersionId(id: string) {
    this.router.navigate([
      '/movie-detail',
       id
    ])
  }
  ngOnInit(): void {
    //this.upcomingMovieDetails = UpcomingMovieDetailsTest;
    //console.log(this.upcomingMovieDetails)
    // this.api.getUpcomingMovieDetails();
     this.api.getUpcomingMovieDetails().subscribe(
       (x)=>{
         if(x){
           this.upcomingMovieDetails = x;
           JSON.stringify(this.upcomingMovieDetails)
         }
       }
     )
  }
  getNextSixMovies(startIndex: number, endIndex: number): void {
    this.startMovieIndex = endIndex++
    this.endMovieIndex = endIndex + 4
    this.startOfMovies = false
    if (this.endMovieIndex >= this.upcomingMovieDetails.data.upcoming.length)
    {
      this.startMovieIndex = this.upcomingMovieDetails.data.upcoming.length - 5
      this.endMovieIndex = this.upcomingMovieDetails.data.upcoming.length
      this.endOfMovies = true;
    }
  }
  getLastSixMovies(startIndex: number, endIndex: number): void {
    if (startIndex <= 5)
    {
      
      this.startMovieIndex = startIndex = 0
      this.endMovieIndex = 5;
      this.startOfMovies = true

    }
    else
    {
      this.startMovieIndex = startIndex - 5
      this.endMovieIndex = endIndex - 5
    }

  }
  getFirstSixMovies(): void {
    this.startMovieIndex = 0
    this.endMovieIndex = 5
    this.startOfMovies = true;
    this.endOfMovies = false;
  }
}
