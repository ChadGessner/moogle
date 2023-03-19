import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TheaterData} from 'src/app/models/theater-data.interface';
import { User } from './models/user.interface';
import { TheaterDetails } from './models/theater-details.interface';
@Injectable({
  providedIn: 'root'
})
export class FlixterApiService {
  serverUri:string = 'https://localhost:7239/api/User/RegisterUser';
  baseUri:string = 'https://localhost:7239/api/';
  user:any;
  theaters:any;
  theaterDetails:any;
  upcomingMovieDetails:any;
  movieDetailsById:any;
  news:any;
  @Output()newsEvent:EventEmitter<any> = new EventEmitter();
  @Output()registerEvent:EventEmitter<User> = new EventEmitter();
  @Output()theatersEvent:EventEmitter<TheaterData> = new EventEmitter();
  @Output()theatersDetailsEvent:EventEmitter<TheaterDetails> = new EventEmitter();
  @Output()upcomingMovieDetailsEvent:EventEmitter<any> = new EventEmitter<any>();
  @Output()movieDetailsByIdEvent:EventEmitter<any> = new EventEmitter<any>();
  constructor(private http:HttpClient) {

   }

   registerNewUser(user:User) {
      this.http.post<User>(this.serverUri, user)
      .subscribe((x)=>{
        if(x){
          this.user = x
        }
        return this.registerEvent.emit(this.user)
      })
   }
   userLogin(username:string, password:string){
    let uriEnd = `User/GetUser/${username}/${password}`;
    this.http.get<{}>(this.baseUri + uriEnd).subscribe(
      (x)=>{
        if(x) {
          this.user = x;
          this.registerEvent.emit(this.user);
          //return this.getTheaters(this.user.userName, this.user.password)
        }
      }
    )
   }
  //  getMovieDetailsById(emsVersionId:string){
  //   let uriEnd = `Movie/GetMovieDetailsByTitle/${emsVersionId}`;
  //   this.http.get<{}>(this.baseUri + uriEnd).subscribe(
  //     (x)=>{
  //       if(x){
  //         this.movieDetailsById = x;
  //         this.movieDetailsByIdEvent.emit(this.movieDetailsById);
  //         console.log(JSON.stringify(x));
  //       }
  //     }
  //   )
  //  }
  //  getUpcomingMovieDetails() {
  //   let uriEnd = `Movie/GetUpcomingMovieDetails`
  //   this.http.get<{}>(this.baseUri + uriEnd).subscribe(
  //     (x)=>{
  //       if(x){
  //         this.upcomingMovieDetails = x;
  //         this.upcomingMovieDetailsEvent.emit(this.upcomingMovieDetails);
  //       }
  //     }
  //   )
  //  }
  //  getNewsStoryList() {
  //   let uriEnd = `News/GetNewsStoryList`;
  //   this.http.get<{}>(this.baseUri + uriEnd).subscribe(
  //     (x)=>{
  //       if(x){
  //         this.news = x;
  //         this.newsEvent.emit(this.news);
  //         console.log(JSON.stringify(x));
  //       }
  //     }
  //   )
  //  }
  //  getTheaters(username:string, password:string) {
    
  //   let uriEnd = `User/GetTheaters/${username}/${password}`;
  //   this.http.get<data>(this.baseUri + uriEnd).subscribe(
  //     (x)=>{
  //       if(x){
  //         this.theaters = x;
  //         console.log(JSON.stringify(x))
  //         return this.theatersEvent.emit(this.theaters);
  //       }
  //     }
  //   )
  //  }
  //  getTheaterDetails(theaterId:string) {
  //     this.http.get<TheaterDetails>(this.baseUri + `User/GetTheaterDetails/${theaterId}`)
  //     .subscribe(
  //       (x)=> {
  //         if(x){
  //           this.theatersDetailsEvent.emit(x as TheaterDetails);
  //         }
  //       }
  //     )
  //  }
  //  getLocalTheaterData() {
  //   return this.http.get<data>(this.theaterUri, {
  //     "headers" : this.defaultHeaders
  //   }, )
  //  }
}
