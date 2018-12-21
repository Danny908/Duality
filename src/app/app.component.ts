import { Component, ViewChild } from '@angular/core';

import { fields, data } from '../assets/mock/form-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('accordionGroup') accordionGroup;
  title = 'ngx-duality';
  index = 0;
  fields = fields;
  data = data;

  constructor() { }

  tabs() {
    console.log(this.index);
    this.accordionGroup.toggle(this.index);
    this.index++;
    if (this.index > 4) {
      this.index = 0;
    }
  }
  check(val) {
    if (val === 'b' || val === 'c' ) {
      return true;
    }
  }
  checkAll(isOpen: boolean[]) {}
}
