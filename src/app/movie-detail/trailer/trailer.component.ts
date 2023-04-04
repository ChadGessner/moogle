import { Component, Input, Renderer2 } from '@angular/core';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls'
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import {
  animate,
   state,
    style,
     transition,
      trigger
} from '@angular/animations';
@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css'],
  animations: [
     trigger('trailerState', [
      state('smol', style({
        'width' : '30%',
        'height' : 'auto'
      })),
      state('med', style({
        'width' : '60%',
        'height' : 'auto',
        
      })),
      state('large', style({
        'width' : '90%',
        'height' : 'auto'
      })),
      transition('smol <=> *', animate(500)),
      transition('med <=> *', animate(500)),
      transition('large <=> *', animate(800))
     ])
    ]
    // trigger('trailerState', [
    //   state('show', style({
    //     'z-index' : '2',
    //     'width' : '100%',
    //     'height' : '100%',

    //   })),
    //   state('hidden', style({
        
    //     'width' : '0',
    //     'height' : '0',
    //     'padding' : '0',
    //     'border' : 'none',
    //   })),
    //   transition('show => hidden', animate(500)),
    //   transition('hidden => show', animate(500)),
    // ])
    
      
    //   trigger('trailerState',[
    //     state('show', style({
          
    //       'width' : '100%',
    //       'height' : '100%',
    //     })),
    //     state('hidden', style({
    //       'width' : '0',
    //       'height' : '0',
    //       'padding' : '0',
    //       'border' : 'none',
    //     })),
    //     transition('show <=> hidden',[
    //       animate(5000)
    //     ]),
        
    //   ]),
    
    // trigger('componentState',[
    //   state('show', style({
    //     'transform' : `translateX(0)`
    //   })),
    //   state('hidden', style({
    //     'overflow' : 'hidden',
    //     'transform' : 'translateX(9000px)'
    //   })),
    //   transition('show <=> hidden', [
    //     animate(1000),
        
    //   ]),
    // ])
  //]
})
export class TrailerComponent {
  trailerState = 'smol';
  trailerStates = [
    'smol',
    'med',
    'lg'
  ]
  trailerStateIndex:number = 0;
  @Input()isShow:boolean = false;
  @Input()trailerUrl:string = '';
  @Input()isActive:boolean = false;
  testNumber:number = 7;
  constructor(private render:Renderer2){}

  clicky() {
    this.trailerStateIndex++;
    this.trailerStateIndex = this.trailerStateIndex === this.trailerStates.length ? this.trailerStateIndex = 0 : this.trailerStateIndex;
    this.trailerState = this.trailerStates[this.trailerStateIndex];
  }

  canIsShow() {
    this.isShow = !this.isShow
    this.trailerState = this.isShow ? 'show' : 'hidden';
    console.log(this.trailerState);
    console.log(this.trailerUrl)
    for(let el of [...Array(document.getElementsByClassName('trailer-class'))]){
      this.render.removeClass(
          `${el}`,
          'border'
        )
    }
    
  }
}
