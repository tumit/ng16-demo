import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]',
  standalone: true
})
export class HighlightDirective {

  @Input()
  color = 'yellow'

  constructor(private eleRef: ElementRef) {
  }

  @HostListener('mouseenter')
  addHighlight(): void {
    this.setHighlight(this.color);
  }

  @HostListener('mouseleave')
  removeHighlight(): void {
    this.setHighlight('')
  }

  private setHighlight(color: string) {
    this.eleRef.nativeElement.style.backgroundColor = color;
  }

}
