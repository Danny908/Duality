import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NgxSidebarComponent } from 'ngx-duality';

import { sidebar} from '../assets/mock/app-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('toggle') public toggle: NgxSidebarComponent;
  private status = {
    ismobile: false,
    options: {
      top: '70px',
      background: 'whitesmoke'
    }
  };
  private options = {
    top: '70px'
  };
  private sidebar = sidebar;
  private menu_handler: Array<boolean> = new Array(this.sidebar.length).fill(false);
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  handleMobile(mobile: boolean): void {
    this.status.ismobile = mobile;
    // Run change detection explicityly, refer to the following link for more information:
    // https://github.com/angular/angular/issues/14748#issuecomment-307291715
    this.cdr.detectChanges();

    if (mobile) {
      this.status.options = Object.assign({}, this.status.options, {top: '0'});
    } else {
      this.status.options = Object.assign({}, this.status.options, {top: '70px'});
    }
  }
  handleToggle(): void {
    this.toggle.onToggle();
  }
  onHanleSideMenu(index: number): void {
    let i = 0;
    for (const menu of this.menu_handler) {
      if (i === index) {
        if (menu) {
          this.menu_handler[i] = false;
        } else {
          this.menu_handler[i] = true;
        }
      } else {
        this.menu_handler[i] = false;
      }
      i++;
    }
  }
}
