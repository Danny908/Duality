import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DlAccordionComponent } from './accordion.component';
import { DlAccordionTabComponent } from './accordion-tab/accordion-tab.component';
import { AccordionService } from './accordion.service';
import { AccordionTabHeaderComponent } from './accordion-tab/accordion-tab-header/accordion-tab-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DlAccordionComponent,
    DlAccordionTabComponent,
    AccordionTabHeaderComponent
  ],
  providers: [
    AccordionService
  ],
  exports: [
    DlAccordionComponent,
    DlAccordionTabComponent,
    AccordionTabHeaderComponent
  ]
})
export class DlAccordionModule { }
