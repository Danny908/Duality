import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSidebarComponent } from './ngx-sidebar.component';

@NgModule({
  imports: [ CommonModule, BrowserAnimationsModule ],
  exports: [ NgxSidebarComponent ],
  declarations: [ NgxSidebarComponent ],
  providers: [],
})
export class NgxSideBarModule { }
