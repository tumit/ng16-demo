import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindRouterInputDemoComponent } from './bind-router-input-demo.component';

describe('BindRouterInputDemoComponent', () => {
  let component: BindRouterInputDemoComponent;
  let fixture: ComponentFixture<BindRouterInputDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindRouterInputDemoComponent]
    });
    fixture = TestBed.createComponent(BindRouterInputDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
