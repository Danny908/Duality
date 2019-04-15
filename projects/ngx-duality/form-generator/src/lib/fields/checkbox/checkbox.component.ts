import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-checkbox]',
  template: `
    <div
      [formGroup]="group"
      [ngSwitch]="field.type">
      <div
        [formArrayName]="controlName">
        <label>
          {{field.label}}
        </label>
        <div
          *ngFor="let option of field.options; let i = index">
          <label>
            <input
              type="checkbox"
              [formControlName]="i"
              (change)="boolToVal($event, i)">
            {{checkValueType(option, 'label')}}
          </label>
        </div>
      </div>
    </div>
  `
})
export class CheckboxComponent implements OnInit {
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log(this.group);
  }

  checkValueType(value: any, tag: string): string | number {
    return typeof value !== 'object' ? value : value[tag];
  }

  boolToVal(event: MouseEvent, index: number): void {
    const { options } = this.field;
    if ((event.target as HTMLInputElement).checked) {
      const formArray = this.group.get(this.controlName).get([index]);
      const option = options[index];
      const value = typeof option === 'object' ? option.value : option;
      formArray.setValue(value);
    }
  }
}
