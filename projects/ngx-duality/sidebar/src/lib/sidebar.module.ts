import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { SelectComponent } from './fields/select/select.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ SidebarComponent, SelectComponent ],
  exports: [ SidebarComponent ]
})
export class SidebarModule { }
