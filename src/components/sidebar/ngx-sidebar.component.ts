import { Component, OnInit, Renderer2, Input, Output, EventEmitter, } from '@angular/core';

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
        this.getScreenType(this.screenSize);
      });
  }

  ngOnInit(): void {
    this.getScreenType(this.screenSize);
  }

  getScreenSize(): number {
    return window.screen.width;
  }
  getScreenType(screen_size: number): void {
    console.log(screen_size);
    if (screen_size <= 1100) {
      this.isMobile.emit(true);
    } else {
      this.isMobile.emit(false);
    }
  }
}
