import { Component, NgModule, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FlixterApiService } from '../api.service';
import {User} from '../models/user.interface';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  
  constructor(private api:FlixterApiService){}
  
  register(newUser: NgForm){
    let user:User = {
      firstName: newUser.form.value.firstName,
      lastName: newUser.form.value.lastName,
      userName: newUser.form.value.userName,
      password: newUser.form.value.password,
      email: newUser.form.value.email,
      phone: newUser.form.value.phone,
      address: newUser.form.value.address,
      city: newUser.form.value.city,
      state: newUser.form.value.state,
      zipCode: newUser.form.value.zipCode
    }
    
    return this.clearForm(newUser);
    // this.api.registerNewUser(user);
  }
  clearForm(newUser: NgForm) {
    newUser.form.reset();
  }
}
