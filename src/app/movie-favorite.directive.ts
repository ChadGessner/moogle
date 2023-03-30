import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FlixterApiService } from './api.service';
import { IFavoriteMovieDetails, IMovieCast } from './models/favorite-movie-details.interface';



@Directive({
  selector: '[appMovieFavorite]'
})
export class MovieFavoriteDirective {
  @Input() favoriteMovie: any;
  // @Input() emsVersionId: any;
  movieCastArray: IMovieCast[] = [];

  constructor(private api: FlixterApiService, private el: ElementRef) { }

  @HostListener('document:click', ['$event']) getFavorites(e: MouseEvent) {

    const target = this.el.nativeElement;
    const isTarget: boolean = target === e.target as HTMLElement;

    if (isTarget) {

      this.sendToFavorites();
    }


  }

  sendToFavorites() {
    console.log(this.favoriteMovie)
    console.log("test");
    // console.log(this.emsVersionId)

    function shapeCast(config: IMovieCast): { role: any; name: any; characterName: any; } {
      return {
        role: config.role,
        name: config.name,
        characterName: config.characterName
      };
    }
    for (let castObj of this.favoriteMovie.data.movie.cast) {

      let castOptions = { role: castObj.role, name: castObj.name, characterName: castObj.characterName };
      let newCast = shapeCast(castOptions);
      this.movieCastArray.push(newCast);
    }
    let newFavorite: IFavoriteMovieDetails = {
      emsId: this.favoriteMovie.data.movie.emsId,
      emsVersionId: "test",
      userId: this.api.user,
      name: this.favoriteMovie.data.movie.name,
      posterImageUrl: this.favoriteMovie.data.movie.posterImage.url,
      movieCast: this.movieCastArray,
      synopsis: this.favoriteMovie.data.movie.synopsis,
      directedBy: this.favoriteMovie.data.movie.directedBy,
      releaseDate: this.favoriteMovie.data.movie.releaseDate,
      totalGross: this.favoriteMovie.data.movie.totalGross,
      trailerUrl: this.favoriteMovie.data.movie.trailerUrl,
      images: this.favoriteMovie.data.movie.images


    }

    console.log(newFavorite)
  }



}

