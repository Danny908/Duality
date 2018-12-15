import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('accordionGroup') accordionGroup;
  title = 'ngx-duality';
  index = 0;
  private myHeaderTemplate = `
  <ng-template #dualityHeaderTemplate let-header>
    {{header}}
  </ng-template>`;
  private headerSanitized;
  constructor(
    private domSanitizer: DomSanitizer
  ) {
    this.headerSanitized = this.domSanitizer.bypassSecurityTrustHtml(this.myHeaderTemplate);
  }
  tabs() {
    console.log(this.index);
    this.accordionGroup.toggle(this.index);
    this.index++;
    if (this.index > 4) {
      this.index = 0;
    }
  }
  check(isOpen: boolean) {}
  checkAll(isOpen: boolean[]) {}
}
