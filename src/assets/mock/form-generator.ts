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
export const newFields: {[key: string]: FormField } = {
  name: {
    label: 'Name:',
    validators: [ Validators.required ],
    valueParam: 'name',
    classes: 'col-4',
    customErrors: {
      required: 'Name is Missing!'
    }
  },
  lastname: {
    label: 'Lastname:',
    value: 'Torres',
    validators: [ Validators.minLength(4), Validators.maxLength(10), Validators.required ],
    classes: 'col-4'
  },
  age: {
    label: 'Age:',
    value: 25,
    type: 'number',
    classes: 'col-4'
  },
  password: {
    label: 'Password',
    type: 'password',
    validators: [checkPassRemotely, Validators.required],
    classes: 'col-6'
  },
  repeatPassword: {
    label: 'Repeat Password',
    type: 'password',
    validators: [samePass, Validators.required],
    customErrors: {
      passnotmatch: `Passwords does not match`
    },
    classes: 'col-6'
  },
  gender: {
    label: 'Gender:',
    tag: 'radio',
    validators: [ Validators.required ],
    options: ['male', 'female'],
    classes: 'col-2'
  },
  birthday: {
    label: 'Birthday:',
    tag: 'group',
    classes: 'row col-10',
    group: {
      day: {
        label: 'Day',
        tag: 'select',
        value: '',
        validators: [ Validators.required ],
        options: [{value: null, label: 'Select a Day!', isDefault: true}, '01', '02', '03', '04', '05', '...'],
        customErrors: {
          required: 'Add a Day!!'
        },
        classes: 'col-4',
      },
      month: {
        label: 'Month',
        tag: 'select',
        validators: [ Validators.required ],
        value: 'Jun',
        options: [
          {value: 'Jun', label: 'Jun'},
          {value: 'Feb', label: 'Feb'},
          {value: 'Mar', label: 'Mar'},
          {value: 'Apr', label: 'Apr'},
          {value: '...', label: '...'}
        ],
        classes: 'col-4',
      },
      year: {
        label: 'Year',
        tag: 'select',
        value: 93,
        validators: [ Validators.required ],
        options: [93, 94, 95, 96, 97, '...'],
        classes: 'col-4',
      }
    }
  },
  skills: {
    label: 'Skills:',
    tag: 'checkbox',
    validators: [ minOptionsRequired() ],
    customErrors: {
      minoptionsrequired: `At least one option is required`
    },
    options: [{value: 'js', label: 'JS', isDefault: true}, 'ts', 'scss'],
    classes: 'col-1'
  },
  score: {
    label: 'Score',
    value: 80,
    type: 'range',
    validators: [ Validators.min(10), Validators.max(90) ],
    classes: 'col-4'
  },
  resume: {
    label: 'Resume:',
    value: 'My Resume',
    tag: 'textarea',
    validators: [ Validators.required ],
    attrs: {
      rows: 4,
      cols: 50,
    },
    classes: 'col-7'
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
