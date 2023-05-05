import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeUntilDestroyedDemoComponent } from './take-until-destroyed-demo.component';

describe('TakeUntilDestroyedDemoComponent', () => {
  let component: TakeUntilDestroyedDemoComponent;
  let fixture: ComponentFixture<TakeUntilDestroyedDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TakeUntilDestroyedDemoComponent]
    });
    fixture = TestBed.createComponent(TakeUntilDestroyedDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
