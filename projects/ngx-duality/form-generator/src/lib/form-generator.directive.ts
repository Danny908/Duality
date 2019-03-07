import { Directive, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

import { InputComponent } from './input/input.component';
import { GroupComponent } from './group/group.component';

@Directive({
  selector: '[dualityFormGenerator]'
})
export class FormGeneratorDirective implements OnInit {
  @Input() field: FormField;
  @Input() group: FormGroup;
  @Input() controlName: string;
  @Input() options: boolean;
  component: ComponentRef<any>;
  components = {
    input: InputComponent,
    group: GroupComponent
  };
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const { tag } = this.field;
    const component = this.components[tag ? tag : 'input'];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.group = this.group;
    this.component.instance.field = this.field;
    this.component.instance.controlName = this.controlName;
    this.component.instance.options = this.options;
  }

}