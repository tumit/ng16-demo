import { inject, DestroyRef } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

export function untilDestroyed() {
  const subject = new Subject();

  inject(DestroyRef).onDestroy(() => {
    subject.next(true);
    subject.complete();
    console.log('destroyed')
  });

  return <T>() => takeUntil<T>(subject.asObservable());
}