import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TheaterData} from 'src/app/models/theater-data.interface';
import { User } from './models/user.interface';
import { TheaterDetails } from './models/theater-details.interface';

import { Observable, from, BehaviorSubject } from 'rxjs';
//import { map } from 'rxjs/operators';

import { Chad } from './dataForTesting/loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class FlixterApiService {
  serverUri:string = 'https://localhost:7239/api/User/RegisterUser';
  baseUri:string = 'https://localhost:7239/api/';
  user:any ;
  userZips:any;
  theaters:any;
  theaterDetails:any;
  upcomingMovieDetails:any;
  movieDetailsById:any;
  news:any;
  popularMovies:any;

  private userIdRxjs = new BehaviorSubject<any>({});
  currentUserIdRxjs = this.userIdRxjs.asObservable();

  private emsVersionIdRxjs = new BehaviorSubject<any>({});
  currentEmsVersionIdRxjs = this.emsVersionIdRxjs.asObservable();

  private emsIdRxjs = new BehaviorSubject<any>({});
  currentEmsIdRxjs = this.emsIdRxjs.asObservable();

  private userRxjs = new BehaviorSubject<any>({});
  currentUserRxjs = this.userRxjs.asObservable();
  
  @Output()newsEvent:EventEmitter<any> = new EventEmitter();
  @Output()registerEvent:EventEmitter<any> = new EventEmitter<any>();
  @Output()popularMovieEvent:EventEmitter<any> = new EventEmitter();

  constructor(private http:HttpClient) {

   }

   setUserIdRxjs(userIdRxjs: any) {
    this.userIdRxjs.next(userIdRxjs);
  }
  setUserRxjs(userRxjs: any) {
    this.userRxjs.next(userRxjs);
  }
  setEmsVersionIdRxjs(emsVersionIdRxjs: any) {
    this.emsVersionIdRxjs.next(emsVersionIdRxjs);
  }
  setEmsIdRxjs(emsIdRxjs: any) {
    this.emsIdRxjs.next(emsIdRxjs);
  }

   getPopularMovieList(){
    let uriEnd = 'PopularMovies/GetPopularMoviesList';
    return this.http.get<{}>(this.baseUri + uriEnd)
   }
   searchQuery(query:string, zip:string) {
    let uriEnd = `Search/GetSearchQuery/${query}/${zip}`;
    return this.http.get<{}>(this.baseUri + uriEnd)
    
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
    
   }
   userLogout() {
    //this.user = null;
   }

   getActorData(actorId:string) {
    let uriEnd = `Search/GetActorData/${actorId}`
    return this.http.get<{}>(this.baseUri + uriEnd)
  
    }
   getMovieDetailsById(emsVersionId:string){
    let uriEnd = `Movie/GetMovieDetailsByTitle/${emsVersionId}`;
    return this.http.get<{}>(this.baseUri + uriEnd)
    
   }
    getUpcomingMovieDetails() {
     let uriEnd = `Movie/GetUpcomingMovieDetails`
     return this.http.get<{}>(this.baseUri + uriEnd)
  
    }
   getNewsStoryList() {
    let uriEnd = `News/GetNewsStoryList`;
    return this.http.get<{}>(this.baseUri + uriEnd)
    
   }
   getTheaters(zip:string) {
    
    let uriEnd = `User/GetTheaters/${zip}`;
    return this.http.get<any>(this.baseUri + uriEnd)
    
   }
   getTheaterDetails(theaterId:string) {
      return this.http.get<any>(this.baseUri + `User/GetTheaterDetails/${theaterId}`);
      
   }
   updateUser(user:User){
    return this.http.patch(this.baseUri + 'User/UpdateUser', {
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

   getFavoriteMovieList(userId:number){
    let uriEnd = `FavoriteMovie/GetAllFavoriteMovies/${userId}`;
    return this.http.get<{}>(this.baseUri + uriEnd, {
    })
   }

   removeFavoriteMovie(userId:number, emsId:string){
    console.log("InApiServie")
    let uriEnd = `FavoriteMovie/RemoveFavoriteMovie/${userId}/${emsId}`;
    return this.http.post<{}>(this.baseUri + uriEnd, {})
   }

   checkIfFavorited(userId: number , favoriteMovieEmsVersionId: string){
    
      let uriEnd = `FavoriteMovie/CheckIfFavorited/${userId}/${favoriteMovieEmsVersionId}`;
      return this.http.get<{}>(this.baseUri + uriEnd)
    
   }
}
