import { Component, Input, TemplateRef, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-radio]',
  template: `
    <ng-container
      [formGroup]="group">
      <label class="dl-label dl-label-radio">
        {{field.label}}
      </label>
      <div
        #el
        *ngFor="let option of field.options">
        <label class="dl-label dl-label-option">
          <input
            type="radio"
            [value]="checkValueType(option, 'value')"
            [formControlName]="controlName">
          {{checkValueType(option, 'label')}}
        </label>
      </div>
    </ng-container>
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
