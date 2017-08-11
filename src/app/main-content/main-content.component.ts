import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { main_page } from '../../assets/mock/app-values';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit, OnChanges {
  @Input() isMobile: boolean;
  private main_page = main_page;
  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {

  }

}
