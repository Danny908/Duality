import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlHeaderComponent } from './header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DlHeaderComponent
  ],
  exports: [
    DlHeaderComponent
  ]
})
export class DlHeaderModule { }
