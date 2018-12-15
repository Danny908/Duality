import { NgModule } from '@angular/core';
import { FormGeneratorComponent } from './form-generator.component';
import { FormGeneratorDirective } from './form-generator.directive';

@NgModule({
  declarations: [FormGeneratorComponent, FormGeneratorDirective],
  imports: [
  ],
  exports: [FormGeneratorComponent]
})
export class FormGeneratorModule { }
