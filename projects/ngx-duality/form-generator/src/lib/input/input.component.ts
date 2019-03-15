import { Component, OnInit, Renderer2, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '@ngx-duality/types';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'duality-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef;
  controlName: string;
  field: FormField | any;
  group: FormGroup;
  isGroup: boolean;


  constructor(
    private renderer: Renderer2,
    private validationService: ValidationService
  ) { }

  ngAfterViewInit() {
    // const input = this.input.nativeElement;
    // const { attrs, value, type, options } = this.field;
    // this.keys = type === 'select' && Object.keys(options);
    // if (attrs) {
    //   this.setAttributes(attrs, input);
    // }
  }

  setAttributes(attrs: Object, input: TemplateRef<any>) {
    Object.keys(attrs).forEach(key => {
      this.renderer.setAttribute(input, key, attrs[key]);
    });
  }

  checkPropType(value: any, tag: string): string | number {
    return typeof value === 'string' ? value : value[tag];
  }

  error(): string {
    const { label, customErrors } = this.field;
    let error: string;
    if (!this.isGroup) {
      const control = this.group.get(this.controlName);
      error = this.validationService.validate(label, customErrors, control);
    }
    return error;
  }

}
