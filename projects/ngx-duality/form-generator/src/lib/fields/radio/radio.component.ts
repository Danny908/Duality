import { Component, Input, TemplateRef, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-radio]',
  template: `
    <div
      #el
      [formGroup]="group"
      [ngSwitch]="field.type">
      <label>
        {{field.label}}
      </label>
      <div
        *ngFor="let option of field.options">
        <label>
          <input
            type="radio"
            [value]="checkValueType(option, 'value')"
            [formControlName]="controlName">
          {{checkValueType(option, 'label')}}
        </label>
      </div>
    </div>
  `
})
export class RadioComponent implements AfterViewInit {
  @ViewChild('el') el: ElementRef;
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    const input = this.el.nativeElement.querySelector('input');
    const { attrs } = this.field;
    if (attrs) {
      this.setAttributes(attrs, input);
    }
  }

  setAttributes(attrs: Object, input: TemplateRef<HTMLInputElement>) {
    Object.keys(attrs).forEach(key => {
      this.renderer.setAttribute(input, key, attrs[key]);
    });
  }

  checkValueType(value: any, tag: string): string | number {
    return typeof value !== 'object' ? value : value[tag];
  }

}
