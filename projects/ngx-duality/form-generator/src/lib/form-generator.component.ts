import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

import { FormGeneratorService } from './services/form-generator.service';
import { FormValidationService } from './services/form-validation.service';

@Component({
  selector: 'duality-form-generator',
  templateUrl: './form-generator.component.html',
  styles: [`
    p.error {
      color: red;
      font-size: small;
    }
  `]
})
export class FormGeneratorComponent implements OnInit {
  @Input() fields: {[key: string]: FormField};
  @Input() data: {[key: string]: any};
  @Input() submitBtn = true;
  @Input() resetBtn: boolean;
  @Input() formClass: string | Array<string> | Object;
  form: FormGroup;
  constructor(
    private formGeneratorService: FormGeneratorService,
    private formValidationService: FormValidationService
  ) { }

  ngOnInit() {
    this.formGeneratorService.data = this.data;
    this.form = this.formGeneratorService.createFormGroup(this.fields);
    console.log('%cFORM CREATED', 'color: green; font-weight: bold');
    console.log(this.form);
  }

  getKeys(fields: {[key: string]: FormField}): Array<string> {
    return Object.keys(fields);
  }

  getSubGroup(form: FormGroup, key: string): FormGroup {
    return form.get(key) as FormGroup;
  }

  getError(group: FormGroup, field: FormField, controlName: string): string {
    const { label, customErrors, tag, group: groupFields } = field;
    const control = group.get(controlName) as FormGroup;
    let error: string;

    if (tag === 'group' && control.invalid) {
      const keys = Object.keys(groupFields);
      for (const key of keys) {
        if (control.controls[key].invalid) {
          const { label: groupLabel, customErrors: groupCustomErrors } = groupFields[key];
          error = this.formValidationService.validate(groupLabel, groupCustomErrors, control.controls[key]);
          break;
        }
      }
    } else {
      error = this.formValidationService.validate(label, customErrors, control);
    }
    return error;
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
