import { NgModule } from '@angular/core';
import { TickTockComponent } from './components';
import { TickTockService } from './services';

import { NgxOverStyleDirective } from './directives';

@NgModule({
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
export class TickTockModule {
}
