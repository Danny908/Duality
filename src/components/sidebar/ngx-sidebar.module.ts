import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxSidebarComponent } from './ngx-sidebar.component';
import { ScreenService } from '../../core/services/screen.service';

@NgModule({
  declarations: [NgxSidebarComponent],
  exports: [NgxSidebarComponent]
})
export class NgxSidebarModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxSidebarModule,
      providers: [ ScreenService ]
    };
  }
}
