import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationComponent } from './login/user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls'
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { NavComponent } from './nav/nav.component';
import { TheatersComponent } from './theaters/theaters.component';
import { HomeComponent } from './home/home.component';
import { TheaterDetailsComponent } from './theaters/theater-details/theater-details.component';
import { NewsComponent } from './home/news/news.component';
import { UpcomingMovieDetailsComponent } from './home/upcoming-movie-details/upcoming-movie-details.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { ActorsComponent } from './actors/actors.component';
import { SearchComponent } from './nav/search/search.component';
import { AccountDetailsComponent } from './login/account-details/account-details.component';
import { PopularMoviesComponent } from './home/popular-movies/popular-movies.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TruncatePipe } from './shared/truncate-pipe';
import { ScrollableDirective } from './scrollable.directive';
import { MovieFavoriteDirective } from './movie-favorite.directive';
import { FavoriteMoviesComponent } from './favorite-movies/favorite/favorite.component';
import { TrailerComponent } from './movie-detail/trailer/trailer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDescriptionComponent } from './movie-detail/movie-description/movie-description.component';
import { MovieCastComponent } from './movie-detail/movie-cast/movie-cast.component';
import { MovieImagesComponent } from './movie-detail/movie-images/movie-images.component';
import { MovieInfoComponent } from './movie-detail/movie-info/movie-info.component';
import { MovieReviewsComponent } from './movie-detail/movie-reviews/movie-reviews.component';
import { FavoriteListComponent } from './favorite-movies/favorite-list/favorite-list.component'



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
    UpcomingMovieDetailsComponent,
    MovieDetailComponent,
    ActorsComponent,
    SearchComponent,
    AccountDetailsComponent,
    PopularMoviesComponent,
    TruncatePipe,
    ScrollableDirective,
    MovieFavoriteDirective,
    FavoriteMoviesComponent,
    TrailerComponent,
    MovieDescriptionComponent,
    MovieCastComponent,
    MovieImagesComponent,
    MovieInfoComponent,
    MovieReviewsComponent,
    FavoriteListComponent
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
