import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, Renderer2, HostListener } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { TheaterData } from '../models/theater-data.interface';
import {ChadsTheaters} from '../dataForTesting/chadsTheaters'
import { ComponentTelephoneService } from '../component-telephone.service';
import { TheaterDetails } from '../models/theater-details.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
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
  currentTheaterName:string = '';
  selectedTheater:any;
  isToggleTheaters:boolean = false;
  showTimes:any
  isShowTimes:boolean = false;
  constructor(
    private api:FlixterApiService,
     private router:Router,
      private route:ActivatedRoute, 
       private render:Renderer2 ){}
      @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
        const target = e.target as HTMLElement;
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
  clickTheaterLink(index:number, theaterName:string) {
    this.selectedTheater = this.theaters[index];
    console.log(this.route.paramMap );
    
    this.router.navigate([this.selectedTheater.id],{
        relativeTo: this.route
        
      })
    console.log(this.selectedTheater);
    this.currentTheaterName = theaterName;
    this.toggleTheaters()
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (p:Params)=>{
        this.api.getTheaters(p['zip']).subscribe(
          (x)=>{
            this.theaters = x
          }
        )
      }
    )
  }
}
