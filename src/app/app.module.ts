import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxHeaderComponent } from 'ngx-duality';
import { NgxFooterComponent } from 'ngx-duality';
// import { DualOverStyleModule } from 'ngx-duality';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NgxHeaderComponent,
    NgxFooterComponent,
    LogoComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // DualOverStyleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
