import { Component, OnInit, Renderer2, Input } from '@angular/core';

@Component({
  selector: 'ngx-sidebar',
  templateUrl: 'ngx-sidebar.component.html',
  styleUrls: ['ngx-sidebar.component.scss']
})
export class NgxSidebarComponent implements OnInit {
  @Input() toggle = false;
  private screenSize: number;

  constructor(
    private renderer: Renderer2
  ) {
      this.screenSize = this.getScreenSize();
      renderer.listen('window', 'resize', size => {
        this.screenSize = size.target.innerWidth;
      });
  }

  ngOnInit(): void { }

  getScreenSize(): number {
    return window.screen.width;
  }
}
