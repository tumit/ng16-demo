import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[enOnly]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EnOnlyDirective),
      multi: true,
    },
  ],
})
export class EnOnlyDirective implements ControlValueAccessor {
  private onChange = (_: number | null) => {};
  private onTouched = () => {};
  private value = '';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'disabled',
      isDisabled
    );
  }

  writeValue(value: any): void {
    value = value ? String(value) : '';
    this.setValueProperty(value, false);
  }

  @HostListener('input', ['$event.target.value'])
  changeByInput(value: string): void {
    this.setValueProperty(value.replace(/[^a-z]*/g, ''), this.value !== value);
  }

  @HostListener('blur')
  onBlur(): void {
    this.onTouched();
  }

  private setValueProperty(value: string, isChanged: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);

    if (isChanged) {
      this.onChange(value ? Number(value) : null);
    }

    this.value = value;
  }
}
