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
  user:User|null = null;
  constructor(private api:FlixterApiService){}
  onSubmit(user:NgForm){
    
    let userName = user.form.value.userName;
    let password = user.form.value.password;
    this.api.userLogin(userName,password);
    user.resetForm()
    
  }
  
  ngOnInit(): void {
    this.api.registerEvent.subscribe(
      (x)=>{
        if(x){
          this.user = x;
        }
      }
    )
  }
}
