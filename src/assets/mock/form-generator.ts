import { FormField } from '@ngx-duality/types';
import { Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';


const skills = [
  {value: 'js', text: 'JS' },
  {value: 'ts', text: 'TS' },
  {value: 'sccs', text: 'SCSS' },
  {value: 'php', text: 'PHP' },
  {value: 'pearl', text: 'Pearl' },
];

const styles = {
  wrapper: {
    width: '500px',
    padding: '5px'
  },
  label: {
    color: 'gray',
    fontSize: '14px',
    fontWeight: 'light'
  },
  element: {
    color: 'red',
    fontsize: '16px',
    width: '100%',
    height: '30px',
    marginTop: '5px',
    paddingLeft: '10px'
  }
};

export interface NewFormField {
  label?: string;
  value?: any;
  valueParam?: string;
  type?: string;
  group?: {[key: string]: NewFormField };
  options?: Array<{
    value: string|number,
    label: string|number,
    isDefault?: boolean
  }|string|number >;
  validators?: Array<any>;
  asyncValidators?: Array<any>;
  customErrors?: {[key: string]: any};
  attrs?: {[key: string]: any};
}
export const data: {[key: string]: any} = {
  name: 'Daniel',
  lastname: 'Torres',
  birthday: '1993-08-31',
  gender: 'male',
  score: 99,
  skills: [
    'js',
    'ts',
    'sccs',
  ],
  food: 'chocolate',
  resume: 'My Resume',
  country: 'mexico'
};
export const newFields: {[key: string]: NewFormField } = {
  name: {
    label: 'Name:',
    validators: [ Validators.required ],
    value: 'Danny'
  },
  lastname: {
    label: 'Lastname:',
    value: 'Torres',
    validators: [ Validators.minLength(4), Validators.maxLength(10), Validators.required ]
  },
  password: {
    label: 'Password',
    type: 'password',
    validators: [checkPassRemotely]
  },
  repeatPassword: {
    label: 'Repeat Password',
    type: 'password',
    validators: [samePass],
    customErrors: {
      passnotmatch: `Passwords does not match`
    }
  },
  gender: {
    label: 'Gender:',
    type: 'radio',
    value: 'male',
    validators: [ Validators.required ],
    options: ['male', 'female']
  },
  birthday: {
    label: 'Birthday:',
    group: {
      day: {
        label: 'Day',
        type: 'select',
        value: '',
        validators: [ Validators.required ],
        options: [{value: null, label: 'Select a Day!', isDefault: true}, '01', '02', '03', '04', '05', '...'],
        customErrors: {
          required: 'Add a Day!!'
        }
      },
      month: {
        label: 'Month',
        type: 'select',
        validators: [ Validators.required ],
        value: 'Jun',
        options: [
          {value: 'Jun', label: 'Jun'},
          {value: 'Feb', label: 'Feb'},
          {value: 'Mar', label: 'Mar'},
          {value: 'Apr', label: 'Apr'},
          {value: '...', label: '...'}
        ]
      },
      year: {
        label: 'Year',
        type: 'select',
        value: '93',
        validators: [ Validators.required ],
        options: ['93', '94', '95', '96', '97', '...']
      },
    }
  },
  skills: {
    label: 'Skills:',
    type: 'checkbox',
    value: ['js', 'ts'],
    validators: [ minOptionsRequired() ],
    customErrors: {
      minoptionsrequired: `At least one option is required`
    },
    options: ['js', 'ts', 'scss'],
  },
  score: {
    label: 'Score',
    value: 80,
    type: 'range',
    validators: [ Validators.min(10), Validators.max(90) ]
  },
  resume: {
    label: 'Resume:',
    value: 'My Resume',
    type: 'textarea',
    validators: [ Validators.required ],
    attrs: {
      rows: 4,
      cols: 50,
    }
  }
};

function checkPassRemotely(control: AbstractControl): null {
  const repeatPass = control.root.get('repeatPassword');
  if (repeatPass) {
    repeatPass.updateValueAndValidity();
  }
  return null;
}

function samePass(control: AbstractControl): { passnotmatch: boolean } | null {
  const password = control.root.get('password');
  if (password && control && (control.value !== password.value)) {
    return { passnotmatch: true };
  }
  return null;
}

function minOptionsRequired(min = 1): ValidatorFn {
    return(control: AbstractControl) => {
      if (control && control.value) {
        let options = 0;
        control.value.forEach(v => {
          if (v) { options++; }
        });
        return options < min && {minoptionsrequired: true };
      }
    return null;
  };
}
