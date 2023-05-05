import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindRouterInputStandaloneDemoComponent } from './bind-router-input-standalone-demo.component';

describe('BindRouterInputStandaloneDemoComponent', () => {
  let component: BindRouterInputStandaloneDemoComponent;
  let fixture: ComponentFixture<BindRouterInputStandaloneDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BindRouterInputStandaloneDemoComponent]
    });
    fixture = TestBed.createComponent(BindRouterInputStandaloneDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
