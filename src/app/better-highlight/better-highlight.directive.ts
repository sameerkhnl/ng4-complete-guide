import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() mouseEnterColor: string;
  @Input() defaultColor: string;
  @HostBinding('style.backgroundColor') background: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }


  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') onMouseEnter(data: Event){
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ccffff');
    this.background = this.mouseEnterColor;
  }

  @HostListener('mouseleave') onMouseLeave(data: Event){
    //this.renderer.setStyle(this.el.nativeElement, 'background-color', null);
    this.background = this.defaultColor;
  }
}
