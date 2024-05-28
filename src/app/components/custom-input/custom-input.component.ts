import { Component, forwardRef, input, signal } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonInput],
  template: `
    <ion-input
      type="text"
      [ngModel]="value()"
      (ngModelChange)="updateValue($event)"
    >
    </ion-input>
  `,
  styles: ``,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    },
  ],
})
export class CustomInputComponent implements ControlValueAccessor {
  regexp = input.required<string>();
  value = signal<string>('');
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {
    this.value.set(value);
  }
  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouch = onTouched;
  }
  updateValue(newValue: string): void {
    this.onTouch();
    const check = new RegExp(this.regexp());
    if (check.test(newValue)) {
      this.value.set(newValue);
      this.onChange(newValue);
    }
  }
}
