import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'duality-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  field: FormField;
  group: FormGroup;
  formGroup: any;
  constructor() { }

  ngOnInit() {
    this.formGroup = this.group.get(this.field.controlName);
  }

}
