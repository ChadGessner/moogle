import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FlixterApiService } from '../api.service';
import { Chad } from '../dataForTesting/loggedInUser';

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
  userRxjs: any;
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
  getLoggedInUser() {
    return this.api.getLoggedInUser();
  }
  getTheaterListRoute() {
   
    if(this.getLoggedInUser()){
      this.router.navigate([
        'theaters',
        this.api.user.zipCode
      ]) 
      
    }else{
      this.isNotIsShowToast();
    }
    this.isHamburger ? this.toggleHamburger() : this.isHamburger;
  }
  searchQuery(queryParam:NgForm){
    console.log(queryParam)
      this.router.navigate([
        'search',
        queryParam.form.value.search
        
      ])
      this.toggleHamburger()
    return queryParam.form.reset();
  }
  hamburgerSearch(query:NgForm){
    console.log(query)
      this.router.navigate([
        'search',
        query.form.value.search
        
      ])
    return query.form.reset();
  }
  ngOnInit(): void {
    this.api.currentUserRxjs.subscribe((value) => {
      this.userRxjs = value;
    });
    this.api.registerEvent.subscribe(
      (x)=>{
        if(x){
          this.registeredUser = x;
        }
      }
    )

  }
}
