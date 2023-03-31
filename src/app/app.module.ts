import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls'
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { UserLoginComponent } from './user-login/user-login.component';
import { NavComponent } from './nav/nav.component';
import { TheatersComponent } from './theaters/theaters.component';
import { HomeComponent } from './home/home.component';
import { TheaterDetailsComponent } from './theater-details/theater-details.component';
import { NewsComponent } from './news/news.component';
import { NewsStoryComponent } from './news-story/news-story.component';
import { UpcomingMovieDetailsComponent } from './upcoming-movie-details/upcoming-movie-details.component';
import { MovieDetailComponent } from './movie-details/movie-detail/movie-detail.component';
import { ActorsComponent } from './actors/actors.component';
import { SearchComponent } from './search/search.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TruncatePipe } from './shared/truncate-pipe';
import { ScrollableDirective } from './scrollable.directive';
import { TrailerComponent } from './movie-details/trailer/trailer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDescriptionComponent } from './movie-details/movie-description/movie-description.component';
import { MovieCastComponent } from './movie-details/movie-cast/movie-cast.component';
import { MovieImagesComponent } from './movie-details/movie-images/movie-images.component';
import { MovieInfoComponent } from './movie-details/movie-info/movie-info.component';
import { MovieReviewsComponent } from './movie-details/movie-reviews/movie-reviews.component'


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
    PopularMoviesComponent,
    TruncatePipe,
    ScrollableDirective,
    TrailerComponent,
    MovieDescriptionComponent,
    MovieCastComponent,
    MovieImagesComponent,
    MovieInfoComponent,
    MovieReviewsComponent

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
    MatCardModule,
    MatTabsModule,
    BrowserAnimationsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
