import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DlSidebarComponent } from './sidebar.component';
import { SidebarService } from './sidebar.service';

@NgModule({
  imports: [ CommonModule ],
  exports: [ DlSidebarComponent ],
  declarations: [ DlSidebarComponent ],
  providers: [ SidebarService, {provide: 'Window', useValue: window } ],
})
export class DlSidebarModule { }
