import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionComponent } from './accordion.component';
import { AccordionGroupDirective } from './accordion-group.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordionComponent, AccordionGroupDirective],
  exports: [AccordionComponent, AccordionGroupDirective]
})
export class AccordionModule { }
