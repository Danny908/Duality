import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class DlListComponent implements OnInit {
  @Input() listItems: Array<any>;
  @Input() param: string;
  @Input() columns: number = 1;
  @Input() ordered: boolean = false;
  @Input() value: string;
  @Input() type: string;
  @Input() icon: string;
  public colSize: number;
  constructor() { }

  ngOnInit() {
    this.colSize = 100 / this.columns;
  }

}
