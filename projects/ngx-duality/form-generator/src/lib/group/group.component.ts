import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControl, FormArray } from '@angular/forms';

import { FormField } from '@ngx-duality/types';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'duality-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  field: FormField | any;
  group: FormGroup | AbstractControl;
  subGroup: AbstractControl;
  formGroup: any;
  controlName: string;
  keys: Array<string>;
  constructor(
    private validationService: ValidationService
  ) { }

  ngOnInit() {
    // console.log(this.field, this.group);
    const { group } = this.field;
    this.keys = Object.keys(group);
    this.subGroup = this.group.get(this.controlName);
  }

  error(): string {
    const { label, customErrors } = this.field;
    const control = this.group;
    const error = this.validationService.validate(label, customErrors, control);
    return error;
  }
}
