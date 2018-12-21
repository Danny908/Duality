import { Directive, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

import { InputComponent } from './input/input.component';
import { GroupComponent } from './group/group.component';
import { SelectComponent } from './select/select.component';
import { TextAreaComponent } from './text-area/text-area.component';

@Directive({
  selector: '[dualityFormGenerator]'
})
export class FormGeneratorDirective implements OnInit {
  @Input() field: FormField;
  @Input() group: FormGroup;
  @Input() nested: boolean;
  component: ComponentRef<any>;
  components = {
    input: InputComponent,
    select: SelectComponent,
    textArea: TextAreaComponent,
    group: GroupComponent
  };
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const component = this.components[this.field.element];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.group = this.group;
    this.component.instance.field = this.field;
  }

}
