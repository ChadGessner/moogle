import { Injectable, Input, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentTelephoneService {
  @Output()newsURLEvent:EventEmitter<string> = new EventEmitter<string>();
  @Output()emsVersionIdEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor() { }
  getEmsVersionId(id:string){
    return this.emsVersionIdEvent.emit(id);
  }
  getNewsURL(url:string){
    return this.newsURLEvent.emit(url) ;
  }
}
