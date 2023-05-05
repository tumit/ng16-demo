import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent {
  @Input() data?: unknown[];
  @ContentChild('headerTmpl') headerTmpl?: TemplateRef<unknown>;
  @ContentChild('rowTmpl') rowTmpl?: TemplateRef<unknown>;
}
