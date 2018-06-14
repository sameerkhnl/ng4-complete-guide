import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {

  constructor(private el : ElementRef){

  }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = '#ccffff';
  }

}
