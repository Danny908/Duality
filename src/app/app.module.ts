import { NgxDualityModule, NgxOverStyleModule } from 'ngx-duality';

import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LogoComponent } from './logo/logo.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxDualityModule,
    NgxOverStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
