import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesCompositionDemoComponent } from './directives-composition-demo.component';

describe('DirectivesCompositionDemoComponent', () => {
  let component: DirectivesCompositionDemoComponent;
  let fixture: ComponentFixture<DirectivesCompositionDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DirectivesCompositionDemoComponent]
    });
    fixture = TestBed.createComponent(DirectivesCompositionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
