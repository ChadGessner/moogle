import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TheaterData} from 'src/app/models/theater-data.interface';
import { User } from './models/user.interface';
import { TheaterDetails } from './models/theater-details.interface';
import { Observable, from, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chad } from './dataForTesting/loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class FlixterApiService {
  serverUri:string = 'https://localhost:7239/api/User/RegisterUser';
  baseUri:string = 'https://localhost:7239/api/';
  user:any;
  userZips:any;
  theaters:any;
  theaterDetails:any;
  upcomingMovieDetails:any;
  movieDetailsById:any;
  news:any;
  popularMovies:any;

  private userIdRxjs = new BehaviorSubject<any>({});
  currentUserIdRxjs = this.userIdRxjs.asObservable();
  
  @Output()newsEvent:EventEmitter<any> = new EventEmitter();
  @Output()registerEvent:EventEmitter<any> = new EventEmitter<any>();
  // @Output()theatersEvent:EventEmitter<TheaterData> = new EventEmitter();
  // @Output()theatersDetailsEvent:EventEmitter<TheaterDetails> = new EventEmitter();
  // @Output()upcomingMovieDetailsEvent:EventEmitter<any> = new EventEmitter<any>();
  // @Output()movieDetailsByIdEvent:EventEmitter<any> = new EventEmitter<any>();
  // @Output()searchQueryEvent:EventEmitter<any> = new EventEmitter<any>();
  // @Output()celebrityDetailsEvent:EventEmitter<any> = new EventEmitter<any>();
   @Output()popularMovieEvent:EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {

   }

   setUserIdRxjs(userIdRxjs: any) {
    this.userIdRxjs.next(userIdRxjs);
  }

   getPopularMovieList(){
    let uriEnd = 'PopularMovies/GetPopularMoviesList';
    return this.http.get<{}>(this.baseUri + uriEnd)
   }
   searchQuery(query:string, zip:string) {
    let uriEnd = `Search/GetSearchQuery/${query}/${zip}`;
    return this.http.get<{}>(this.baseUri + uriEnd)
    // .subscribe(
    //   (x)=>{
    //     if(x){
    //       console.log(JSON.stringify(x))
    //       return this.searchQueryEvent.emit(x);
    //     }
    //   }
    // )
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
   getLoggedInUser(){
    return this.user;
   }
   userLogin(username:string, password:string){
    let uriEnd = `User/GetUser/${username}/${password}`;
    //this.user = Chad;
    return this.http.get<{}>(this.baseUri + uriEnd)
    // .subscribe(
    //   (x)=>{
    //     if(x) {
    //       this.user = x;
    //       console.log(JSON.stringify(x));
    //       this.registerEvent.emit(this.user);
    //       //return this.getTheaters(this.user.userName, this.user.password)
    //     }
    //   }
    // )
   }
   userLogout() {
    //this.user = null;
   }

   getActorData(actorId:string) {
    let uriEnd = `Search/GetActorData/${actorId}`
    return this.http.get<{}>(this.baseUri + uriEnd)
  //.subscribe(
  //     (x)=>{
  //       if(x){
  //         return this.celebrityDetailsEvent.emit(x)
  //       }
  //     }
  //   )
    }
   getMovieDetailsById(emsVersionId:string){
    let uriEnd = `Movie/GetMovieDetailsByTitle/${emsVersionId}`;
    return this.http.get<{}>(this.baseUri + uriEnd)
    // .subscribe(
    //   (x)=>{
    //     if(x){
    //       this.movieDetailsById = x;
    //       this.movieDetailsByIdEvent.emit(this.movieDetailsById);
    //       //console.log(JSON.stringify(x));
    //     }
    //   }
    // )
   }
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
   getNewsStoryList() {
    let uriEnd = `News/GetNewsStoryList`;
    return this.http.get<{}>(this.baseUri + uriEnd)
    // .subscribe(
      // (x)=>{
      //   if(x){
          // this.news = x;
          // this.newsEvent.emit(this.news);
          // console.log(JSON.stringify(x));
    //     }
    //   }
    // )
   }
   getTheaters(zip:string) {
    
    let uriEnd = `User/GetTheaters/${zip}`;
    return this.http.get<any>(this.baseUri + uriEnd)
    // .subscribe(
    //   (x)=>{
    //     if(x){
    //       this.theaters = x;
    //       console.log(JSON.stringify(x))
    //       return this.theatersEvent.emit(this.theaters);
    //     }
    //   }
    // )
   }
   getTheaterDetails(theaterId:string) {
      return this.http.get<any>(this.baseUri + `User/GetTheaterDetails/${theaterId}`);
      // .subscribe(
      //   (x)=> {
      //     if(x){
      //       console.log(JSON.stringify(x));
      //       this.theatersDetailsEvent.emit(x as TheaterDetails);
      //     }
      //   }
      // )
   }
   updateUser(user:User){
    return this.http.post(this.baseUri + 'User/UpdateUser', {
      user 
    })
    .subscribe(
      (x)=>{
        if(x){
          this.user = x
        }
      }
    )
   }

   addUserZip(user:User, zip:string){
    let uriEnd = `User/AddUserZip/${zip}`;
    return this.http.post<{}>(this.baseUri + uriEnd, {
      user
    })
   }
  
   getUserZips(user:User){
    let uriEnd = `User/GetUserZips/${user.userName}/${user.password}`;
    return this.http.get(this.baseUri + uriEnd)
   }
   passUserZips(){
    return this.userZips as string[];
   }
   passUser() {
    return this.user as User;
   }

   addFavoriteMovie(stuff:any, userId:number){
    let uriEnd = `FavoriteMovie/AddFavoriteMovie/${userId}`;
    return this.http.post<{}>(this.baseUri + uriEnd, {
      stuff
    })
   }

   GetFavoriteMovieList(stuff:any, userId:number){
    let uriEnd = `FavoriteMovie/GetAllFavoriteMovies/${userId}`;
    return this.http.post<{}>(this.baseUri + uriEnd, {
      stuff
    })
   }

   RemoveFavoriteMovie(stuff:any, userId:number){
    let uriEnd = `FavoriteMovie/RemoveFavoriteMovie/${userId}`;
    return this.http.post<{}>(this.baseUri + uriEnd, {
      stuff
    })
   }
}
