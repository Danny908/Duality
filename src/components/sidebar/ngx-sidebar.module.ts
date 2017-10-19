import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSidebarComponent } from './ngx-sidebar.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ NgxSidebarComponent ],
  declarations: [ NgxSidebarComponent ],
  providers: [ NgxSidebarComponent ],
})
export class NgxSideBarModule { }
