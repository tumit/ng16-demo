import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightAndBorderDirective } from '../utils/highlight-and-border.directive';
import { HighlightDirective } from '../utils/highlight.directive';

@Component({
  selector: 'app-directives-composition-demo',
  standalone: true,
  imports: [CommonModule, HighlightAndBorderDirective],
  templateUrl: './directives-composition-demo.component.html',
  styleUrls: ['./directives-composition-demo.component.scss']
})
export class DirectivesCompositionDemoComponent {

}
