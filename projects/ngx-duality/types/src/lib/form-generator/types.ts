import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface FormField {
  tag?: string;
  label?: string;
  value?: any;
  valueParam?: string;
  type?: string;
  group?: {[key: string]: FormField };
  options?: Array<Option|string|number >;
  validators?: Array<ValidatorFn>;
  asyncValidators?: Array<AsyncValidatorFn>;
  customErrors?: {[key: string]: any};
  classes?: string | Array<string> | {[key: string]: any};
  styles?: {[key: string]: any};
  attrs?: {[key: string]: any};
}
interface Option {
  value: string|number;
  label: string|number;
  isDefault?: boolean;
}
