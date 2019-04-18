import { Component, OnInit, Input, ContentChild, Output, EventEmitter } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

import { FormGeneratorService } from './services/form-generator.service';
import { FormValidationService } from './services/form-validation.service';

@Component({
  selector: 'duality-form-generator',
  templateUrl: './form-generator.component.html',
  styles: [`
    p.dl-error {
      width: 100%;
      color: red;
      font-size: small;
      text-align: right;
    }
  `]
})
export class FormGeneratorComponent implements OnInit {
  @ContentChild('dualityTextareaTemplate') dualityTextareaTemplate;
  @ContentChild('dualitySelectTemplate') dualitySelectTemplate;
  @ContentChild('dualityInputTemplate') dualityInputTemplate;
  @ContentChild('dualityCheckboxTemplate') dualityCheckboxTemplate;
  @ContentChild('dualityRadioTemplate') dualityRadioTemplate;
  @Input() fields: {[key: string]: FormField};
  @Input() data: {[key: string]: any};
  @Input() validateOnSubmit: false;
  @Input() submitBtn = true;
  @Input() resetBtn: boolean;
  @Input() formClass: string | Array<string> | Object;
  @Input() formStyle: Object;
  @Output() formSubmit = new EventEmitter<any>();
  form: FormGroup;
  error: string;
  private submitted: boolean;

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

    if (this.validateOnSubmit && this.submitted || !this.validateOnSubmit) {
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

  removeFalseValues(values: {[key: string]: any}): {[key: string]: any} {
    const keys = Object.keys(values);
    for (const key of keys) {
      if (Array.isArray(values[key])) {
        const newValues = [];
        values[key] = values[key].filter(val => !!val);
      }
    }
    return values;
  }

  submit() {
    this.submitted = true;
    this.updateFormControls(this.form.controls);
    console.log('%cSUBMIT', 'color: green; font-weight: bold');
    const value = this.removeFalseValues(this.form.value);
    this.formSubmit.emit(value);
  }

}
