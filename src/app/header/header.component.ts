import { Component, OnInit, Input } from '@angular/core';
import { DlSidebarComponent  } from 'ngx-duality';

@Component({
  selector: 'demo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() private toggle: DlSidebarComponent;
  @Input() public ismobile: Boolean = true;
  public onHover: boolean = false;
  public headerOptions = [
    {
      name: 'GET STARTED',
      route: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }
  toggleSideBar(): void {
    this.toggle.onToggle();
  }

}
