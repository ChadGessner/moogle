import { ChangeDetectorRef, Component, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FlixterApiService } from 'src/app/api.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {

  currentEmsVersionIdRxjs: any;
  currentUserIdRxjs: any | null;
  registeredUser: any;
  favoriteMovies: any = [];

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
    private router: Router,
    private cdRef: ChangeDetectorRef) {
      
    }

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
        this.cdRef.detectChanges();
      });
  }

  getFavorites(userId: any) {
    this.api.getFavoriteMovieList(userId).subscribe(
      (response) => {
        this.favoriteMovies = response;
        this.cdRef.detectChanges();
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
          this.cdRef.detectChanges();
        }
      )
  }
  openTrailer(trailerUrl: any) {
    window.open(trailerUrl)
  }

  getNextSixFavoriteMovies(startIndex: number, endIndex: number): void {
    this.startFavoriteMovieIndex = endIndex++
    this.endFavoriteMovieIndex = endIndex + 5
    this.startOfFavoriteMovies = false
    if (this.endFavoriteMovieIndex >= this.favoriteMovies.length) 
    {
      this.startFavoriteMovieIndex = endIndex - this.favoriteMovies.length
      this.endFavoriteMovieIndex = this.favoriteMovies.length
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





