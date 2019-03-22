import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface FormField {
  label?: string;
  value?: any;
  valueParam?: string;
  type?: string;
  group?: {[key: string]: FormField };
  options?: Array<Option|string|number >;
  validators?: Array<any>;
  asyncValidators?: Array<any>;
  customErrors?: {[key: string]: any};
  attrs?: {[key: string]: any};
}
interface Option {
  value: string|number;
  label: string|number;
  isDefault?: boolean;
}
