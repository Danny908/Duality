import { NgModule, ModuleWithProviders } from '@angular/core';

import { NgxSidebarComponent } from './ngx-sidebar.component';

@NgModule({
  declarations: [NgxSidebarComponent],
  exports: [NgxSidebarComponent]
})
export class NgxSidebarModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgxSidebarModule
    };
  }
}
