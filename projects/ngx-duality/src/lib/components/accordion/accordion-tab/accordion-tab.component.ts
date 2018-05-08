import { Component, OnInit, Input, Output, ElementRef, ViewChild, AfterViewInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { AccordionService } from '../accordion.service';

@Component({
  selector: 'dl-accordion-tab',
  templateUrl: './accordion-tab.component.html',
  styleUrls: ['./accordion-tab.component.scss']
})
export class DlAccordionTabComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() header: string;
  @Input() height: any = 50;
  @Input() tabDisabled: boolean = false;
  @Input() tabActive: boolean = false;
  @Output() isOpen = new EventEmitter(false);
  @ViewChild('tabContent') tabContent: ElementRef;
  public index: number;
  public selected: boolean = false;
  public animated: boolean = false;
  public tempHeight;
  private contentHeight: number;
  private indexRef: Array<boolean>;
  constructor(
    private el: ElementRef,
    private accordionService: AccordionService
  ) {}

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if(changes.tabActive && changes.tabActive.currentValue !== changes.tabActive.previousValue && !this.tabDisabled && this.index > -1) {
      this.selectTab();
    }
  }
  ngAfterViewInit() {
    this.getTabHeight();
  }

  getTabHeight(): void {
    if(typeof this.height === 'string')
      this.height = parseInt(this.height, 10);
    this.contentHeight = this.tabContent.nativeElement.offsetHeight;
    this.tempHeight = this.height;
  }

  selectTab(): void {
    this.accordionService.updateTab(this.index);
  }

  showTab() {
    if(this.selected) {
      this.height = (this.contentHeight + this.tempHeight);
    } else {
      this.height = this.tempHeight;
    }
  }
}
