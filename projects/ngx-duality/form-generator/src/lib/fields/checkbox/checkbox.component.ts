import { Component, Input, AfterViewInit, Renderer2, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-checkbox]',
  template: `
    <ng-container
      [formGroup]="group">
      <label
        class="dl-label dl-label-checkbox">
        {{field.label}}
      </label>
      <div
        #el
        *ngFor="let option of field.options; let i = index">
        <label
          class="dl-label dl-label-option"
          [formArrayName]="controlName">
          <input
            type="checkbox"
            [formControlName]="i"
            (change)="boolToVal($event, i)">
          {{checkValueType(option, 'label')}}
        </label>
      </div>
    </ng-container>
  `
})
export class CheckboxComponent implements AfterViewInit {
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

  boolToVal(event: MouseEvent, index: number): void {
    const { options } = this.field;
    if ((event.target as HTMLInputElement).checked) {
      const formArray = this.group.get(this.controlName).get([index]);
      const option = options[index];
      const value = typeof option === 'object' ? option.value : option;
      formArray.setValue(value);
    }
  }
}
