import { Component, OnInit, Renderer2, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-sidebar',
  templateUrl: 'ngx-sidebar.component.html',
  styleUrls: ['ngx-sidebar.component.scss']
})
export class NgxSidebarComponent implements OnInit {
  @Input() toggle = false;
  @Output() isMobile: EventEmitter<boolean> = new EventEmitter();
  private screenSize: number;

  constructor(
    private renderer: Renderer2
  ) {
      this.screenSize = this.getScreenSize();
      renderer.listen('window', 'resize', size => {
        this.screenSize = size.target.innerWidth;
        if (this.screenSize <= 1100) {
          this.isMobile.emit(true);
        } else {
          this.isMobile.emit(false);
        }
      });
  }

  ngOnInit(): void { }

  getScreenSize(): number {
    return window.screen.width;
  }
}
