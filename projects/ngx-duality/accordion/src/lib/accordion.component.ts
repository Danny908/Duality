import { Component, Input, Output, ContentChild, EventEmitter, OnInit } from '@angular/core';
import { Expand } from '@ngx-duality/animations';
// import { Expand } from './expand';

@Component({
  selector: 'duality-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [Expand],
})
export class AccordionComponent {
  @ContentChild('dualityHeaderTemplate') headerTemplate;
  @ContentChild('dualityContentTemplate') contentTemplate;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter(false);
  @Input() header: string;
  @Input() content: string;
  @Input() disabled: boolean;
  @Input() headerClass: any;
  @Input() headerStyle: any;
  @Input() contentClass: any;
  @Input() contentStyle: any;
  @Input() timing = '200ms ease-in-out';
  @Input() animated = true;
  animationState = 'hide';
  isOpen: boolean;
  index: number;
  oneAtTime: boolean;
  toggleGroup: Function;

  toggle(group?: boolean): void {
    this.isOpen = !this.isOpen;
    this.toggled.emit(this.isOpen);
    if (this.animated) {
      this.animationState = this.doAnimation();
    }
    if (this.oneAtTime && !group) {
      this.toggleGroup(this.index);
    }
  }

  doAnimation(): string {
    return this.isOpen ? 'show' : 'hide';
  }

}
