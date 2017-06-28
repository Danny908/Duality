import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

import { DualOverStyleModule } from './over-style/dual-over-style.module';
import { NgxHeaderModule } from './components/header/ngx-header.module';
import { NgxFooterModule } from './components/footer/ngx-footer.module';

export * from './sample.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';

export {
  DualOverStyleDirective,
  DualOverStyleModule
} from './over-style';

export {
  NgxHeaderComponent,
  NgxHeaderModule
} from './components/header'

export {
  NgxFooterComponent,
  NgxFooterModule
} from './components/footer'

@NgModule({
  imports: [
    CommonModule,
    DualOverStyleModule,
    NgxHeaderModule,
    NgxFooterModule
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
