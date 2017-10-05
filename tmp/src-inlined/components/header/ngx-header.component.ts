import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ngx-header',
  template: `
    <div [ngStyle]="style">
      <ng-content></ng-content>
    </div>
  `
})

export class NgxHeaderComponent {
  @Input() public style = {
    height: '75px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '25px',
    paddingRight: '25px',
  };
}
