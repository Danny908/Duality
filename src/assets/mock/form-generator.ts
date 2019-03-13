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
  tag?: string;
  value?: any;
  valueParam?: string;
  type?: string;
  options?: {[key: string]: NewFormField };
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
  },
  lastname: {
    label: 'Lastname:',
    valueParam: 'lastname',
    validators: [ Validators.minLength(4), Validators.maxLength(10), Validators.required ]
  },
  password: {
    label: 'Password',
    validators: [checkPassRemotely]
  },
  repeatPassword: {
    label: 'Repeat Password',
    validators: [samePass],
    customErrors: {
      passnotmatch: `Passwords does not match`
    }
  },
  gender: {
    label: 'Gender:',
    tag: 'group',
    type: 'radio',
    validators: [ Validators.required ],
    options: {
      male: {
        label: 'Male',
        value: 'male',
        type: 'radio',
        attrs: {
          autofocus: true,
        }
      },
      female: {
        label: 'Female',
        value: 'female',
        type: 'radio',
      }
    }
  },
  skills: {
    label: 'Skills:',
    tag: 'group',
    type: 'checkbox',
    valueParam: 'skills',
    validators: [ minOptionsRequired() ],
    customErrors: {
      minoptionsrequired: `At least one option is required`
    },
    options: {
      blue: {
        label: 'JS',
        value: 'js',
        type: 'checkbox',
      },
      red: {
        label: 'TS',
        value: 'ts',
        type: 'checkbox'
      },
      yellow: {
        label: 'SCSS',
        value: 'scss',
        type: 'checkbox'
      }
    }
  },
  birthday: {
    label: 'Birthday',
    valueParam: 'birthday',
    type: 'date'
  },
  score: {
    label: 'Score',
    valueParam: 'score',
    type: 'range',
    validators: [ Validators.min(10), Validators.max(90) ]
  },
  country: {
    label: 'Country',
    validators: [ minOptionsRequired(2) ],
    type: 'select',
    attrs: {
      multiple: true
    },
    customErrors: {
      minoptionsrequired: `At least two options are required`
    },
    options: {
      mexico: {
        label: 'Mexico',
        value: 'mexico'
      },
      us: {
        label: 'US',
        value: 'us'
      }
    }
  },
  resume: {
    label: 'Resume:',
    valueParam: 'resume',
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
