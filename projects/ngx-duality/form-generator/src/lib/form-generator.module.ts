import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormGeneratorComponent } from './form-generator.component';
import { InputComponent } from './input/input.component';
import { FormGeneratorDirective } from './form-generator.directive';
import { GroupComponent } from './group/group.component';
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './text-area/text-area.component';

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
    GroupComponent,
    SelectComponent,
    TextAreaComponent
  ],
  entryComponents: [
    GroupComponent,
    InputComponent,
    SelectComponent,
    TextAreaComponent
  ],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
