import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'duality-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  field: FormField;
  group: FormGroup | AbstractControl;
  formGroup: any;
  controlName: string;
  keys: Array<string>;
  constructor() { }

  ngOnInit() {
    const { options } = this.field;
    this.keys = Object.keys(options);
    if (this.field.type === 'checkbox') {
      this.group = this.group.get(this.controlName);
    }
  }
}
