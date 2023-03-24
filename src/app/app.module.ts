import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls'
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavComponent } from './nav/nav.component';
import { TheatersComponent } from './theaters/theaters.component';
import { HomeComponent } from './home/home.component';
import { TheaterDetailsComponent } from './theater-details/theater-details.component';
import { NewsComponent } from './news/news.component';
import { NewsStoryComponent } from './news-story/news-story.component';
import { UpcomingMovieDetailsComponent } from './upcoming-movie-details/upcoming-movie-details.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorsComponent } from './actors/actors.component';
import { SearchComponent } from './search/search.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsComponent } from './google-maps/google-maps.component'


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    NavComponent,
    TheatersComponent,
    HomeComponent,
    TheaterDetailsComponent,
    NewsComponent,
    NewsStoryComponent,
    UpcomingMovieDetailsComponent,
    MovieDetailComponent,
    ActorsComponent,
    SearchComponent,
    AccountDetailsComponent,
    GoogleMapsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
