import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isHamburger:boolean = false;
  constructor(){}
  toggleHamburger(event:MouseEvent){
    this.isHamburger = !this.isHamburger;
    console.log(this.isHamburger);
    
  }
}
