import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgxDualityModule } from 'ngx-duality';

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
    NgxDualityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
