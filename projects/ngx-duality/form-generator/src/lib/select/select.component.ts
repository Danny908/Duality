import { Component, Renderer2, ViewChild, ElementRef, AfterViewInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'duality-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements AfterViewInit {
  @ViewChild('input') input: ElementRef;
  field: FormField;
  group: FormGroup;

  constructor(
    private renderer: Renderer2
  ) { }

  ngAfterViewInit() {
    const { extras } = this.field;
    if (this.input && extras) {
      const { nativeElement: element } = this.input;
      this.applyAttributes(extras, element);
    }
  }

  applyAttributes(extras: Object, element: TemplateRef<any>) {
    Object.keys(extras).forEach(key => {
      this.renderer.setAttribute(element, key, extras[key]);
    });
  }
}
