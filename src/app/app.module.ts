import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxSidebarModule, NgxOverStyleModule } from 'ngx-duality';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgxSidebarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
