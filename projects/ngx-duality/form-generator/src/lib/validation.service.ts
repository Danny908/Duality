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
      return this.error(errors, label, customErrors);
    }
    return null;
  }

  error(error: {[key: string]: any}, label: string, customErrors: {[key: string]: any}): string {
    let checkError = {
      required:  `${label} is required`,
      minlength: `${label} must be at least ${error.requiredLength} characters long`,
      maxlength: `${label} cannot be more than ${error.requiredLength} characters long`,
      pattern:   `${label} format is incorrect`,
      min:       `${label} must be at least ${error.requiredLength}`,
      max:       `${label} cannot be more than ${error.requiredLength}`,
      email:     `${label} format is incorrect`,
    };
    if (!!customErrors) {
      checkError = {...checkError, ...customErrors};
    }
    return checkError[Object.keys(error)[0]];
  }
}
