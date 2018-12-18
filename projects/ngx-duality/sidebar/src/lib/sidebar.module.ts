import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar.component';
import { SidebarDirective } from './sidebar.directive';

@NgModule({
  declarations: [SidebarComponent, SidebarDirective],
  imports: [
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
