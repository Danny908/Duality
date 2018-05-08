import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlSidebarModule } from './components/sidebar/sidebar.module';
import { DlOverStyleModule } from './directives/over-style/over-style.module';
import { DlHeaderModule } from './components/header/header.module';
import { DlListModule } from './components/list/list.module';
import { DlAccordionModule } from './components/accordion/accordion.module';
import { DlCarouselModule } from './components/carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    DlSidebarModule,
    DlOverStyleModule,
    DlHeaderModule,
    DlListModule,
    DlAccordionModule
  ],
  declarations: [],
  exports: [
    DlSidebarModule,
    DlOverStyleModule,
    DlHeaderModule,
    DlListModule,
    DlAccordionModule,
    DlCarouselModule
  ]
})
export class DualityModule { }
