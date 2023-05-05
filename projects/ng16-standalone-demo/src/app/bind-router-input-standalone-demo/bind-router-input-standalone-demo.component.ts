import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bind-router-input-standalone-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bind-router-input-standalone-demo.component.html',
  styleUrls: ['./bind-router-input-standalone-demo.component.scss']
})
export class BindRouterInputStandaloneDemoComponent {
  @Input('id') pathId?:number;
  @Input('keyword') keyword?: string;
  @Input('title') title?: string;
  @Input('options') options?: string[];
}
