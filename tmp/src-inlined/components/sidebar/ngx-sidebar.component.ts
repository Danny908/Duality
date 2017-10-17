import {
  Component,
  OnInit,
  Output,
  OnChanges,
  NgZone,
  EventEmitter,
  Input,
  Renderer2,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { SideBar } from './types';

@Component({
  selector: 'ngx-sidebar',
  template: `
    <div [class.mobile]="screenSize <= 1100" [class.open]="toggle" [class.close]="!toggle" [ngStyle]="setBackDrop()" class="ngx-sidebar">
      <div [class.mobile]="screenSize <= 1100"  [ngClass]="handleContentClasses()" [ngStyle]="setContent()" class="sidebar-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .ngx-sidebar{height:100%;position:fixed;z-index:99}.ngx-sidebar.mobile.close{width:0%}.ngx-sidebar.mobile.open{width:100%}.ngx-sidebar .sidebar-content{height:inherit;position:absolute;overflow:hidden;transition:transform 0.3s ease-in-out}.ngx-sidebar .sidebar-content.mobile.left.close{transform:translateX(-100%)}.ngx-sidebar .sidebar-content.mobile.left.open{transform:translateX(0)}.ngx-sidebar .sidebar-content.mobile.right.close{transform:translateX(100%)}.ngx-sidebar .sidebar-content.mobile.right.open{transform:translateX(0)}
  `]
})

export class NgxSidebarComponent implements OnInit, OnChanges {
  @Input() public options: any;
  @Output() public isMobile = new EventEmitter<boolean>();
  public toggle = false;
  public defaultProps: SideBar = {
    animated: true,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    place: 'left',
    width: '300px',
    background: 'white',
    top: 0,
  };
  public screenSize: number;
  public mobile: boolean;
  public oldOptions: any;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private zone: NgZone
  ) {
      // LISTEN SCREEN SIZE
      this.screenSize = this.getScreenSize();
      renderer.listen('window', 'resize', (size) => {
        this.screenSize = size.target.innerWidth;
        this.getScreenType(this.screenSize);
      });
      // LISTEN CLICKS ON SIDEBAR COMPONENT
      el.nativeElement.addEventListener('click', (event: any) => {
        if (event.target['className'].includes('ngx-sidebar')) {
          this.onToggle(false);
        } else {
          event.stopPropagation();
        }
      });
  }

  public ngOnInit(): void {
    // INVERT VALUES TO EMIT AT FIRST LOAD
    if (this.screenSize <= 1100) {
      this.mobile = false;
    } else  {
      this.mobile = true;
    }
    this.getScreenType(this.screenSize);
    this.defaultProps = Object.assign(this.defaultProps, this.options);
    console.log('asigned');
    this.oldOptions = this.defaultProps;
  }

  public ngOnChanges(changes: any) {

    // LISTEN FOR CHANGES ON THE PARAMETERS
    console.log(JSON.stringify(changes.options.currentValue) , JSON.stringify(changes.options.previousValue));
    if (changes &&
        JSON.stringify(changes.options.currentValue) !==
        JSON.stringify(changes.options.previousValue)
      ) {
      this.defaultProps = Object.assign(this.defaultProps, this.options);
    }
  }

  // GET THE CURRENT SCREEN SIZE
  public getScreenSize(): number {
    return window.screen.width;
  }
  // EMITS IF SIDEBAR IT'S ON MOBILE OR DESCKTOP MODE
  public getScreenType(screenSize: number): void {
    if (screenSize <= 1100 && !this.mobile) {
      this.mobile = true;
      this.isMobile.emit(true);
    } else if (screenSize >= 1100 && this.mobile) {
      this.mobile = false;
      this.isMobile.emit(false);
    }
  }

// HANDLE CLASSES OF SIDEBAR
  public handleContentClasses(): string[] {
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
  public getPlace(): string {
    if (this.defaultProps.place) {
      return this.defaultProps.place;
    }
    return this.defaultProps.place;
  }
  // SET STYLE OF SIDEBAR'S BACKDROP
  public setBackDrop(): {} {
    return {
      top: this.defaultProps['top'],
      [this.getPlace()]: 0,
      backgroundColor: this.defaultProps.backdrop
    };
  }
  // SET STYLES OF SIDEBAR'S CONTAINER
  public setContent(): {} {
    const excludeParams = ['mobile', 'animated', 'backdrop', 'place', 'top'];
    const width = (): string => {
      if (!this.defaultProps.animated) {
        if (this.mobile && this.toggle) {
          return this.defaultProps.width;
        } else if (this.mobile && !this.toggle) {
          return '0';
        }
      }
      return this.defaultProps.width;
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
  // SHOW HIDE SIDEBAR
  public onToggle(status?: boolean): void {
    this.toggle = status ? status : !this.toggle;
  }
}
