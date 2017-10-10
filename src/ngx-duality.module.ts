import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickTockService } from './services';

import { TickTockComponent } from './components';
import { NgxOverStyleDirective } from './directives';

@NgModule({
  imports: [ CommonModule ],
  providers: [
    TickTockService,
  ],
  declarations: [
    TickTockComponent,
    NgxOverStyleDirective
  ],
  exports: [
    TickTockComponent,
    NgxOverStyleDirective
  ]
})
export class NgxModule {
}
