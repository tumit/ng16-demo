import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-routing-fn-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routing-fn-demo.component.html',
  styleUrls: ['./routing-fn-demo.component.scss']
})
export default class RoutingFnDemoComponent {
  @Input('options') options?: string[];
}
