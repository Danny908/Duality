import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-textarea]',
  template: `
    <label [formGroup]="group">
      {{field.label}}
      <textarea
        [formControlName]="controlName">
      </textarea>
  </label>
  `
})
export class TextareaComponent implements OnInit {
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;

  constructor() { }

  ngOnInit() {}

}
