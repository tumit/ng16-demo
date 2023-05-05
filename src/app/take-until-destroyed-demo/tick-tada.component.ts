import { Component, DestroyRef } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { interval } from "rxjs";

function tickTada(destroyRef: DestroyRef) {
  interval(5000).pipe(takeUntilDestroyed(destroyRef)).subscribe(() => console.log('tadi 🎉'))
}

@Component({
  selector: 'tick-tada',
  template: '<p>tick-tada see console...</p>'
})
export class TickTadaComponent  {

  constructor(destroyRef: DestroyRef) {
    // keep tickTada until TudComponent is destroyed
    tickTada(destroyRef)
  }

}