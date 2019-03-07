import { FormField } from '@ngx-duality/types';
import { Validators } from '@angular/forms';


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

// export const fields: Array<FormField> = [
//     {
//         label: 'Name',
//         controlName: 'name',
//         element: 'input',
//         param: 'name',
//         extras: {
//             placeholder: 'Add your name',
//         }
//     },
//     {
//         label: 'Last Name',
//         controlName: 'lastname',
//         element: 'input',
//         param: 'lastname',
//         extras: {
//             placeholder: 'Add your last name',
//             disabled: true
//         }
//     },
//     {
//       label: 'Gender',
//       element: 'input',
//       param: 'gender',
//       controlName: 'gender',
//       type: 'radio',
//       options: [
//         {
//           text: 'Male',
//           value: 'male'
//         },
//         {
//           text: 'Female',
//           value: 'female'
//         }
//       ]
//     },
//     {
//       label: 'Password',
//       element: 'input',
//       type: 'password',
//       controlName: 'password'
//     },
//     {
//       label: 'Upload',
//       element: 'input',
//       type: 'file',
//       controlName: 'upload'
//     },
//     {
//       label: 'BirthDay',
//       element: 'input',
//       type: 'date',
//       controlName: 'birthday',
//       param: 'birthday'
//     },
//     {
//       label: 'Month',
//       element: 'input',
//       type: 'month',
//       controlName: 'month'
//     },
//     {
//       label: 'Number',
//       element: 'input',
//       type: 'number',
//       controlName: 'number',
//       validators: [ Validators.min(0), Validators.max(10) ],
//       extras: {
//         min: 0,
//         max: 10
//       }
//     },
//     {
//       label: 'Range',
//       element: 'input',
//       type: 'range',
//       controlName: 'points',
//       param: 'points',
//       validators: [ Validators.min(0), Validators.max(10) ],
//       extras: {
//         min: 0,
//         max: 10
//       }
//     },
//     {
//       label: 'Time',
//       element: 'input',
//       controlName: 'time',
//       type: 'time'
//     },
//     {
//       label: 'Week',
//       element: 'input',
//       controlName: 'week',
//       type: 'week',
//     },
//     {
//       label: 'Skills',
//       element: 'group',
//       controlName: 'skills',
//       type: 'array',
//       group:
//         skills.map(function(skill): FormField {
//           return {
//             label:   skill.text,
//             element: 'input',
//             type: 'checkbox',
//             controlName: skill.value,
//             value: data.skills.find(sk => sk === skill.value) && skill.value
//           };
//         })
//     },
//     {
//       label: 'Foods',
//       element: 'select',
//       controlName: 'foods',
//       param: 'food',
//       multiple: true,
//       extras: {
//         autofocus: true
//       },
//       options: [
//         {value: '', text: ''},
//         {value: 'sushi', text: 'Shushi'},
//         {value: 'tacos', text: 'Tacos'},
//         {value: 'chips', text: 'Chips'},
//         {value: 'cookies', text: 'Cookies'},
//         {value: 'chocolate', text: 'Chocolate'}

//       ]
//     },
//     {
//       label: 'Resume',
//       element: 'textArea',
//       controlName: 'resume',
//       param: 'resume'
//     },
//     {
//       label: 'Reset',
//       element: 'input',
//       type: 'reset',
//       extras: {
//         value: 'Reset',
//         novalidate: true
//       }
//     },
//     {
//       label: '',
//       element: 'input',
//       type: 'submit',
//       extras: {
//         value: 'Submit',
//         novalidate: true
//       }
//     }
// ];
export interface NewFormField {
  label?: string;
  tag?: string;
  value?: any;
  valueParam?: string;
  type?: string;
  // multiple?: boolean;
  options?: {[key: string]: NewFormField };
  validators?: Array<any>;
  asyncValidators?: Array<any>;
  errors?: {[key: string]: any};
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
    valueParam: 'name',
    attrs: {
      readOnly: true
    }
  },
  lastname: {
    label: 'Lastname:',
    valueParam: 'lastname',
    attrs: {
      disabled: true
    }
  },
  gender: {
    label: 'Gender:',
    tag: 'group',
    type: 'radio',
    valueParam: 'gender',
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
    options: {
      blue: {
        label: 'JS',
        value: 'js',
        type: 'checkbox'
      },
      red: {
        label: 'TS',
        value: 'ts',
        type: 'checkbox'
      },
      yellow: {
        label: 'SCSS',
        value: 'scss',
        type: 'checkbox',
        attrs: {
          disabled: true,
        }
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
    type: 'range'
  },
  country: {
    label: 'Country',
    valueParam: 'country',
    type: 'select',
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
  resune: {
    label: 'Resume:',
    valueParam: 'resume',
    type: 'textarea'
  }
};


