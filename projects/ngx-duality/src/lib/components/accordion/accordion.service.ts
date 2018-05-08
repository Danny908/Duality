import { Injectable, Component } from '@angular/core';

import { DlAccordionTabComponent } from './accordion-tab/accordion-tab.component';

@Injectable()
export class AccordionService {
  private tabsRef: Array<DlAccordionTabComponent>;
  private oneAtTime: boolean;
  constructor() { }

  initTabs(tabs: Array<DlAccordionTabComponent>, oneAtTime: boolean, animated: boolean): void {
    this.tabsRef = tabs;
    this.oneAtTime = oneAtTime;
    tabs.forEach((tabRef, index) => {
      tabs[index].index = index;
      tabs[index].selected = false;
      tabs[index].animated = animated;
    });
  }
  updateTab(index: number): void {
    this.oneAtTime ? this.toggleAll(index) : this.toggleOne(index);
  }
  toggleOne(index: number):void {
    this.tabsRef[index].selected = !this.tabsRef[index].selected;
    this.tabsRef[index].showTab();
  }
  toggleAll(index: number): void {
    for(let i = 0; i < this.tabsRef.length; i++) {
      if(i === index)
        this.tabsRef[index].selected = !this.tabsRef[index].selected;
      else
        this.tabsRef[i].selected = false;
      this.tabsRef[i].showTab();
      this.tabsRef[i].isOpen.emit(this.tabsRef[i].selected);
    }
  }
}
