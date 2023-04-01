import { Component, HostListener, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
import { IFavoriteMovieDetails, IMovieCast, IMovieImage } from '../models/favorite-movie-details.interface';

@Component({
  selector: 'app-favorite-movies',
  templateUrl: './favorite-movies.component.html',
  styleUrls: ['./favorite-movies.component.css']
})
export class FavoriteMoviesComponent implements OnInit {
@Input() favoriteMovieDetails: any;

  currentEmsVersionIdRxjs: any;
  currentUserIdRxjs: any;
  isFavorited: boolean = false;
  newTrailerUrl: any;
  movieImageArray: IMovieImage[] = [];
  movieCastArray: IMovieCast[] = [];

constructor(
  private api:FlixterApiService,
   private phone:ComponentTelephoneService,
    private render:Renderer2,
     private route:ActivatedRoute){}

     setEmsVersionIdRxjs(emsVersionIdRxjs: any) {
      this.api.setEmsVersionIdRxjs(emsVersionIdRxjs);
    };
    setEmsIdRxjs(emsIdRxjs: any) {
      this.api.setEmsIdRxjs(emsIdRxjs);
    };
  
    setUserIdRxjs(userIdRxjs: any) {
      this.api.setUserIdRxjs(userIdRxjs);
    }

     ngOnInit(): void {
      this.api.currentEmsVersionIdRxjs.subscribe((value) => {
        this.currentEmsVersionIdRxjs = value;
      });
  
      this.api.currentUserIdRxjs.subscribe((value) => {
        this.currentUserIdRxjs = value;
      });
  
      this.api.currentEmsIdRxjs.subscribe((value) => {
        this.currentUserIdRxjs = value;
        
      });
      this.api.checkIfFavorited(this.api.user.id, this.currentEmsVersionIdRxjs)
      .subscribe(
        (x)=>{
          if(x == true){
            this.isFavorited = true;
            console.log(this.isFavorited)
          }
          else{
            this.isFavorited = false
            console.log(this.isFavorited)
          }
        }
      )
    }
    checkIfFavorited(favoriteMovieEmsId:string){
      this.api.checkIfFavorited(this.api.user.id, favoriteMovieEmsId)
      .subscribe(
        (x)=>{
          if(x == true){
            this.isFavorited = true;
            console.log(this.isFavorited)
          }
          else{
            this.isFavorited = false
            console.log(this.isFavorited)
          }
        }
      )
    }
    removeFavorite(emsId: string){
      this.api.removeFavoriteMovie(this.api.user.id, emsId).subscribe(
        (x)=>{
          if(x == true){
            this.isFavorited = true;
          }
          else{
            this.isFavorited = false
          }
        }
      )
    }
    addFavorite() {
      if(this.favoriteMovieDetails.data.movie.trailer == null)
      {
        this.newTrailerUrl = null; 
      }
      else
      {
        this.newTrailerUrl = this.favoriteMovieDetails.data.movie.trailer.url
      }
  
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
      for (let castObj of this.favoriteMovieDetails.data.movie.cast) {
  
        let castOptions = { role: castObj.role, name: castObj.name, characterName: castObj.characterName };
        let newCast = shapeCast(castOptions);
        this.movieCastArray.push(newCast);
      }
      for (let imageObj of this.favoriteMovieDetails.data.movie.images) {
  
        let imageOptions = { url: imageObj.url, height: imageObj.height, width: imageObj.width };
        let newImage = shapeImage(imageOptions);
        this.movieImageArray.push(newImage);
      }
      let newFavorite: IFavoriteMovieDetails = {
        emsId: this.favoriteMovieDetails.data.movie.emsId,
        emsVersionId: this.currentEmsVersionIdRxjs,
        name: this.favoriteMovieDetails.data.movie.name,
        posterImageUrl: this.favoriteMovieDetails.data.movie.posterImage.url,
        movieCast: this.movieCastArray,
        synopsis: this.favoriteMovieDetails.data.movie.synopsis,
        directedBy: this.favoriteMovieDetails.data.movie.directedBy,
        releaseDate: this.favoriteMovieDetails.data.movie.releaseDate,
        totalGross: this.favoriteMovieDetails.data.movie.totalGross,
        trailerUrl: this.newTrailerUrl,
        images: this.movieImageArray
      }
      this.api.addFavoriteMovie(newFavorite, this.api.user.id).subscribe((x) => {
        if(x){
        }
      })
    }
  }
