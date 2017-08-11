import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { sidebar} from '../assets/mock/app-values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private status = {
    ismobile: false,
    isopen: false
  };
  private sidebar = sidebar;
  private menu_handler: Array<boolean> = new Array(this.sidebar.length).fill(false);
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void { }

  handleMobile(mobile: boolean): void {
    this.status.ismobile = mobile;
    this.cdr.detectChanges();
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
