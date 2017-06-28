import { Component, OnInit, Input, ElementRef } from '@angular/core';

@Component({
    selector: 'ngx-footer',
    templateUrl: 'ngx-footer.component.html',
    styleUrls: ['ngx-footer.component.scss']
})
export class NgxFooterComponent implements OnInit {
    @Input() fixed: boolean;
    @Input() height: number;
    @Input() color: string;
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
            this.el.nativeElement.style.bottom = 0;
            this.el.nativeElement.style.height = `${this.height}px`;
            this.el.nativeElement.style.backgroundColor = this.color;
        }
        if (this.height) {
            this.el.nativeElement.children[0].style.height = `${this.height}px`;
            this.el.nativeElement.children[0].style.backgroundColor = this.color;
        }
  }
}
