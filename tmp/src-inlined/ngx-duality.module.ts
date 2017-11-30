import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxOverStyleModule } from './directives';
import { NgxSideBarModule } from './components';

@NgModule({
  imports: [
    CommonModule,
    NgxOverStyleModule,
    NgxSideBarModule
  ],
  providers: [
  ],
  declarations: [
  ],
  exports: [
    NgxSideBarModule
  ]
})
export class NgxDualityModule {
}
