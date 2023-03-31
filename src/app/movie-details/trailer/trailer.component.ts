import { Component, Input, Renderer2 } from '@angular/core';
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
    //!!!!! trigger('componentState', [
    //   state('show', style({
    //     'transform' : 'translateX(0)'
    //   })),
    //   state('hidden', style({
        
    //     'transform' : 'translateX(9000px)'
    //   })),
    // ], !!!!!!
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
    
      
      trigger('trailerState',[
        state('show', style({
          'z-index' : '2',
          'width' : '100%',
          'height' : '100%',
        })),
        state('hidden', style({
          'width' : '0',
          'height' : '0',
          'padding' : '0',
          'border' : 'none',
        })),
        transition('show <=> hidden',[
          animate(5000)
        ]),
        
      ]),
    
    trigger('componentState',[
      state('show', style({
        'transform' : 'translateX(0)'
      })),
      state('hidden', style({
        'transform' : 'translateX(9000px)'
      })),
      transition('show <=> hidden', [
        animate(1000),
        
      ]),
    ])
  ]
})
export class TrailerComponent {
  trailerState = 'hidden';
  @Input()isShow:boolean = false;
  @Input()trailerUrl:string = '';
  @Input()isActive:boolean = false;
  constructor(private render:Renderer2){}
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
