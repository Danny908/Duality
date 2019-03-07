import { Component, ViewChild } from '@angular/core';
import { BrowserDetectService } from '@ngx-duality/browser-detect';
import { Expand } from '@ngx-duality/animations';

import { data, newFields } from '../assets/mock/form-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('accordionGroup') accordionGroup;
  title = 'ngx-duality';
  index = 0;
  fields = newFields;
  data = data;
  sidebarstatus: any;

  constructor(
    private browserDetect: BrowserDetectService
  ) {
    console.log(this.data);
  }

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

  sidebarStatus(status: any) {
    this.sidebarstatus = status;
  }
}
