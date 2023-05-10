import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDirectiveDemoComponent } from './image-directive-demo.component';

describe('ImageDirectiveDemoComponent', () => {
  let component: ImageDirectiveDemoComponent;
  let fixture: ComponentFixture<ImageDirectiveDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ImageDirectiveDemoComponent]
    });
    fixture = TestBed.createComponent(ImageDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
