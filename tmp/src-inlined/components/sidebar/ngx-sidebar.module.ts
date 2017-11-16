import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSidebarComponent } from './ngx-sidebar.component';
import { NgxSidebarService } from './ngx-sidebar.service';

@NgModule({
  imports: [ CommonModule ],
  exports: [ NgxSidebarComponent ],
  declarations: [ NgxSidebarComponent ],
  providers: [ NgxSidebarComponent, NgxSidebarService, {provide: 'Window', useValue: window } ],
})
export class NgxSideBarModule { }
