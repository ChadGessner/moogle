import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private api:FlixterApiService){}

  toggleHamburger(){
    this.isHamburger = !this.isHamburger;
    
  }
  isNotIsShowToast(){
    this.showToast = !this.showToast;
    
  }
  searchQuery(queryParam:NgForm){
    if(this.registeredUser){
      console.log(queryParam.form.value.search)
      //this.api.searchQuery(queryParam.form.value.search, this.registeredUser)
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
