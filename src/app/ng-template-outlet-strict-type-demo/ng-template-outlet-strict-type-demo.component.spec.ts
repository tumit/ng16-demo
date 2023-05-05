import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateOutletStrictTypeDemoComponent } from './ng-template-outlet-strict-type-demo.component';

describe('NgTemplateOutletStrictTypeDemoComponent', () => {
  let component: NgTemplateOutletStrictTypeDemoComponent;
  let fixture: ComponentFixture<NgTemplateOutletStrictTypeDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgTemplateOutletStrictTypeDemoComponent]
    });
    fixture = TestBed.createComponent(NgTemplateOutletStrictTypeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
