import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlixterApiService } from '../api.service';
import { User } from '../models/user.interface';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user:any;
  constructor(private api:FlixterApiService){}
  onSubmit(user:NgForm){
    
    let userName = user.form.value.userName;
    let password = user.form.value.password;
    this.api.userLogin(userName,password);
    user.resetForm()
  }
  logout() {
    this.user = null;
    this.api.userLogout();
  }
  ngOnInit(): void {
    
    // this.api.registerEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.user = x;
    //     }
    //   }
    // )
  }
}
