import {
  Component,
  OnInit,
  Output,
  OnChanges,
  EventEmitter,
  Input,
  Renderer2,
  ElementRef,
  Inject
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { SideBar, Document } from '../../core/types/types';

@Component({
  selector: 'ngx-sidebar',
  template: `
    <!-- BACKDROP -->
    <div 
      [class.mobile]="screenSize <= 1100" 
      [class.open]="toggle && !defaultProps.animated" 
      [class.close]="!toggle && !defaultProps.animated"
      [class.anim-open]="toggle && defaultProps.animated"
      [class.anim-close]="!toggle && defaultProps.animated" 
      [ngStyle]="setBackDrop()"
      class="ngx-backdrop">
    </div>
    <!-- SIDEBAR -->
    <div 
      [class.mobile]="screenSize <= 1100"
      [ngStyle]="setContent()"
      [ngClass]="handleContentClasses()" 
      class="ngx-sidebar">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .ngx-backdrop{top:0;right:0;bottom:0;left:0;position:fixed;z-index:99;transition:opacity 0.4s ease-in-out, visibility 0.1s linear;transition-delay:0s, 0.5s;display:none}.ngx-backdrop.mobile{display:block;visibility:visible}.ngx-backdrop.mobile.close{opacity:0;z-index:-1;transition:none;visibility:hidden}.ngx-backdrop.mobile.open{opacity:1;transition:none}.ngx-backdrop.mobile.anim-close{opacity:0;z-index:-1;visibility:hidden;transition-delay:0s, 0.4s}.ngx-backdrop.mobile.anim-open{opacity:1;transition-delay:0.1s, 0s}.ngx-sidebar{height:100%;position:fixed;margin:0;padding:0;overflow-x:hidden;z-index:100;transition:transform 0.3s ease-in-out}.ngx-sidebar.left.close{transform:translateX(-100%)}.ngx-sidebar.left.open{transform:translateX(0)}.ngx-sidebar.right.close{transform:translateX(100%)}.ngx-sidebar.right.open{transform:translateX(0)}
  `]
})

export class NgxSidebarComponent implements OnInit, OnChanges {
  @Input() public options: any;
  @Output() public isMobile = new EventEmitter<boolean>();
  @Output() public isOpen = new EventEmitter<boolean>();
  toggle = true;
  screenSize: number;
  mobile: boolean;
  defaultProps: SideBar = {
    animated: true,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    place: 'left',
    width: '300px',
    background: 'whitesmoke',
  };

  constructor(
    @Inject(DOCUMENT) private document: any,
    renderer: Renderer2,
    el: ElementRef,
  ) {
      // LISTEN SCREEN SIZE
      this.screenSize = this.getScreenSize();
      renderer.listen('window', 'resize', (size) => {
        this.screenSize = size.target.innerWidth;
        this.getScreenType(this.screenSize);
      });
      // LISTEN CLICKS ON SIDEBAR COMPONENT
      el.nativeElement.addEventListener('click', (event: any) => {
        if (event.target['className'].includes('ngx-backdrop')) {
          this.toggle = false;
          this.isOpen.emit(this.toggle);
        } else {
          event.stopPropagation();
        }
      });
  }

  ngOnInit(): void {
    // INVERT VALUES TO EMIT AT FIRST LOAD
    if (this.screenSize <= 1100) {
      this.mobile = false;
    } else  {
      this.mobile = true;
    }
    this.getScreenType(this.screenSize);
    this.defaultProps = Object.assign(this.defaultProps, this.options);
  }

  ngOnChanges(changes: any) {
    // LISTEN FOR CHANGES ON INPUT PARAMETERS
    if (changes &&
        JSON.stringify(changes.options.currentValue) !==
        JSON.stringify(changes.options.previousValue)
      ) {
      this.defaultProps = Object.assign(this.defaultProps, this.options);
    }
  }

  // GET THE CURRENT SCREEN SIZE
  getScreenSize(): number {
    if (window.screen.width <= 1100) {
      this.toggle = false;
    }
    return window.screen.width;
  }
  // EMITS IF SIDEBAR IT'S ON MOBILE OR DESCKTOP MODE
  getScreenType(screenSize: number): void {
    if (screenSize <= 1100 && !this.mobile) {
      this.mobile = true;
      this.isMobile.emit(true);
    } else if (screenSize >= 1100 && this.mobile) {
      this.mobile = false;
      this.isMobile.emit(false);
    }
  }

// HANDLE CLASSES OF SIDEBAR
  handleContentClasses(): string[] {
    const classes = [];
    if (this.defaultProps.animated) {
      if (this.defaultProps.place === 'left') {
        classes.push('left');
      } else {
        classes.push('right');
      }
      if (this.toggle) {
        classes.push('open');
      } else {
        classes.push('close');
      }
    }
    return classes;
  }
  // SET LEFT OR RIGHT POSITION OF SIDEBAR
  getPlace(): string {
    if (this.defaultProps.place === 'left') {
      return this.defaultProps.place;
    }
    return 'right';
  }
  // SET STYLE OF SIDEBAR'S BACKDROP
  setBackDrop(): {} {
    return {
      background: this.defaultProps.backdrop,
    };
  }
  // SET STYLES OF SIDEBAR'S CONTAINER
  setContent(): {} {
    const excludeParams = ['mobile', 'animated', 'backdrop', 'place', 'top'];
    const width = (): string => {
      if (!this.defaultProps.animated) {
        if (this.toggle) {
          return this.defaultProps['width'];
        } else {
          return '0';
        }
      }
      return this.defaultProps['width'];
    };

    const content = Object.assign(
      {},
      this.options,
      { width: width(),
        [this.getPlace()]: 0
      }
    );

    for (const param of excludeParams) {
      if (content.hasOwnProperty(param)) {
        delete content[param];
      }
    }

    return content;
  }
  // SHOW-HIDE SIDEBAR
  onToggle(status?: boolean): void {
    this.toggle = status ? status : !this.toggle;
    this.isOpen.emit(this.toggle);
  }
}
