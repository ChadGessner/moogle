import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TheaterData} from 'src/app/models/theater-data.interface';
import {Theater} from 'src/app/models/theater.interface';
@Injectable({
  providedIn: 'root'
})
export class FlixterApiService {
  theaterUri:string = 'https://flixster.p.rapidapi.com/theaters/list?zipCode=49519&radius=50';
  defaultHeaders =  {
		'X-RapidAPI-Key': '8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944',
		'X-RapidAPI-Host': 'flixster.p.rapidapi.com'
	}
  constructor(private http:HttpClient) {

   }
   getLocalTheaterData() {
    return this.http.get<TheaterData>(this.theaterUri, {
      "headers" : this.defaultHeaders
    }, )
   }
}
