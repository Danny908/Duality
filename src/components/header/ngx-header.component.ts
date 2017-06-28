import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'ngx-header',
    templateUrl: 'ngx-header.component.html',
    styleUrls: ['ngx-header.component.scss']
})
export class NgxHeaderComponent implements OnInit {
    @Input() fixed: boolean;
    @Input() height: number;
    constructor(
        private el: ElementRef
    ) {}

    ngOnInit(): void {
        this.setAttributes();
    }
    setAttributes(): void {
        if (this.fixed) {
            this.el.nativeElement.style.position = 'fixed';
            this.el.nativeElement.style.width = '100%';
            this.el.nativeElement.style.zIndex = 1000;
            this.el.nativeElement.style.height = `${this.height}px`;
        }
        if (this.height) {
            this.el.nativeElement.children[0].style.height = `${this.height}px`;
        }
  }
}
