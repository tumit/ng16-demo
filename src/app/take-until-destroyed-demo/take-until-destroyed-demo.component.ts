import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-take-until-destroyed-demo',
  templateUrl: './take-until-destroyed-demo.component.html',
  styleUrls: ['./take-until-destroyed-demo.component.scss']
})
export class TakeUntilDestroyedDemoComponent implements OnInit {

  input = new FormControl()

  constructor() {
    this.input.valueChanges.pipe(takeUntilDestroyed()).subscribe(v => console.log(v))
  }

  ngOnInit(): void {

  }

}
