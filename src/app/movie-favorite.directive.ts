import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FlixterApiService } from './api.service';
import { IFavoriteMovieDetails, IMovieCast, IMovieImage } from './models/favorite-movie-details.interface';



@Directive({
  selector: '[appMovieFavorite]'
})
export class MovieFavoriteDirective {
  @Input() favoriteMovie: any;
  // @Input() emsVersionId: any;
  movieCastArray: IMovieCast[] = [];
  movieImageArray: IMovieImage[] = [];

  constructor(private api: FlixterApiService, private el: ElementRef) { }

  @HostListener('document:click', ['$event']) getFavorites(e: MouseEvent) {

    const target = this.el.nativeElement;
    const isTarget: boolean = target === e.target as HTMLElement;

    if (isTarget) {

      // this.sendToFavorites();
      this.removeFromFavorites();
    }


  }

  sendToFavorites() {
    // console.log(this.favoriteMovie as IFavoriteMovieDetails )
    console.log("test");
    console.log(this.favoriteMovie.data.movie.trailer)
    console.log("test");
    // console.log(JSON.stringify(this.favoriteMovie))
    // console.log(JSON.stringify(this.favoriteMovie.data.movie.trailer.url))

    function shapeCast(castConfig: IMovieCast): { role: any; name: any; characterName: any; } {
      return {
        role: castConfig.role,
        name: castConfig.name,
        characterName: castConfig.characterName
      };
    }

    function shapeImage(imageConfig: IMovieImage): { url: any; height: any; width: any; } {
      return {
        url: imageConfig.url,
        height: imageConfig.height,
        width: imageConfig.width
      };
    }
    for (let castObj of this.favoriteMovie.data.movie.cast) {

      let castOptions = { role: castObj.role, name: castObj.name, characterName: castObj.characterName };
      let newCast = shapeCast(castOptions);
      this.movieCastArray.push(newCast);
    }
    for (let imageObj of this.favoriteMovie.data.movie.images) {

      let imageOptions = { url: imageObj.url, height: imageObj.height, width: imageObj.width };
      let newImage = shapeImage(imageOptions);
      this.movieImageArray.push(newImage);
    }
    let newFavorite: IFavoriteMovieDetails = {
      emsId: this.favoriteMovie.data.movie.emsId,
      name: this.favoriteMovie.data.movie.name,
      posterImageUrl: this.favoriteMovie.data.movie.posterImage.url,
      movieCast: this.movieCastArray,
      synopsis: this.favoriteMovie.data.movie.synopsis,
      directedBy: this.favoriteMovie.data.movie.directedBy,
      releaseDate: this.favoriteMovie.data.movie.releaseDate,
      totalGross: this.favoriteMovie.data.movie.totalGross,
      trailerUrl: this.favoriteMovie.data.movie.trailer.url,
      images: this.movieImageArray
    }

    console.log(newFavorite)
    // console.log(JSON.stringify(newFavorite))

    this.api.addFavoriteMovie(newFavorite, 1).subscribe((x) => {

      if(x){
        console.log(x);
      }


    })




  }

  removeFromFavorites() {
    // console.log(this.favoriteMovie as IFavoriteMovieDetails )
    console.log("test");
    console.log(this.favoriteMovie.data.movie.trailer)
    console.log("test");
    // console.log(JSON.stringify(this.favoriteMovie))
    // console.log(JSON.stringify(this.favoriteMovie.data.movie.trailer.url))

    function shapeCast(castConfig: IMovieCast): { role: any; name: any; characterName: any; } {
      return {
        role: castConfig.role,
        name: castConfig.name,
        characterName: castConfig.characterName
      };
    }

    function shapeImage(imageConfig: IMovieImage): { url: any; height: any; width: any; } {
      return {
        url: imageConfig.url,
        height: imageConfig.height,
        width: imageConfig.width
      };
    }
    for (let castObj of this.favoriteMovie.data.movie.cast) {

      let castOptions = { role: castObj.role, name: castObj.name, characterName: castObj.characterName };
      let newCast = shapeCast(castOptions);
      this.movieCastArray.push(newCast);
    }
    for (let imageObj of this.favoriteMovie.data.movie.images) {

      let imageOptions = { url: imageObj.url, height: imageObj.height, width: imageObj.width };
      let newImage = shapeImage(imageOptions);
      this.movieImageArray.push(newImage);
    }
    let newFavorite: IFavoriteMovieDetails = {
      emsId: this.favoriteMovie.data.movie.emsId,
      name: this.favoriteMovie.data.movie.name,
      posterImageUrl: this.favoriteMovie.data.movie.posterImage.url,
      movieCast: this.movieCastArray,
      synopsis: this.favoriteMovie.data.movie.synopsis,
      directedBy: this.favoriteMovie.data.movie.directedBy,
      releaseDate: this.favoriteMovie.data.movie.releaseDate,
      totalGross: this.favoriteMovie.data.movie.totalGross,
      trailerUrl: this.favoriteMovie.data.movie.trailer.url,
      images: this.movieImageArray
    }

    console.log(newFavorite)
    // console.log(JSON.stringify(newFavorite))

    this.api.RemoveFavoriteMovie(newFavorite, 1).subscribe((x) => {

      if(x){
        console.log(x);
      }


    })

  }



}

