import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appColorPick]'
})
export class ColorPickDirective {

  constructor(private el: ElementRef) {}

  @HostListener('click') play() {
    const none = this.el.nativeElement.querySelectorAll('#coli');
    if (none.opacity === '') {
      none.opacity = '1';
    } else if (none.style.opacity = '1') {
      none.style.opacity = '';
    }
  }
}
