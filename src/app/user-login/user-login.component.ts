import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FlixterApiService } from '../api.service';
import { User } from '../models/user.interface';
import { Chad } from '../dataForTesting/loggedInUser';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  @Input()registeredUser:any;
  constructor(private api:FlixterApiService){}
  onSubmit(user:NgForm){
    
    let userName = user
    .form
    .value
    .userName;
    let password = user.form.value.password;
    this.api.userLogin(userName,password)
    .subscribe(
      (x)=>{
        if(x){
          this.api.user = x
          this.setUserIdRxjs(this.api.user.id);
          this.registeredUser = x
          this.api.getUserZips(x as User).subscribe(
            (z)=>{
              if(z){
                console.log(z)
                return this.api.userZips = z;
              }
              return;
            }
          )
          return this.api.registerEvent.emit(this.api.user);
        }
      }
    );
    //this.user = Chad
    user.resetForm();
    //this.user = this.api.user
  }
  getLoggedInUser() {
    return this.api.getLoggedInUser();
  }
  logout() {
    this.registeredUser = null;
    this.api.userLogout();
  }
  setUserIdRxjs(userIdRxjs: any) {
    this.api.setUserIdRxjs(userIdRxjs);
  }
  ngOnInit(): void {
    
    // this.api.registerEvent.subscribe(
    //   (x)=>{
        
    //       console.log(this.api.user)
    //       return this.user = x;
        
    //   }
    // )
  }
}
