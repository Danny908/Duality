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
  @ContentChild('dualityAccordionHeaderTemplate') dualityAccordionHeaderTemplate;
  @ContentChild('dualityAccordionContentTemplate') dualityAccordionContentTemplate;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter(false);
  @Input() header: string;
  @Input() content: string;
  @Input() disabled: boolean;
  @Input() headerClass: string | Array<string> | Object;
  @Input() headerStyle: Object;
  @Input() contentClass: string | Array<string> | Object;
  @Input() contentStyle: Object;
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
        this.updateAnimation();
      }
      if (this.oneAtTime && !group) {
        this.toggleGroup(this.index);
      }
    }
  }

  updateAnimation(): void {
    this.animationState =  this.isOpen ? 'active' : 'inactive';
  }

}
