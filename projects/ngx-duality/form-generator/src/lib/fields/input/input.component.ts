import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, TemplateRef, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-input]',
  template: `
    <ng-container
      [formGroup]="group"
      [ngSwitch]="field.type">
      <label
        #el
        class="dl-label">
        {{field.label}}
        <input
          *ngSwitchCase="'number'"
          type="number"
          [formControlName]="controlName">
        <input
          *ngSwitchCase="'range'"
          type="range"
          [formControlName]="controlName">
        <input
          *ngSwitchDefault
          [type]="field.type"
          [formControlName]="controlName">
      </label>
    </ng-container>
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
