import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickTockService } from './services';

import { TickTockComponent } from './components';
import { NgxOverStyleModule } from './directives';

@NgModule({
  imports: [
    CommonModule,
    NgxOverStyleModule
  ],
  providers: [
    TickTockService,
  ],
  declarations: [
    TickTockComponent,
  ],
  exports: [
    TickTockComponent,
  ]
})
export class NgxModule {
}
