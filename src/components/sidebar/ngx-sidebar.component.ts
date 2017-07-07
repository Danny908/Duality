import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';


@Component({
  selector: 'ngx-sidebar',
  templateUrl: 'ngx-sidebar.component.html',
})
export class NgxSidebarComponent implements OnInit {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.el.nativeElement.classList.add('ngx-sidebar');

    this.renderer.listen('window', 'resize', size => {
      console.log(size.target.innerWidth);
    });
  }
}
