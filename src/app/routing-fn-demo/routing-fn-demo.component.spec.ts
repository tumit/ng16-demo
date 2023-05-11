import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingFnDemoComponent } from './routing-fn-demo.component';

describe('RoutingFnDemoComponent', () => {
  let component: RoutingFnDemoComponent;
  let fixture: ComponentFixture<RoutingFnDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RoutingFnDemoComponent]
    });
    fixture = TestBed.createComponent(RoutingFnDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
