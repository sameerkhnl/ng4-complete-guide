import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  // @HostBinding('class.show') show = false;

  constructor(private el: ElementRef, private renderer: Renderer2){

  }

  @HostListener("click") toggleOpen() {
    this.el.nativeElement.nextElementSibling.classList.toggle('show');
  }
}
