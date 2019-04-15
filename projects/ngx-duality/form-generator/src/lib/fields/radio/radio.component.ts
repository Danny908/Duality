import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-radio]',
  template: `
    <div
      [formGroup]="group"
      [ngSwitch]="field.type">
      <label>
        {{field.label}}
      </label>
      <div
        *ngFor="let option of field.options">
        <label>
          <input
            type="radio"
            [value]="checkValueType(option, 'value')"
            [formControlName]="controlName">
          {{checkValueType(option, 'label')}}
        </label>
      </div>
    </div>
  `
})
export class RadioComponent {
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;

  constructor() { }

  checkValueType(value: any, tag: string): string | number {
    return typeof value !== 'object' ? value : value[tag];
  }

}
