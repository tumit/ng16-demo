import { DestroyRef, Directive, OnInit, inject } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';
import { untilDestroyed } from './until-destroyed';



@Directive({
  selector: '[appFoo]',
  standalone: true,
})
export class FooDirective implements OnInit {
  private untilDestroyed = untilDestroyed();

  ngOnInit() {
    interval(1000).pipe(this.untilDestroyed()).subscribe(console.log);
  }
}
