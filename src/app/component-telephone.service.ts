import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentTelephoneService {
  @Output()newsURLEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  getNewsURL(url:string){
    return this.newsURLEvent.emit(url) ;
  }
}
