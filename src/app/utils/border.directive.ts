import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[border]',
  standalone: true
})
export class BorderDirective {
  @Input()
  color = 'red'

  constructor(private eleRef: ElementRef) { }

  @HostListener('mouseenter')
  addHighlight(): void {
    this.setHighlight(this.color);
  }

  @HostListener('mouseleave')
  removeHighlight(): void {
    this.setHighlight('')
  }

  private setHighlight(color: string) {
    this.eleRef.nativeElement.style.border = `2px solid ${color || 'transparent'}`;
  }
}
