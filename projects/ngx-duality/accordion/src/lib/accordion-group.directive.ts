import { Directive, QueryList, ContentChildren, Input, Output, AfterContentInit, EventEmitter } from '@angular/core';
import { AccordionComponent } from './accordion.component';

@Directive({
  selector: '[dualityAccordionGroup]',
  exportAs: 'dualityAccordionGroup'
})
export class AccordionGroupDirective implements AfterContentInit {
  @ContentChildren(AccordionComponent) accordions: QueryList<AccordionComponent>; //*
  @Output() toggled: EventEmitter<boolean[]> = new EventEmitter();
  @Input() oneAtTime: boolean; //*
  @Input() timing = '200ms ease-in-out'; //*
  @Input() animated = true; //*
  // Manually toggle a tab accordion
  toggle: Function = this.toggleTab; //*
  toggleStatus: boolean[]; //*

  ngAfterContentInit() {
    this.accordions.forEach((accordion, index) => {
      accordion.index = index;
      accordion.oneAtTime = this.oneAtTime;
      accordion.timing = this.timing;
      accordion.animated = this.animated;
      accordion.toggleGroup = this.toggleGroup.bind(this);
    });
    this.toggleStatus = new Array(this.accordions.length).fill(false);
  }

  toggleGroup(index: number): void {
    this.accordions.forEach((accordion, i) => {
      if (index !== i && accordion.isOpen) {
        accordion.toggle(true);
        this.toggleStatus[i] = !!accordion.isOpen;
      }
    });
  }

  toggleTab(index: number): any {
    this.accordions['_results'][index].toggle();
    this.toggleStatus[index] = !!this.accordions['_results'][index].isOpen;
    if (this.oneAtTime) {
      this.toggleGroup(index);
    }
    this.toggled.emit(this.toggleStatus);
  }

}
