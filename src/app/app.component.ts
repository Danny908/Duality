import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

import { NgxSidebarComponent } from 'ngx-duality';
import { sidebar } from '../assets/mock/app-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('toggle') public toggle: NgxSidebarComponent;
  private status = {
    ismobile: false,
    isopen: true,
  };
  private options = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }
  // private options = {
  //   top: '70px'
  // };
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
      this.options = Object.assign({}, this.options, {marginTop: '0'});
    } else {
      if (!this.status.isopen) {
        this.handleToggle();
      }
      this.options = Object.assign({}, this.options, {marginTop: '70px'});
    }
  }
  handleOpen(open: boolean): void {
    this.status.isopen = open;
    if (open) {
      this.options = Object.assign({}, this.options, {boxShadow: '3px 0px 3px rgba(0, 0, 0, 0.5)'});
    } else {
      this.options = Object.assign({}, this.options, {boxShadow: 'none'});
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
