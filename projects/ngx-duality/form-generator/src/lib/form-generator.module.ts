import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormGeneratorComponent } from './form-generator.component';
import { InputComponent } from './fields/input/input.component';
import { FormGeneratorDirective } from './form-generator.directive';
import { SelectComponent } from './fields/select/select.component';
import { TextareaComponent } from './fields/textarea/textarea.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormGeneratorComponent,
    InputComponent,
    FormGeneratorDirective,
    SelectComponent,
    TextareaComponent
  ],
  entryComponents: [
    InputComponent,
    SelectComponent,
    TextareaComponent
  ],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
