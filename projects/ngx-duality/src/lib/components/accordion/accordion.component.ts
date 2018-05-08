import { Component, OnInit, Input, AfterContentInit, ContentChildren } from '@angular/core';
import { AccordionService } from './accordion.service';
import { DlAccordionTabComponent } from './accordion-tab/accordion-tab.component';

@Component({
  selector: 'dl-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class DlAccordionComponent implements AfterContentInit {
  @ContentChildren(DlAccordionTabComponent) public tabsContent;
  @Input() oneAtTime: boolean = true;
  @Input() animated: boolean = true;
  constructor(
    private accordionService: AccordionService
  ) { }

  ngAfterContentInit() {
    this.createTabsController();
  }
  createTabsController(): void {
    this.accordionService.initTabs(this.tabsContent._results, this.oneAtTime, this.animated);
  }
}
