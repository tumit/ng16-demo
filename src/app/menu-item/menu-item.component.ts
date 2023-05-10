import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from '../utils/highlight.directive';
import { BorderDirective } from '../utils/border.directive';

export interface MenuIem {
  link: string;
  label: string;
}

@Component({
  selector: 'menu-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  hostDirectives: [HighlightDirective, BorderDirective]
})
export class MenuItemComponent {
  @Input()
  menuItem!: MenuIem;
}
