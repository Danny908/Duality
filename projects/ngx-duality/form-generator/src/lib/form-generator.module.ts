import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FormGeneratorComponent } from './form-generator.component';
import { InputComponent } from './input/input.component';
import { FormGeneratorDirective } from './form-generator.directive';
import { GroupComponent } from './group/group.component';

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
  ],
  entryComponents: [
    GroupComponent,
    InputComponent,
  ],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
