import { Component, OnChanges, SimpleChanges,OnInit, Input, HostListener, Renderer2 } from '@angular/core';
import { FlixterApiService } from '../api.service';
import {Chad} from '../dataForTesting/loggedInUser';
import { User } from '../models/user.interface';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit, OnChanges{
  @Input()registeredUser:any
  notIsActive:{
    id:string,
    isActive:boolean}[] = [{
    id:'btn-1',
    isActive:false
  },{
    id:'btn-2',
    isActive:false
  },{
    id:'btn-3',
    isActive:false
  },{
    id:'btn-4',
    isActive:false
  },{
    id:'btn-5',
    isActive:false
  },{
    id:'btn-6',
    isActive:false
  },{
    id:'btn-7',
    isActive:false
  },{
    id:'btn-8',
    isActive:false
  }]
  constructor(private api:FlixterApiService, private render:Renderer2){
    
  }
  @HostListener('click', ['$event'])getForm(e:MouseEvent) {
    let target = e.target as HTMLButtonElement;
    if(target && this.notIsActive.some(x=>x.id === target.id)){
      this.notIsActive.map(x=> x.id === target.id ? x.isActive = !x.isActive : x.isActive);
      
    }
  }
  getFullName() {
    return this.registeredUser.firstName + " " + this.registeredUser.lastName
  }
  isSubmit() {
    return this.notIsActive.some(x=>x.isActive)
  }
  logUser(){
    console.log(this.registeredUser)
  }

  ngOnInit(): void {
    this.registeredUser = Chad
    // this.api.registerEvent.subscribe(
    //   x=> this.registeredUser = x
    // )
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  
}
