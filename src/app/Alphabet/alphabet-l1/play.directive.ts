import { Directive, ElementRef, HostListener } from '@angular/core';
import {ViewChild} from '@angular/core';

@Directive({
  selector: '[appPlay]'
})
export class PlayDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.play();
  }

  @HostListener('mouseover') over() {
    this.el.nativeElement.play();

  }
  @HostListener('mouseout') out() {
    this.el.nativeElement.load();
  }

  @HostListener('click') play() {
    if (this.el.nativeElement.paused) {
      this.el.nativeElement.play();
    } else {
      this.el.nativeElement.load();
    }
  }
}
