import { Directive, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormField } from '@ngx-duality/types';

import { InputComponent } from './input/input.component';
import { GroupComponent } from './group/group.component';

@Directive({
  selector: '[dualityFormGenerator]'
})
export class FormGeneratorDirective implements OnInit {
  @Input() field: any;
  @Input() group: FormGroup;
  @Input() controlName: string;
  component: ComponentRef<any>;
  components = {
    input: InputComponent,
    group: GroupComponent
  };
  defaultComponent = 'input';
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    const { isGroup } = this.field;
    this.defaultComponent = isGroup ? 'group' : this.defaultComponent;
    const component = this.components[this.defaultComponent];
    const factory = this.resolver.resolveComponentFactory<any>(component);
    this.component = this.container.createComponent(factory);
    this.component.instance.group = this.group;
    this.component.instance.field = this.field;
    this.component.instance.controlName = this.controlName;
  }

}
