import { Component, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { ComponentTelephoneService } from '../component-telephone.service';
//import { TheaterDetailsComponent } from '../theater-details/theater-details.component';
import { ActivatedRoute, Params } from '@angular/router';
import { MovieDetail } from '../dataForTesting/movieDetail';
import { IFavoriteMovieDetails } from '../models/favorite-movie-details.interface';
// import { MovieFavoriteDirective } from '../movie-favorite.directive';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()movieDetail:any;
  // @Input()movieDetail1:any;

  @Input()emsVersionId:string = ''
  imagesList:any[]|null = null;
  currentImageIndex:number = 0;
  currentUserIdRxjs: any;
  currentEmsVersionIdRxjs: any;
  currentEmsIdRxjs: any;
  castIndex:number = 0;
  emsVersionId1:any;
  favorites: any;
  isFavorited: any = false;
  favoriteMovie: IFavoriteMovieDetails | undefined;
  notIsActive:{
    id:string,
    isActive:boolean}[] = [{

    id:'card-tab-one',
    isActive:true
  },{
    id:'card-tab-two',
    isActive:false
  },{
    id:'card-tab-three',
    isActive:false
  },{
    id:'card-tab-four',
    isActive:false
  },{
    id:'card-tab-five',
    isActive:false
  }]
  emsVersionId2: string = "";
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

  removeFavorite(userId: number, emsId: string){
    // this.isFavorited = true;
    console.log("remove Favorite");
    console.log(userId)
    console.log(emsId)
    this.api.removeFavoriteMovie(userId, emsId).subscribe(
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
  // addFavorite(favoriteMovie: IFavoriteMovieDetails, userId: number){
  //   // this.isFavorited = true;
  //   console.log("remove Favorite");
  //   console.log(userId)
  //   console.log(emsId)
  //   this.favDirective.sendToFavorites(userId, emsId).subscribe(
  //     (x)=>{
  //       if(x == true){
  //         this.isFavorited = true;
  //       }
  //       else{
  //         this.isFavorited = false
  //       }
  //     }
  //   )
  // }

  checkIfFavorited(userId:number, favoriteMovieEmsId:string){
    console.log(userId);
    console.log(favoriteMovieEmsId);
    console.log("checkIfFavoritedFunction");
    this.api.checkIfFavorited(userId, favoriteMovieEmsId).subscribe(
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

  castIncrementEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    const len = this.movieDetail.data.movie.cast.length;
    console.log(target.id)
    if(target && target.id === 'cast-prev'){
      this.castIndex--;
    }
    if(target && target.id === 'cast-next'){
      this.castIndex++;
    }
    if(this.castIndex >= len){
      this.castIndex = 0;
    }
    if(this.castIndex < 0){
      this.castIndex = this.castIndex + len;
    }
    console.log(this.castIndex)
    const progress = document.getElementById('progress-bar');
  }
  progressBarStyle() {
    const len = this.movieDetail.data.movie.cast.length;
    return {
      'width' :
      `${ ((this.castIndex + 1)/len) * 100 }%`
    }
  }
  @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
    console.log(target)
    if(target && this.notIsActive.filter(x=>x.id === target.id).length > 0){
      
      this.notIsActive.forEach(
        (x)=>{
          if(x){
            x.isActive = x.id === target.id;
            this.render.removeClass(
              document.getElementById(x.id),
              'bg-primary'
            )
            this.render.removeClass(
              document.getElementById(x.id),
              'bg-secondary'
            )
             this.render.addClass(
              document.getElementById(x.id),
              `${x.isActive ? 'bg-secondary' : 'bg-primary'}`
            )
        }
      }
      )
    }
  }

  categoryName() {
    return document.getElementById(this.notIsActive.filter(x=>x.isActive)[0].id)?.innerText;
  }
  carouselPlus() {

    this.currentImageIndex++;
    return this.validateImageIndex(this.currentImageIndex)
  }
  subImageIndex(){
    return this.validateImageIndex(this.currentImageIndex-1);
  }
  addImageIndex() {
    return this.validateImageIndex(this.currentImageIndex+1);
  }
  validateImageIndex(index:number) {
    let images = this.imagesList as any[];
    if(index < 0) {
      index = images.length - 1;
    }
    if(index === images.length){
      index = 0;
    }
    return index;
  }
  carouselMinus() {

    this.currentImageIndex--;
    return this.validateImageIndex(this.currentImageIndex)
  }
  ngOnInit(): void {
    this.api.currentEmsVersionIdRxjs.subscribe((value) => {
      this.currentEmsVersionIdRxjs = value;
    });

    this.api.currentUserIdRxjs.subscribe((value) => {
      this.currentUserIdRxjs = value;
    });

    this.api.currentEmsIdRxjs.subscribe((value) => {
      this.currentEmsIdRxjs = value;
    });
    
    this.route.params.subscribe(
      (p:Params)=>{
        console.log(p['emsVersionId'] as string)
        this.setEmsVersionIdRxjs(p['emsVersionId'] as string)
        console.log(this.currentEmsVersionIdRxjs)
        console.log("test")
        console.log(this.currentUserIdRxjs)
        console.log("test1")

        // this.setEmsVersionIdRxjs(p['emsVersionId']);
        console.log("test2")
        console.log(this.currentUserIdRxjs)
        console.log("test3")


        this.api.getMovieDetailsById(p['emsVersionId']).subscribe(
          (x:{})=>{
            console.log(x)
            this.movieDetail = x
            // this.emsVersionId1 = (p['emsVersionId'] as string)
            // console.log(this.emsVersionId1)
            // this.emsVersionId2 = (p['emsId'] as string)
            // console.log(this.emsVersionId2)
            this.imagesList = this.movieDetail.data.movie.images;
          }
        )
      }

    )
    console.log(this.currentUserIdRxjs)
    // console.log(this.movieDetail.data.movie.emsId)
    // console.log(this.emsVersionId2)
    // console.log("testasdf")
    // console.log(this.currentEmsVersionIdRxjs)
    // console.log("test")




    // console.log("onInit");
    // // console.log(this.emsVersionId1)
    // console.log(this.currentUserIdRxjs)
    // console.log(this.currentEmsVersionIdRxjs)

    this.checkIfFavorited(this.currentUserIdRxjs, this.currentEmsVersionIdRxjs);
    console.log(this.currentUserIdRxjs)
    // console.log(this.movieDetail)
  }
}
