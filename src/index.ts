import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

import { DualOverStyleModule } from './directives/over-style/dual-over-style.module';

import { NgxSidebarModule } from './components/sidebar/ngx-sidebar.module';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

export {
  DualOverStyleDirective,
  DualOverStyleModule
} from './directives/over-style';
export {
  NgxSidebarComponent,
  NgxSidebarModule
} from './components/sidebar'

@NgModule({
  imports: [
    CommonModule,
    DualOverStyleModule,
    NgxSidebarModule.forRoot()
  ],
  declarations: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
  ],
  exports: [
    SampleComponent,
    SampleDirective,
    SamplePipe,
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
