import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Injectable({
  providedIn: 'root'
})
export class FormGeneratorService {
  public data: {[key: string]: any};
  constructor() { }

  createFormGroup(fields: {[key: string]: FormField}): FormGroup {
    const form = new FormGroup({});
    Object.keys(fields).forEach(key => {
      if (!!fields[key].group) {
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

  createFormArray(field: FormField): FormArray {
    const { options, validators = [], asyncValidators = [], value, valueParam, } = field;
    const form = new FormArray([], validators, asyncValidators);
    for (const option of options) {
      let val = value ? value : this.setControlValue(valueParam);
      val = !val ? this.defaultValue(field) : val;
      const optValue = typeof option !== 'object' ? option : option.value;
      form.push(new FormControl(val && val.includes(optValue) && optValue));
    }
    return form;
  }

  newControl(field: FormField): FormControl {
    const { valueParam, value, validators = [], asyncValidators = [] } = field;
    let val = value ? value : this.setControlValue(valueParam);
    // Set default value on select
    val = !val && field.options ? this.defaultValue(field) : val;
    return new FormControl(val, validators, asyncValidators);
  }

  defaultValue(field: FormField): string | number {
    // Set default value on select
    const opt = field.options[0];
    return typeof opt === 'object' && opt.isDefault && opt.value;
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
}
