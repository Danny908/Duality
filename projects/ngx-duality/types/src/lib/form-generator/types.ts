import { ValidatorFn, AsyncValidatorFn } from '@angular/forms';

// export interface FormField2 {
//     // label: string;
//     // tag: string;
//     // controlName?: string;
//     // valueParam?: string;
//     // value?: any;
//     // type?: string;
//     options?: Array<Options>;
//     // validators?: Array<ValidatorFn>;
//     // asyncValidators?: Array<AsyncValidatorFn>;
//     // customErrors?: {[key: string]: any};
    
//     group?: Array<FormField>;
//     classes?: any;
//     styles?: {
//         wrapper?: {[key: string]: any};
//         label?: {[key: string]: any};
//         error?: {[key: string]: any};
//         element?: {[key: string]: any};
//     };
// }
export interface FormField {
    label: string;
    element: string;
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
