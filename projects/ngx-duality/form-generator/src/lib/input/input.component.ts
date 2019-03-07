import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

import { FormField } from '@ngx-duality/types';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'duality-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
  @ViewChild('input') el: ElementRef;
  controlName: string;
  field: FormField | any;
  group: FormGroup;
  options: boolean;
  keys: Array<string>;

  constructor(
    private renderer: Renderer2,
    private validationService: ValidationService
  ) { }

  ngAfterViewInit() {
    const input = this.el.nativeElement.querySelector('input');
    const { attrs, value, type, options } = this.field;
    this.keys = type === 'select' && Object.keys(options);
    if (type === 'radio') {
      this.renderer.setAttribute(input, 'name', this.controlName);
    }
    if (attrs) {
      this.setAttributes(attrs, input);
    }
    if (this.options) {
      // this.renderer.setAttribute(input, 'value', value);
      if (type === 'radio' && this.group.get(this.controlName).value === value) {
      }
      // this.renderer.setAttribute(input, 'checked', 'true');
    }
    // console.log(this.el.nativeElement.querySelector('input'));
  }

  setAttributes(attrs: Object, input: TemplateRef<any>) {
    Object.keys(attrs).forEach(key => {
      this.renderer.setAttribute(input, key, attrs[key]);
    });
  }

  // setControl(field: string): string {
  //   if (this.group.controls && this.group.controls.length) {
  //     const controls: [] = this.group.controls;
  //     return controls.findIndex(ctrl:FormControl => ctrl.)
  //   }
  // }

  // error(): string {
  //   const { controlName, label, errors } = this.field;
  //   const control = this.group.get(controlName);
  //   const error = this.validationService.validate(label, errors, control);
  //   return error;
  // }

}
