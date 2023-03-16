import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {


  onSubmit(user:NgForm){
    console.log(user.form.value.userName);
    console.log(user.form.value.password);
    user.resetForm()
    
  }
}
