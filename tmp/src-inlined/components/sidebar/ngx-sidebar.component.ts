import { Component, OnInit, OnChanges, Input, Renderer2 } from '@angular/core';

import { SideBar } from './types';

@Component({
  selector: 'ngx-sidebar',
  template: `
    <div [ngStyle]="setBackDrop()" class="ngx-backdrop"[class]="options.mobile">
      <div [ngStyle]="setContent()">
        <ng-content></ng-content>
      </div>
    </div>
  `
})

export class NgxSidebarComponent implements OnInit, OnChanges {
  @Input() public onToggle = false;
  @Input() public options: any;
  public defaultProps: SideBar = {
    mobile: false,
    animated: true,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    place: 'left',
    width: '300px',
    height: '100%',
    position: 'absolute',
    background: 'white',
    top: 0,
  };
  public screenSize: number;

  constructor(
    private renderer: Renderer2
  ) {
      this.screenSize = this.getScreenSize();
      renderer.listen('window', 'resize', (size) => {
        this.screenSize = size.target.innerWidth;
        this.getScreenType(this.screenSize);
      });
  }

  public ngOnInit(): void {
    this.getScreenType(this.screenSize);
    this.options = Object.assign(
      this.defaultProps,
      this.options,
      { [this.getPlace()]: 0 }
    );
    console.log(this.setContent());
  }

  public ngOnChanges(change: any): void {
    // VOID
  }
  public getPlace(): string {
    if (this.options.place) {
      return this.options.place;
    }
    return this.defaultProps.place;
  }

  public setBackDrop(): {} {
    return {
      width: this.defaultProps.mobile && this.onToggle ? '100%' : '0',
      height: '100%',
      position: 'fixed',
      zIndex: 999,
      top: this.options['top'],
      [this.getPlace()]: 0,
      overflow: 'hidden',
      backgroundColor: this.options.backdrop
    };
  }

  public setContent(): {} {
    const excludeParams = ['mobile', 'animated', 'backdrop', 'place', 'top'];
    const width = (): string => {
      if (this.defaultProps.mobile && this.onToggle ||
          !this.defaultProps.mobile) {
        return this.options.width;
      } else {
        return '0px';
      }
    };

    const content = Object.assign(
      {},
      this.options,
      { width: width() });

    for (const param of excludeParams) {
      if (content.hasOwnProperty(param)) {
        delete content[param];
      }
    }

    console.log(this.onToggle , content);

    return content;
  }

  public getScreenSize(): number {
    return window.screen.width;
  }
  public getScreenType(screenSize: number): void {
    if (screenSize <= 1100) {
      this.defaultProps.mobile = true;
    } else {
      this.defaultProps.mobile = false;
    }
  }
}
