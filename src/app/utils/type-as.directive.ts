import { Directive, Input } from '@angular/core';

// refs
// - https://itnext.io/directive-type-checking-3d3c5f1137b3
// - https://www.npmjs.com/package/ng-as

interface TypeAsContext<T> {
  $implicit: T;
}

@Directive({
  selector: '[typeAs]',
  standalone: true
})
export class TypeAsDirective<T> {
  @Input() typeAs!: T | T[];

  static ngTemplateContextGuard<T>(
    _: TypeAsDirective<T>,
    ctx: any
  ): ctx is TypeAsContext<T> {
    return true;
  }
}
