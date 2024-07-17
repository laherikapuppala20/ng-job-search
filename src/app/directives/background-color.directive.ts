import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]',
  standalone: true
})
export class BackgroundColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'grey'; // Change color as needed
    this.el.nativeElement.style.color = 'white'; // Change color as needed
  }

  @HostListener('focusout') onFocusOut() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '');
    this.renderer.setStyle(this.el.nativeElement, 'color', '');
  }

}
