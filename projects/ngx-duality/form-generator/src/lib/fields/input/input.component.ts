import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, TemplateRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-input]',
  template: `
    <div
      #el
      [ngClass]="field.classes"
      [formGroup]="group"
      [ngSwitch]="field.type">
      <label
        *ngSwitchCase="'number'">
        {{field.label}}
        <input
          type="number"
          [formControlName]="controlName">
      </label>
      <label
        *ngSwitchCase="'range'">
        {{field.label}}
        <input
          type="range"
          [formControlName]="controlName">
      </label>
      <label
        *ngSwitchDefault>
        {{field.label}}
        <input
          [type]="field.type"
          [formControlName]="controlName">
      </label>
    </div>
  `
})
export class InputComponent implements AfterViewInit {
  @ViewChild('el') el: ElementRef;
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;

  constructor(
    private renderer: Renderer2,
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
