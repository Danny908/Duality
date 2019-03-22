import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '@ngx-duality/types';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'duality-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  subGroup: FormGroup;
  controlName: string;
  keys: Array<string>;
  constructor(
    private validationService: ValidationService
  ) { }

  ngOnInit() {
    const { group } = this.field;
    this.keys = Object.keys(group);
    this.subGroup = this.group.get(this.controlName) as FormGroup;
  }

  error(): string {
    const { group } = this.field;
    const { invalid, controls } = this.subGroup;
    let error: string;

    if (invalid) {
      const keys = Object.keys(controls);
      for (const key of keys) {
        if (controls[key].invalid) {
          const { label, customErrors } = group[key];
          error = this.validationService.validate(label, customErrors, controls[key]);
          break;
        }
      }
    }
    return error;
  }
}
