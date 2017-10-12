import { Component, OnInit, Input, Output, EventEmitter, Renderer2 } from '@angular/core';

import { SideBar } from './types';

@Component({
  selector: 'ngx-sidebar',
  template: `
    <div [ngStyle]="setBackDrop()" class="ngx-backdrop">
      <div [ngStyle]="options">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    @media screen and (max-width: 1100px){.ngx-backdrop{width:100%}}
  `]
})

export class NgxSidebarComponent implements OnInit {
  @Input() public options: SideBar;
  public defaultProps: SideBar = {
    toogle: false,
    mobile: false,
    animation: true,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    place: 'left',
    width: '300px',
    height: '100%',
    position: 'absolute',
    background: 'white',
    top: 0,
  };

  @Output() public isMobile: EventEmitter<boolean> = new EventEmitter();
  public screenSize: number;

  constructor(
    private renderer: Renderer2
  ) {
      this.screenSize = this.getScreenSize();
      renderer.listen('window', 'resize', size => {
        this.screenSize = size.target.innerWidth;
        this.getScreenType(this.screenSize);
      });
  }

  public ngOnInit(): void {
    // this.getScreenType(this.screenSize);
    this.options = Object.assign(
      this.defaultProps,
      this.options,
      { [this.getPlace()]: 0 }
    );
  }

  public setBackDrop() {
    console.log('after', this.options);
    const width = (): string => {
      if (this.options.mobile) {
        if (!this.options.toogle) {
          return '0';
        }
        return '100%';
      }
      return '0';
    };

    return {
      width: width(),
      height: '100%',
      position: 'fixed',
      zIndex: 999,
      top: 0,
      [this.getPlace()]: 0,
      backgroundColor: this.options.backdrop
    };
  }

  public getPlace(): string {
    if (this.options.place) {
      return this.options.place;
    }
    return this.defaultProps.place;
  }

  public getScreenSize(): number {
    return window.screen.width;
  }
  public getScreenType(screen_size: number): void {
    if (screen_size <= 1100) {
      this.isMobile.emit(true);
    } else {
      this.isMobile.emit(false);
    }
  }
}