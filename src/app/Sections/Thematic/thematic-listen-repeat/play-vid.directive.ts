import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPlayVid]'
})
export class PlayVidDirective {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.play();
  }

  @HostListener('click') play() {
    if (this.el.nativeElement.paused) {
      this.el.nativeElement.play();
    } else {
      this.el.nativeElement.pause();
    }
  }
}
