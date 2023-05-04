import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyRefDemoComponent } from './destroy-ref-demo.component';

describe('DestroyRefDemoComponent', () => {
  let component: DestroyRefDemoComponent;
  let fixture: ComponentFixture<DestroyRefDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DestroyRefDemoComponent]
    });
    fixture = TestBed.createComponent(DestroyRefDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
