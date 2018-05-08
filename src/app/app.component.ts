import { Component, OnInit, ViewChild, ChangeDetectorRef, Renderer2, ElementRef } from '@angular/core';
import { DlSidebarComponent  } from 'ngx-duality';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  @ViewChild('toggle') toggle: DlSidebarComponent;
  @ViewChild('wrapper') wrapper: ElementRef;
  isopen: boolean;
  ismobile: boolean;
  backgroundColor = 'rgb(40, 40, 40)';
  styles = { 
      color: 'rgba(255, 255, 255, 0.6)',
      top: '57px',
      boxShadow: '5px 0 5px rgba(0, 0, 0, 0.5)'
  }
  scrollFix = {
    top: 57,
    lastScrollTop: 0
  }
  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
  }
  ngOnInit() {
  }
  handleMobile(event: boolean): void {
    this.ismobile = event;
      if(event)
        setTimeout(_ => {
          this.styles.top = '0';
        }, 300);
      else
        this.styles.top = '57px';
  }
  handleOpen(event: boolean): void {
    this.isopen = event;
    this.cdr.detectChanges();
  }
}
