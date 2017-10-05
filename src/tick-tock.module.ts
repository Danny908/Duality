import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickTockService } from './services';

import { TickTockComponent, NgxHeaderComponent } from './components';
import { NgxOverStyleDirective } from './directives';

@NgModule({
  imports: [ CommonModule ],
  providers: [
    TickTockService,
  ],
  declarations: [
    TickTockComponent,
    NgxHeaderComponent,
    NgxOverStyleDirective
  ],
  exports: [
    TickTockComponent,
    NgxHeaderComponent,
    NgxOverStyleDirective
  ]
})
export class TickTockModule {
}
