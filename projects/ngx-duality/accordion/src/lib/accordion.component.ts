import { Component, Input, Output, ContentChild, EventEmitter } from '@angular/core';
import { Expand, Rotate } from '@ngx-duality/animations';
// import { Expand } from './expand';

@Component({
  selector: 'duality-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [Expand, Rotate],
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
  @Input() expandTiming = '200ms ease-in-out';
  @Input() rotateTiming = '150ms ease-in-out';
  @Input() animated = true;
  animationState = 'inactive';
  rotateState = 'inactive';
  isOpen: boolean;
  index: number;
  oneAtTime: boolean;
  toggleGroup: Function;

  toggle(group?: boolean): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      this.toggled.emit(this.isOpen);
      if (this.animated) {
        this.animationState = this.doAnimation();
      }
      if (this.oneAtTime && !group) {
        this.toggleGroup(this.index);
      }
    }
  }

  doAnimation(): string {
    return this.isOpen ? 'active' : 'inactive';
  }

}
