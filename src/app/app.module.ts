import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AccordionModule } from '@ngx-duality/accordion';
// import { FormGeneratorModule } from '@ngx-duality/form-generator';
import { Expand } from '@ngx-duality/animations';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AccordionModule,
    // FormGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
