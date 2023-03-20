import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FlixterApiService } from './api.service';
import { TheaterData } from './models/theater-data.interface';

@Injectable({
  providedIn: 'root'
})
export class ComponentTelephoneService {
  @Output()newsURLEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()emsVersionIdEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()theaterIdEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()theaterNameEvent:EventEmitter<string> = new EventEmitter<string>();
  theaterList:TheaterData|null = null;
  @Input()theaterName:string|null = null;
  constructor(private api:FlixterApiService) { }
  getEmsVersionId(id:string){
    //this.api.getMovieDetailsById(id);
    return this.emsVersionIdEvent.emit(id);
  }
  getTheaterList(theaters:TheaterData){
    this.theaterList = theaters;
  }
  getTheaterId(id:string) {
   // this.api.getTheaterDetails(id)
    return this.theaterIdEvent.emit(id);
  }
  getNewsURL(url:string){
    return this.newsURLEvent.emit(url);
  }
  getTheaterName(theaterName:string) {
    this.theaterName = theaterName;
    console.log(this.theaterName);
    
    return this.theaterNameEvent.emit(this.theaterName);
  }
}
