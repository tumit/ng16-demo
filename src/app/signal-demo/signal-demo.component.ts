import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  templateUrl: './signal-demo.component.html',
  styleUrls: ['./signal-demo.component.scss'],
})
export class SignalDemoComponent {
  // firstName & lastName type is WritableSignal

  // input: data-type
  // output: fn
  firstName = signal('');
  lastName = signal('');

  middleName = ''

  // fullName type is (just) Signal

  // input: fn
  // output: fn
  fullName = computed(() => {
    console.log('just fullName')
    return `${this.firstName()} ${this.lastName()}`
  });

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  setFirstName(s: string): void {
    this.firstName.set(this.initFirstName(s));
  }

  // string => string
  private initFirstName(s: string): string {
    return 'Mr. ' + s
  }

  setLastName(s: string): void {
    this.lastName.set(s);
  }

  setMiddleName(s: string): void {
    this.middleName = s
  }

  get fullNameX(): string {
    console.log('fullNameX')
    return `${this.firstName()} ${this.lastName()}`;
  }
}
