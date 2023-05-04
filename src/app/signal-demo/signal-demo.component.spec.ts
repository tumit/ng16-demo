import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDemoComponent } from './signal-demo.component';

describe('SignalDemoComponent', () => {
  let component: SignalDemoComponent;
  let fixture: ComponentFixture<SignalDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalDemoComponent]
    });
    fixture = TestBed.createComponent(SignalDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
