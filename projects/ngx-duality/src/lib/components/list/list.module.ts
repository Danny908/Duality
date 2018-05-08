import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlListComponent } from './list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DlListComponent
  ],
  exports: [
    DlListComponent
  ]
})
export class DlListModule { }
