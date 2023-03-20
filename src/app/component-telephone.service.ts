import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { FlixterApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ComponentTelephoneService {
  @Output()newsURLEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()emsVersionIdEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()theaterIdEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor(private api:FlixterApiService) { }
  getEmsVersionId(id:string){
    //this.api.getMovieDetailsById(id);
    return this.emsVersionIdEvent.emit(id);
  }
  getTheaterId(id:string) {
   // this.api.getTheaterDetails(id)
    return this.theaterIdEvent.emit(id);
  }
  getNewsURL(url:string){
    return this.newsURLEvent.emit(url);
  }
}
