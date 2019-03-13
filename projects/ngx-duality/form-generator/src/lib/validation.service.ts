import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() { }

  validate(label: string, customErrors: Object, control: AbstractControl): string {
    const { invalid, touched, dirty, errors } = control;
    if (invalid && touched && dirty) {
      console.log(errors);
      return this.error(errors, label, customErrors);
    }
    return null;
  }

  error(error: {[key: string]: any}, label: string, customErrors: {[key: string]: any}): string {
    const { maxlength, minlength, min, max } = error;
    let checkError = {
      required:  `${label} is required`,
      minlength: `${label} must be at least ${minlength && minlength.requiredLength} characters long`,
      maxlength: `${label} cannot be more than ${maxlength && maxlength.requiredLength} characters long`,
      pattern:   `${label} format is incorrect`,
      min:       `${label} must be at least ${min && min.min}`,
      max:       `${label} cannot be more than ${max && max.max}`,
      email:     `${label} format is incorrect`,
    };
    if (!!customErrors) {
      checkError = {...checkError, ...customErrors};
    }
    return checkError[Object.keys(error)[0]];
  }
}
