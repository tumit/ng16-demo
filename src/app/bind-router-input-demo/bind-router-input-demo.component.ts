import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind-router-input-demo',
  templateUrl: './bind-router-input-demo.component.html',
  styleUrls: ['./bind-router-input-demo.component.scss']
})
export class BindRouterInputDemoComponent {

  @Input('id') pathId?:number;
  @Input('keyword') keyword?: string;
  @Input('title') title?: string;
  @Input('options') options?: string[];
}
