import {
   Component,
    EventEmitter,
     Input,
      OnInit,
       Output } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { TheaterDetails } from '../models/theater-details.interface';
import {TheaterDetailTest} from '../dataForTesting/theaterDetail';
import { ComponentTelephoneService } from '../component-telephone.service';
import { TheaterData } from '../models/theater-data.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-theater-details',
  templateUrl: './theater-details.component.html',
  styleUrls: ['./theater-details.component.css']
})
export class TheaterDetailsComponent implements OnInit {
  theaterId:string = '';
  theaterDetails:any;
  isShowTimes:boolean = false;
  currentTitlesList:any;
  currentTitle:any;
  currentTitleIndex:number = 0;
  maxMovieListLength:number = -1;
  @Input()currentTheaterName:string = '';
  @Output()showTimesEvent:EventEmitter<any> = new EventEmitter<any>();
  isDate:boolean = false;
  @Input()currentlySelectedTheater:any;
  
  constructor(
    private api:FlixterApiService,
     private route:ActivatedRoute,
      private router:Router){}
  toggleShowTimes(){
    this.isShowTimes = !this.isShowTimes
  }

  movieDetails(emsVersionId:string){
    this.router.navigate([
      'movie-detail',
      emsVersionId
    ])
  }
   setRatingImagePath(rating:string) {
    switch(rating){
      case 'G':
        return 'assets/images/G.png';
      case 'PG':
        return 'assets/images/PG.png';
      case 'PG-13':
        return 'assets/images/PG-13.png';
      case 'NC-17':
        return 'assets/images/NC-17.png';
      case 'R':
        return 'assets/images/R.png';
      default: 
      return 'assets/images/G.png';
    }
   }
   showShowTimes() {
    
    return this.showTimesEvent
    .emit(this.currentTitle.movieVariants[0].amenityGroups[0].showtimes);
   }
   toggleDates(){
    console.log(this.isDate)
    this.isDate = !this.isDate
   }
  nextTitle() {
    
    this.currentTitleIndex++;
    if(this.currentTitleIndex === this.maxMovieListLength){
      this.currentTitleIndex = 0;
      this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
      this.showShowTimes();
      return;
    }
    this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
    this.showShowTimes();
  }
  previousTitle() {
    
    this.currentTitleIndex--;
    if(this.currentTitleIndex === -1){
      this.currentTitleIndex = this.maxMovieListLength-1;
      this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
      this.showShowTimes();
      return;
    }
    this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
    this.showShowTimes();
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (p)=>{
        if(p['theaterId']){
          return this.api.getTheaterDetails(p['theaterId']).subscribe(
            (x)=>{
              console.log(x);
              this.currentlySelectedTheater = x;
              if(x){
                this.currentTitlesList = x.data.theaterShowtimeGroupings.movies;
                this.maxMovieListLength = this.currentTitlesList.length;
                this.currentTitle = this.currentTitlesList[this.currentTitleIndex];
                return this.showShowTimes()
              }
            }
          )
          
        }
        return;
      }
    )
    
    
    
    //this.showShowTimes();
    // this.phone.theaterNameEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.theaterList = this.phone.theaterList as TheaterData;
    //       console.log(this.theaterList.theaters[0].name)
    //     }
    //   }
    // )
     
    
    // console.log(Jesus);
    // this.phone.theaterIdEvent.subscribe(
    //   (y)=>{
    //     if(y){
    //       this.theaterId = y;
          
    //     }
    //   }
    // )
    // this.api.theatersDetailsEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.theaterDetails = x as TheaterDetails;
    //       //console.log(JSON.stringify(this.theaterDetails));
    //     }
    //   }
    // )
    
  }
}
