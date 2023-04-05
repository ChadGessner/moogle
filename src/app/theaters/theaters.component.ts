import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, Renderer2, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { TheaterData } from '../models/theater-data.interface';
import {ChadsTheaters} from '../dataForTesting/chadsTheaters'
import { TheaterDetails } from '../models/theater-details.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit, AfterViewInit {
  
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
  }]
  @Input()theaters:any;
  
  @Input()userZips:string[] = [];
  isToggleZips:boolean = false;
  @Input()selectedTheater:any;
  theaterName:string = 'Theater Details'
  isToggleTheaters:boolean = false;
  showTimes:any
  isShowTimes:boolean = false;
  movieDetails:any;
  constructor(
    private api:FlixterApiService,
     private router:Router,
      private route:ActivatedRoute, 
       private render:Renderer2,
         ){}
      getUserZips(){
        return this.api.passUserZips();
      }
      toggleZips() {
        this.isToggleZips = !this.isToggleZips;
        this.userZips = this.getUserZips();
        
      }
      // getTheaterNameGodDamnit(e:MouseEvent){
      //   const target = e.target as HTMLElement;
      //   return this.theaterName = target.innerText;
      // }
      getMovieDetails(e:any){
        this.movieDetails = e;
      }
      @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
        const target = e.target as HTMLElement;
        // if(target && target.classList.contains('theater-list-item') ){
        //   let hTwo = document.getElementById('heading');
        //   if(hTwo){
            
        //     //this.getTheaterNameGodDamnit(e)
        //   }  
          
        // }
        if(target && target.classList.contains('user-zip-item')){
          this.api.user.zipCode = target.innerText;
          this.router.navigate(
            ['theaters', target.innerText]
          )
        }
        if(target && this.notIsActive.filter(x=>x.id === target.id).length > 0){
          console.log('anything')
          this.notIsActive.forEach(
            (x)=>{
              if(x){
                let el = document.getElementById(x.id) as HTMLElement
                x.isActive = x.id === target.id;
                if(el){
                  if(el?.classList.contains('bg-primary') || el?.classList.contains('bg-secondary')){
                    this.render.removeClass(
                      el,
                      'bg-primary'
                    )
                    this.render.removeClass(
                      el,
                      'bg-secondary'
                    )
                  }
                    this.render.addClass(
                      document.getElementById(x.id),
                      `${x.isActive ? 'bg-secondary' : 'bg-primary'}`
                    )
                }
            }
          }
          )
        }
      }


  getShowTimes(e:{
    time:string,
    date:string
  }[]) {
    this.showTimes = e;
  }
  toggleShowTimes() {
    this.isShowTimes = !this.isShowTimes;
  }
  toggleTheaters() {
    this.isToggleTheaters = !this.isToggleTheaters;
  }
  navigateMovieDetails() {
    this.router.navigate([
      'movie-detail',
      this.movieDetails.emsVersionId
    ])
  }
  clickTheaterLink(index:number) {
    this.toggleTheaters();
    this.selectedTheater = this.theaters[index];
    this.theaterName = this.selectedTheater.name;

    this.router.navigate([
      'theaters',
      this.api.user.zipCode,
       this.selectedTheater.id,
        this.theaterName
      ],{

      })


    
    
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (p:Params)=>{
        this.api.getTheaters(p['zip']).subscribe(
          (x)=>{
            this.theaters = x
          }
        )
        if(p["theaterName"]){
          this.theaterName = p["theaterName"]
        }
       }
    )
  }
  ngAfterViewInit(): void {
    
  }
}
