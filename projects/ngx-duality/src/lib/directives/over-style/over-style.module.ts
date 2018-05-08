import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OverStyleDirective } from './over-style.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    OverStyleDirective
  ],
  exports: [
    OverStyleDirective
  ]
})
export class DlOverStyleModule { }
