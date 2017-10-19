import { Component, OnInit, Input } from '@angular/core';

import { dashboard_page } from '../../assets/mock/app-values';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() mobile: boolean;
  private description = dashboard_page;
  constructor() { }

  ngOnInit() {
  }

}
