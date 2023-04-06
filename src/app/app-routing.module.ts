import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TheatersComponent } from './theaters/theaters.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { UserRegistrationComponent } from './login/user-registration/user-registration.component';
import { HomeComponent } from './home/home.component';
import { TheaterDetailsComponent } from './theaters/theater-details/theater-details.component';
import { UpcomingMovieDetailsComponent } from './home/upcoming-movie-details/upcoming-movie-details.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { SearchComponent } from './nav/search/search.component';
import { ActorsComponent } from './actors/actors.component';
import { FavoriteListComponent } from './favorite-movies/favorite-list/favorite-list.component';
import {FavoriteMoviesComponent } from './favorite-movies/favorite/favorite.component'

const routes: Routes = [
  {
    path: 'register',
     component: UserRegistrationComponent
  },{
    path: 'favorite-movies',
    component: FavoriteMoviesComponent
  },{
    path: 'login',
     component: UserLoginComponent
  },{
    path: 'theater-details',
     component: TheaterDetailsComponent
  },{
    path: 'upcoming-movies',
     component: UpcomingMovieDetailsComponent
  },{
    path: 'theaters/:zip',
     component: TheatersComponent
  },{
    path: 'theaters/:zip/:theaterId/:theaterName',
    component: TheatersComponent
  },{
    path: 'actor/:id',
    component: ActorsComponent
  },{
    path: 'movie-detail/:emsVersionId',
     component: MovieDetailComponent
  },{
    path: 'search/:id',
    component: SearchComponent
  },{
    path: 'home',
     component: HomeComponent
  },{
    path: 'favorite-movies',
      component: FavoriteListComponent
  },{
    path: '',
     redirectTo: 'home',
      pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
