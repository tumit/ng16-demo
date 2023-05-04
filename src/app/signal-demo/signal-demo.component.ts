import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo',
  templateUrl: './signal-demo.component.html',
  styleUrls: ['./signal-demo.component.scss'],
})
export class SignalDemoComponent {
  // firstName & lastName type is WritableSignal
  firstName = signal('Tum');
  lastName = signal('It');

  // fullName type is (just) Signal
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
  }

  setFirstName(s: string): void {
    this.firstName.set(s);
  }

  setLastName(s: string): void {
    this.lastName.set(s);
  }
}
