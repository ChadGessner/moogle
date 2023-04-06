import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[appScrollable]",
  exportAs: "appScrollable"
})
export class ScrollableDirective {
  constructor(private elementRef: ElementRef) {}

  @Input()
    scrollUnit!: number;

  private get element() {
    return this.elementRef.nativeElement;
  }

  get isOverflow() {
    return this.element.scrollWidth > this.element.clientWidth;
  }

  scroll(direction: number) {
    // if(window.screenX > 3000){
    //   this.element.scrollLeft += (this.scrollUnit - 900) * direction
    // }else if(window.screenX > 2700){
    //   this.element.scrollLeft += (this.scrollUnit - 500) * direction
    // }else{
      this.element.scrollLeft += this.scrollUnit * direction
    //}
    console.log(window.screenX);
    
    //this.element.scrollLeft += this.scrollUnit * direction;
  }

  get canScrollStart() {
    return this.element.scrollLeft > 0;
  }

  get canScrollEnd() {
    return this.element.scrollLeft + this.element.clientWidth != this.element.scrollWidth;
  }

  @HostListener("window:resize")
  onWindowResize() {
    //this.scrollUnit = Math.abs(this.scrollUnit - window.screenX)
    // console.log(window.screenX);
    
    // console.log(this.scrollUnit)
  } // required for update view when windows resized
}
