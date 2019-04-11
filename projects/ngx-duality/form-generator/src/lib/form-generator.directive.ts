import { Directive, Input, ComponentFactoryResolver, ComponentRef, ViewContainerRef, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

// import { InputComponentOld } from './input/input.component';
// import { GroupComponent } from './group/group.component';

@Directive({
  selector: '[dualityFormGenerator]'
})
export class FormGeneratorDirective implements OnInit {
  @Input() field: any;
  @Input() group: FormGroup;
  @Input() controlName: string;
  @Input() isGroup: boolean;
  component: ComponentRef<any>;
  components = {
    input: '',
    // group: GroupComponent
  };
  defaultComponent = 'input';
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {
    // this.defaultComponent = !!this.field.group ? 'group' : this.defaultComponent;
    // const component = this.components[this.defaultComponent];
    // const factory = this.resolver.resolveComponentFactory<any>(component);
    // this.component = this.container.createComponent(factory);
    // this.component.instance.group = this.group;
    // this.component.instance.field = this.field;
    // this.component.instance.controlName = this.controlName;
    // this.component.instance.isGroup = this.isGroup;
  }

}
