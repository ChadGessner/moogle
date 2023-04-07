import { Component, OnChanges, SimpleChanges,OnInit, Input, HostListener, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';


import { FlixterApiService } from '../../api.service';
import {Chad} from '../../dataForTesting/loggedInUser';
import { User } from '../../models/user.interface';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit, OnChanges{
  @Input()registeredUser:any
  @Input()userZips:string[] = [];
  canSubmit:boolean = false;
  isToggleZips:boolean = false;
  isSubmitZips:boolean = false;
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
  },{
    id:'btn-9',
    isActive:false
  },{
    id:'btn-10',
    isActive:false
  }]
  constructor(
    private api:FlixterApiService,
     private render:Renderer2){
    
  }
  @HostListener('click', ['$event'])getForm(e:MouseEvent) {
    let target = e.target as HTMLButtonElement;
    if(target && this.notIsActive.some(x=>x.id === target.id)){
      this.notIsActive.map(x=> x.id === target.id ? x.isActive = !x.isActive : x.isActive);
      
    }
  }
  toggleZips() {
    this.isToggleZips = !this.isToggleZips;
  }
  logout() {
    this.registeredUser = null;
    this.api.userLogout();
  }
  submitZip(userZip:NgForm) {
    if(this.isSubmitZips){
      const newZip = userZip.form.value.userZip;
      this.api.addUserZip(this.api.user, newZip).subscribe(
        (x)=>{
          if(x){
            
            this.api.theaters = x;
            this.api.user.zipCode = newZip;
            this.api.getUserZips(this.api.user).subscribe(
              (x)=>{
                this.api.userZips = x as string[]
                this.userZips = this.api.passUserZips()
                this.canSubmitZips();
              }
            )
          }
        }
      )
    }
    
  }
  canSubmitZips(){
    this.isSubmitZips = !this.isSubmitZips;
  }
  showKeys() {
    const keys = this.registeredUser as {[key:string]: string};
    let upDootUser : {[key:string]: string} = {};
    for(let key of Object.keys(keys)){
      upDootUser[key] = keys[key];
    }
    return upDootUser;
  }
  getUserZips(){
    return this.api.passUserZips();
  }
  onSubmit(updatedUser:NgForm){
    
    this.showKeys()
    let upDootUser : {[key:string]: string} = {};
    const keys = this.registeredUser as object;
    let i = 0
    for(let key of Object.keys(keys)){
      
      if(updatedUser.form.contains(key)){
        if(updatedUser.form.value[key]){
          upDootUser[key] = updatedUser.form.value[key]
        }
      }else{
          upDootUser[key] = Object.values(keys)[i]
        
        
      }
      i++;
    }
    if(this.canSubmit){
      this.api.updateUser(JSON.parse(JSON.stringify(upDootUser)));
      this.clickSubmit();
    }
     
  }
  clickSubmit() {
    this.canSubmit = !this.canSubmit;
  }
  isSubmit() {
    return this.notIsActive.some(x=>x.isActive)
  }

  ngOnInit(): void {
    this.api.registerEvent.subscribe(
      (x)=>{
        return this.registeredUser = x
      }
    )
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  
}
