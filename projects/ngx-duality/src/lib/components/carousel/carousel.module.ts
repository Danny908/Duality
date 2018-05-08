import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlCarouselComponent } from './carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DlCarouselComponent
  ],
  exports: [
    DlCarouselComponent
  ]
})
export class DlCarouselModule { }
