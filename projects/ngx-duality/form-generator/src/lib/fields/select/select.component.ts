import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

@Component({
  selector: 'div[duality-select]',
  templateUrl: './select.component.html'
})
export class SelectComponent implements OnInit {
  @Input() controlName: string;
  @Input() field: FormField;
  @Input() group: FormGroup;
  @Input() isGroup: boolean;

  constructor() { }

  ngOnInit() {}

  checkValueType(value: any, tag: string): string | number {
    return typeof value !== 'object' ? value : value[tag];
  }

}
