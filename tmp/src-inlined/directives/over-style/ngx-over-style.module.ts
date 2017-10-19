import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxOverStyleDirective } from './ngx-over-style.directive';

@NgModule({
  imports: [ CommonModule ],
  exports: [NgxOverStyleDirective],
  declarations: [NgxOverStyleDirective],
  providers: [NgxOverStyleDirective],
})
export class NgxOverStyleModule { }
