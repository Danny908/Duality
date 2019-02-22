import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export interface FormField {
    label: string;
    tag?: string;
    controlName?: string;
    value?: string | number;
    param?: string;
    type?: string;
    multiple?: boolean;
    options?: Array<Option>;
    validators?: Array<ValidatorFn>;
    asyncValidators?: Array<AsyncValidatorFn>;
    errors?: {[key: string]: any};
    extras?: {[key: string]: any};
    group?: Array<FormField>;
}

interface Option {
    text: string | number;
    value: string | number;
}
