import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'ngx-header',
  templateUrl: 'ngx-header.component.html'
})

export class NgxHeaderComponent {
  @Input() public style = {
    height: '75px'
  };
}
