import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'dl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class DlHeaderComponent implements OnInit {
  @ViewChild('header') public header: ElementRef;
  @Input() position: string = 'static';
  @Input() height: string = '75px';
  constructor() { }

  ngOnInit() {
    this.setHeader();
  }

  setHeader(): void  {
    this.header.nativeElement.style.position = this.position;
    this.header.nativeElement.style.height = this.height;
  }

}
