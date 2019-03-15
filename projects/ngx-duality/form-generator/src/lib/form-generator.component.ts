import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
// import { FormField } from '@ngx-duality/types';

export interface FormField {
  label?: string;
  element?: string;
  type?: string;
  value?: any;
  valueParam?: string;
  multiple?: boolean;
  options?: {[key: string]: FormField};
  validators?: Array<any>;
  asyncValidators?: Array<any>;
  errors?: {[key: string]: any};
  attrs?: {[key: string]: any};
}
@Component({
  selector: 'duality-form-generator',
  template: `
    <form
    [formGroup]="form"
    (ngSubmit)="submit()">
      <ng-container
        *ngFor="let key of keys"
        dualityFormGenerator
        [group]="form"
        [field]="fields[key]"
        [controlName]="key">
      </ng-container>
      <button
        *ngIf="submitBtn"
        type="submit">
          Submit
      </button>
      <button
        *ngIf="resetBtn"
        type="submit">
          Reset
      </button>
    </form>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FormGeneratorComponent implements OnInit {
  @Input() fields: {[key: string]: FormField};
  @Input() data: {[key: string]: any};
  @Input() submitBtn = true;
  @Input() resetBtn: boolean;
  form: FormGroup;
  keys: Array<string> = [];
  constructor() { }

  ngOnInit() {
    this.form = this.createFormGroup(this.fields);
    this.keys = Object.keys(this.fields);
    console.log('%cFORM CREATED', 'color: green; font-weight: bold');
    console.log(this.form);
  }

  createFormGroup(fields: {[key: string]: any}): FormGroup {
    const form = new FormGroup({});
    console.log('FIELDS:', fields);
    Object.keys(fields).forEach(key => {
      if (fields[key].isGroup) {
        form.addControl(key, this.createFormGroup(fields[key].group));
      } else {
        if (fields[key].type === 'checkbox') {
          form.addControl(key, this.createFormArray(fields[key]));
        } else {
          form.addControl(key, this.newControl(fields[key]));
        }
      }
    });
    return form;
  }

  createFormArray(field: any): FormArray {
    const { options, validators = [], asyncValidators = [], value, valueParam, } = field;
    // console.log('Checkbox Parent', field);
    const form = new FormArray([], validators, asyncValidators);
    for (const option of options) {
      const val = value ? value : this.setControlValue(valueParam);
      form.push(this.newControl(option, val ? val.includes(option.value) : false));
    }
    return form;
  }

  newControl(field: any, optionsVal?: boolean): FormControl {
    const { valueParam, value, validators = [], asyncValidators = [] } = field;
    const val = value ? value : this.setControlValue(valueParam);
    return optionsVal !== undefined ?
      new FormControl(optionsVal, validators, asyncValidators) :
      new FormControl(val, validators, asyncValidators);
  }

  setControlValue(valueParam: string): string {
    let state: string;
    if (valueParam && this.data) {
      if (valueParam.includes('.')) {
        valueParam.split('.').forEach(sp => state = this.data[sp]);
        return state;
      }
      state = this.data[valueParam];
      return state;
    }
    return null;
  }

  updateFormControls(controls: {[key: string]: AbstractControl | FormGroup}): void {
    Object.keys(controls).forEach((k) => {
      const control = controls[k];
      if (control instanceof FormGroup) {
        this.updateFormControls(control.controls);
      } else if (control.invalid) {
        control.markAsTouched();
        control.markAsDirty();
      }
    });
  }

  submit() {
    this.updateFormControls(this.form.controls);
    console.log('%cSUBMIT', 'color: green; font-weight: bold');
    console.log(this.form.value);
  }

}
