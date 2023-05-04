import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from './until-destroyed';

@Component({
  selector: 'app-destroy-ref-demo',
  templateUrl: './destroy-ref-demo.component.html',
  styleUrls: ['./destroy-ref-demo.component.scss'],
})
export class DestroyRefDemoComponent implements OnInit {

  private untilDestroyed = untilDestroyed();

  input = new FormControl();

  constructor() {
    inject(DestroyRef).onDestroy(() => {
      console.log('do something when the component is destroyed');
    });
  }

  ngOnInit(): void {
    this.input.valueChanges
      .pipe(this.untilDestroyed())
      .subscribe((v) => console.log(v));
  }
}
