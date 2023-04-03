import { Component, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlixterApiService } from 'src/app/api.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  currentEmsVersionIdRxjs: any;
  currentUserIdRxjs: any | null;
  favoriteMovies: any;
  registeredUser: any;

  FavoriteMovies: any;
  startFavoriteMovieIndex: number = 0;
  endFavoriteMovieIndex: number = 5;
  startOfFavoriteMovies: boolean = true;
  endOfFavoriteMovies: boolean = false;
  user: any;
  isLoggedIn: boolean = false;


  constructor(
    private api: FlixterApiService,
    private render: Renderer2,
    private route: ActivatedRoute,
    private router: Router) { }

  setEmsVersionIdRxjs(emsVersionIdRxjs: any) {
    this.api.setEmsVersionIdRxjs(emsVersionIdRxjs);
  };

  setEmsIdRxjs(emsIdRxjs: any) {
    this.api.setEmsIdRxjs(emsIdRxjs);
  };

  setUserIdRxjs(userIdRxjs: any) {
    this.api.setUserIdRxjs(userIdRxjs);
  }

  getUser() {
    return this.api.getLoggedInUser()
  }

  ngOnInit(): void {
    this.api.currentUserIdRxjs.subscribe((value) => {
      this.currentUserIdRxjs = value;
    });
    this.user = this.api.user;
    if (typeof this.currentUserIdRxjs === 'number') {
      this.isLoggedIn = true;
    }
    // this.getFavorites(this.currentUserIdRxjs)
    this.api.getFavoriteMovieList(this.currentUserIdRxjs).subscribe(
      (response) => {
        this.favoriteMovies = response;
      });
  }

  getFavorites(userId: any) {
    this.api.getFavoriteMovieList(userId).subscribe(
      (response) => {
        this.favoriteMovies = response;
      });
  }

  passEmsVersionId(id: string) {
    this.router.navigate([
      '/movie-detail', id

    ])
  }

  removeFavorite(emsId: string) {
    this.api.removeFavoriteMovie(this.api.user.id, emsId)
      .subscribe(
        (response) => {
          this.favoriteMovies = response;
        }
      )
  }
  openTrailer(trailerUrl: any) {
    window.open(trailerUrl)
  }

  getNextSixFavoriteMovies(startIndex: number, endIndex: number): void {
    this.startFavoriteMovieIndex = endIndex++
    this.endFavoriteMovieIndex = endIndex + 4
    this.startOfFavoriteMovies = false
    if (this.endFavoriteMovieIndex >= this.FavoriteMovies.length) {
      this.startFavoriteMovieIndex = this.FavoriteMovies.length - 5
      this.endFavoriteMovieIndex = this.FavoriteMovies.length
      this.endOfFavoriteMovies = true;
    }
  }
  getLastSixFavoriteMovies(startIndex: number, endIndex: number): void {
    if (startIndex <= 5) {

      this.startFavoriteMovieIndex = startIndex = 0
      this.endFavoriteMovieIndex = 5;
      this.startOfFavoriteMovies = true

    }
    else {
      this.startFavoriteMovieIndex = startIndex - 5
      this.endFavoriteMovieIndex = endIndex - 5
    }

  }
  getFirstSixFavoriteMovies(): void {
    this.startFavoriteMovieIndex = 0
    this.endFavoriteMovieIndex = 5
    this.startOfFavoriteMovies = true;
    this.endOfFavoriteMovies = false;
  }
}





