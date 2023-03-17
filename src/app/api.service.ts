import { EventEmitter, Injectable, Output } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TheaterData} from 'src/app/models/theater-data.interface';
import { User } from './models/user.interface';
import { TheaterDetails } from './models/theater-details.interface';
@Injectable({
  providedIn: 'root'
})
export class FlixterApiService {
  // theaterUri:string = 'https://flixster.p.rapidapi.com/theaters/list?zipCode=49519&radius=50';
  // defaultHeaders =  {
	// 	'X-RapidAPI-Key': '8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944',
	// 	'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
	// }
  serverUri:string = 'https://localhost:7239/api/User/RegisterUser';
  baseUri:string = 'https://localhost:7239/api/';
  user:any;
  theaters:any;
  theaterDetails:any;
  @Output()registerEvent:EventEmitter<User> = new EventEmitter();
  @Output()theatersEvent:EventEmitter<TheaterData> = new EventEmitter();
  @Output()theatersDetailsEvent:EventEmitter<TheaterDetails> = new EventEmitter();
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
