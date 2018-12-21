import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'duality-form-generator',
  template: `
    <form
      [formGroup]="form"
      (ngSubmit)="submit()">
      <ng-container
        *ngFor="let field of fields"
        dualityFormGenerator
        [group]="form"
        [field]="field">
      </ng-container>
    </form>
  `,
  styles: []
})
export class FormGeneratorComponent implements OnInit {
  @Input() fields: Array<FormField>;
  @Input() data: {[key: string]: any};
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.createFormGroup(this.fields);
    console.log('%cFORM CREATED', 'color: green; font-weight: bold');
    console.log(this.form);
  }

  createFormGroup(fields: Array<FormField>): FormGroup {
    const form = this.formBuilder.group({});
    fields.forEach(field => {
      if (field.group && field.group.length > 0) {
        if (field.type === 'array') {
          form.addControl(field.controlName, this.createFormArray(field.group));
        } else {
          form.addControl(field.controlName, this.createFormGroup(field.group));
        }
      } else {
        if (field.controlName) {
            form.addControl(field.controlName, this.createControl(field));
        }
      }
    });
    return form;
  }

  createFormArray(fields: Array<FormField>): FormArray {
    const form = this.formBuilder.array([]);
    fields.forEach(field => {
      if (field.controlName) {
        form.push(this.createControl(field));
      }
    });

    return form;
  }

  createControl(field: FormField): FormControl {
    const { param, value, validators } = field;
    if (value) {
      return new FormControl(value, validators);
    }
    return new FormControl(this.setFormState(param), validators);
  }

  setFormState(param: string): any {
    if (param && this.data) {
      if (param.includes('.')) {
        const subParams = param.split('.');
        let state = this.data;
        subParams.forEach(sp => state = state[sp]);
        return state;
      }
      return this.data[param];
    }
    return null;
  }

  submit() {
    console.log('%cSUBMIT', 'color: green; font-weight: bold');
    console.log(this.form.value);
  }

}
