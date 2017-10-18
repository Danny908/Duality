import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TickTockService } from './services';

import { TickTockComponent, NgxSideBarModule, NgxSidebarComponent } from './components';
import { NgxOverStyleModule } from './directives';

@NgModule({
  imports: [
    CommonModule,
    NgxOverStyleModule,
    NgxSideBarModule
  ],
  providers: [
    TickTockService,
  ],
  declarations: [
    TickTockComponent,
    NgxSidebarComponent
  ],
  exports: [
    TickTockComponent,
    NgxSidebarComponent
  ]
})
export class NgxModule {
}
