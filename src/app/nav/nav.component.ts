import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlixterApiService } from '../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  isHamburger:boolean = false;
  registeredUser:any;
  showToast:boolean = false;
  searchRouteWithParams:string = ''
  constructor(
    private api:FlixterApiService,
     private route:ActivatedRoute, 
      private router:Router){}

  toggleHamburger(){
    this.isHamburger = !this.isHamburger;
    
  }
  isNotIsShowToast(){
    this.showToast = !this.showToast;
    
  }
  getTheaterListRoute() {
    if(this.api.user){
      return `/theaters/${this.api.user.userName}/${this.api.user.password}`;
    }
    return '/theaters'
  }
  searchQuery(queryParam:NgForm){
    if(this.registeredUser){
      console.log(queryParam.form.value.search)
      //this.api.searchQuery(queryParam.form.value.search, this.registeredUser)
      this.searchRouteWithParams = `/search/${queryParam.form.value.search}/${this.api.user.zipCode}`;
    }else{
      this.isNotIsShowToast();
      this.isHamburger ? this.toggleHamburger() : this.isHamburger;
    }
  }

  ngOnInit(): void {
    this.api.registerEvent.subscribe(
      (x)=>{
        if(x){
          this.registeredUser = x;
        }
      }
    )
  }
}
