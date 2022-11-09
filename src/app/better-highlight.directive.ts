import { createHostListener } from '@angular/compiler/src/core';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
   // this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue', false, false);
  }
@HostListener('mouseenter') mouseover(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background', 'blue', false, false);
}
@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.renderer.setStyle(this.elRef.nativeElement, 'background', 'Transparent', false, false);
}
}

