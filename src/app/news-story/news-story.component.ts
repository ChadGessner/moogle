import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls'
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { ComponentTelephoneService } from '../component-telephone.service';
@Component({
  selector: 'app-news-story',
  templateUrl: './news-story.component.html',
  styleUrls: ['./news-story.component.css']
})
export class NewsStoryComponent implements OnInit {
  @Input()newsLink:any;
  constructor(private sanitized:DomSanitizer, private phone:ComponentTelephoneService){}
  getURL(x:string) {
    this.newsLink = this.sanitized.bypassSecurityTrustUrl(x);
  }
  ngOnInit(): void {
    this.phone.newsURLEvent.subscribe(
      (x)=>{
        if(x){
          console.log(x)
          this.getURL(x);
          console.log(this.newsLink.changingThisBreaksApplicationSecurity)
        }
      }
    )
  }
}
