import { Component, OnInit, Input } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
import { UpcomingMovieDetailsTest } from '../dataForTesting/upcomingMovieDetailsTest';
import { UpcomingMovieDetails } from '../models/upcoming-movie-details.interface';
@Component({
  selector: 'app-upcoming-movie-details',
  templateUrl: './upcoming-movie-details.component.html',
  styleUrls: ['./upcoming-movie-details.component.css']
})
export class UpcomingMovieDetailsComponent implements OnInit {
  @Input() upcomingMovieDetails: any;
  startMovieIndex: number = 0;
  endMovieIndex: number = 6;
  startOfMovies: boolean = true;
  endOfMovies: boolean = false;

  constructor(private api: FlixterApiService, private phone: ComponentTelephoneService) { }
  passEmsVersionId(id: string) {
    this.phone.getEmsVersionId(id);
  }
  ngOnInit(): void {
    this.upcomingMovieDetails = UpcomingMovieDetailsTest;
    //console.log(this.upcomingMovieDetails)
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
  getNextSixMovies(startIndex: number, endIndex: number): void {
    this.startMovieIndex = endIndex++
    this.endMovieIndex = endIndex + 5
    this.startOfMovies = false
    if (this.endMovieIndex >= 96)
    {
      this.startMovieIndex = 90
      this.endMovieIndex = 96
      this.endOfMovies = true;
    }
  }
  getLastSixMovies(startIndex: number, endIndex: number): void {
    if (startIndex < 7)
    {
      
      this.startMovieIndex = startIndex = 0
      this.endMovieIndex = 6;
      this.startOfMovies = true

    }
    else
    {
      this.startMovieIndex = startIndex - 6
      this.endMovieIndex = endIndex - 6
    }

  }
  getFirstSixMovies(): void {
    this.startMovieIndex = 0
    this.endMovieIndex = 6
    this.startOfMovies = true;
    this.endOfMovies = false;
  }
}
