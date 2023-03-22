import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { FlixterApiService } from '../api.service';
import { Search } from '../dataForTesting/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
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
  queryData:any;
  constructor(private api:FlixterApiService, private render:Renderer2){}
  @HostListener('click', ['$event'])tabClickEvent(e:MouseEvent){
    const target = e.target as HTMLElement;
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
  getCelebrityDetails(id:string) {
    //this.api.getActorData(id)
  }
  getMovieDetails(id:string) {
    //this.api.getMovieDetailsById(id);
  }

  ngOnInit(): void {
    this.queryData = Search;
    // this.api.searchQueryEvent.subscribe(
    //   (x)=>{
    //     if(x){
    //       this.queryData = x;
    //     }
    //   }
    // )
  } 

}
