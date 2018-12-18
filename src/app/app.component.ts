import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('accordionGroup') accordionGroup;
  title = 'ngx-duality';
  index = 0;
  data = {
    name: 'Danny',
    lastname: 'Torres',
    password: '123456',
    gender: 'male',
    genders: {
      m: 'male',
      f: 'female'
    },
    submit: 'Submit'
  };
  formFields: Array<any> = [
    {
      label: 'Password',
      tag: 'input',
      valueParam: 'password',
      controlName: 'password',
      validators: [
        Validators.required,
        // this.checkPassRemotely
      ],
      attrs: {
        type: 'text',
        placeholder: 'Enter your password',
      }
    },
    {
      label: 'Repeat Password',
      tag: 'input',
      valueParam: 'password',
      controlName: 'repeatpassword',
      validators: [
        Validators.required,
        // this.samePass
      ],
      attrs: {
        type: 'password',
        placeholder: 'Repeat the password',
      },
      customErrors: {
        passnotmatch: `Passwords do not match`
      }
    },
    {
      label: 'Gender',
      tag: 'group',
      controlName: 'genders',
      group: [
        {
          label: 'Female',
          tag: 'input',
          controlName: 'gender',
          valueParam: 'genders.f',
          validators: [ Validators.required ],
          attrs: {
            type: 'radio',
            // checked: this.data.gender === 'female'
          }
        },
        {
          label: 'Male',
          tag: 'input',
          controlName: 'gender',
          valueParam: 'genders.m',
          validators: [ Validators.required ],
          attrs: {
            type: 'radio',
            // checked: this.data.gender === 'male'
          },
        }
      ]
    },
    {
      label: '',
      tag: 'input',
      controlName: 'submit',
      valueParam: 'submit',
      attrs: {
        type: 'submit',
      }
    }
  ];

  constructor() { }

  tabs() {
    console.log(this.index);
    this.accordionGroup.toggle(this.index);
    this.index++;
    if (this.index > 4) {
      this.index = 0;
    }
  }
  check(isOpen: boolean) {}
  checkAll(isOpen: boolean[]) {}
}
