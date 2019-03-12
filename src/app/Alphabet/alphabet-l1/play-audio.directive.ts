import { Directive, ElementRef, HostListener } from '@angular/core';
import {ViewChild} from '@angular/core';

@Directive({
  selector: '[appPlayAudio]'
})
export class PlayAudioDirective {

  constructor(private el: ElementRef) { }
  @HostListener('click') over() {

    this.el.nativeElement.play();
    this.el.nativeElement.load();
    if (this.el.nativeElement.paused) {
      this.el.nativeElement.play();
    } else {
      this.el.nativeElement.load();
    }
  }
}
