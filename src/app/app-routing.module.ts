import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatersComponent } from './theaters/theaters.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'register', component: UserRegistrationComponent
  },{
    path: 'login', component: UserLoginComponent
  },{

    path: 'theaters', component: TheatersComponent
  },{
    path: 'home', component: HomeComponent

  },{
    path: '', redirectTo: '/register', pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
