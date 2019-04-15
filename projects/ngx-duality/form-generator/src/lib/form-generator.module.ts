import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormGeneratorComponent } from './form-generator.component';
import { InputComponent } from './fields/input/input.component';
import { FormGeneratorDirective } from './form-generator.directive';
import { SelectComponent } from './fields/select/select.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { RadioComponent } from './fields/radio/radio.component';
import { CheckboxComponent } from './fields/checkbox/checkbox.component';

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
    TextareaComponent,
    RadioComponent,
    CheckboxComponent
  ],
  entryComponents: [
    InputComponent,
    SelectComponent,
    TextareaComponent,
    RadioComponent,
    CheckboxComponent
  ],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
