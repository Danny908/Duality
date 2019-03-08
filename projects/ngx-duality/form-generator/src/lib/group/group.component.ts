import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormArray } from '@angular/forms';

import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'duality-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  field: FormField;
  group: FormGroup | AbstractControl;
  subGroup: AbstractControl;
  formGroup: any;
  controlName: string;
  keys: Array<string>;
  constructor() { }

  ngOnInit() {
    const { options } = this.field;
    this.keys = Object.keys(options);
    this.subGroup = this.group;
    this.group = this.group.get(this.controlName);
  }
}
