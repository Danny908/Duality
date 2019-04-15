import { Component, Input, AfterViewInit, TemplateRef, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-textarea]',
  template: `
    <label
      #el
      [ngClass]="field.classes"
      [formGroup]="group">
      {{field.label}}
      <textarea
        [formControlName]="controlName">
      </textarea>
  </label>
  `
})
export class TextareaComponent implements AfterViewInit {
  @ViewChild('el') el: ElementRef;
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    const input = this.el.nativeElement.querySelector('textarea');
    const { attrs } = this.field;
    if (attrs) {
      this.setAttributes(attrs, input);
    }
  }

  setAttributes(attrs: Object, input: TemplateRef<HTMLSelectElement>) {
    Object.keys(attrs).forEach(key => {
      this.renderer.setAttribute(input, key, attrs[key]);
    });
  }

}
