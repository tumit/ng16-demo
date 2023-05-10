import { Directive, Input } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { BorderDirective } from './border.directive';

@Directive({
  selector: '[highlightAndBorder]',
  standalone: true,
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['color: highlightColor']
    },
    BorderDirective,
  ],
})
export class HighlightAndBorderDirective {
}
