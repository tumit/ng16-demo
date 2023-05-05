import { Component, OnInit, TemplateRef } from '@angular/core';
import { delay, of, tap, timer } from 'rxjs';

interface Stock {
  abbr: string,
  market: 'SET' | 'MAI'
}

interface Context<T> {
  $implicit: T;
}

@Component({
  selector: 'app-ng-template-outlet-strict-type-demo',
  templateUrl: './ng-template-outlet-strict-type-demo.component.html',
  styleUrls: ['./ng-template-outlet-strict-type-demo.component.scss']
})
export class NgTemplateOutletStrictTypeDemoComponent implements OnInit {

  templateRef!: TemplateRef<Stock>

  asStock = (a: unknown) => a as unknown as Stock;

  readonly guardFn = (ctx: any): ctx is Context<Stock> => true;

  loading = true;

  data: Stock[] = [
    { abbr: 'BBL', market: 'SET' },
    { abbr: 'KBANK', market: 'SET' },
    { abbr: 'UKEM', market: 'MAI' },
  ]

  ngOnInit(): void {
    of(false).pipe(delay(3000)).subscribe(v => {
      console.log(v);
      this.loading = v
    })
  }



}
