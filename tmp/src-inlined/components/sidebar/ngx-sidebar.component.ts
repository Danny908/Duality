import {
  Component,
  OnInit,
  Output,
  OnChanges,
  EventEmitter,
  Input,
  Renderer2,
  ElementRef,
  Inject,
  ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { SideBar, Document } from '../../core/types/types';

@Component({
  selector: 'ngx-sidebar',
  template: `
    <!-- BACKDROP -->
    <div
      #backdrop
      [class.mobile]="screenSize <= 1100" 
      [class.open]="toggle && !defaultProps.animated" 
      [class.close]="!toggle && !defaultProps.animated"
      [class.anim-open]="toggle && defaultProps.animated"
      [class.anim-close]="!toggle && defaultProps.animated" 
      [ngStyle]="setBackDrop()"
      (click)="onSwipe($event)"
      (mousemove)="defaultProps.animated ? onSwipe($event): ''"
      (mouseup)="defaultProps.animated ? onSwipe($event): ''"
      (touchstart)="defaultProps.animated ? onSwipe($event): ''"
      (touchmove)="defaultProps.animated ? onSwipe($event): ''"
      (touchend)="defaultProps.animated ? onSwipe($event): ''"
      class="ngx-backdrop">
    </div>
    <!-- SIDEBAR -->
    <div 
      #sidebar
      [class.mobile]="screenSize <= 1100"
      [ngStyle]="setContent()"
      [ngClass]="handleContentClasses()"
      (mousemove)="defaultProps.animated ? onSwipe($event): ''"
      (mouseup)="defaultProps.animated ? onSwipe($event): ''"
      (touchstart)="defaultProps.animated ? onSwipe($event): ''"
      (touchmove)="defaultProps.animated ? onSwipe($event): ''"
      (touchend)="defaultProps.animated ? onSwipe($event): ''" 
      class="ngx-sidebar">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .ngx-backdrop{top:0;right:0;bottom:0;left:0;position:fixed;z-index:99;transition:opacity 0.4s ease-in-out, visibility 0.1s linear;transition-delay:0s, 0.5s;display:none}.ngx-backdrop.mobile{display:block;visibility:visible}.ngx-backdrop.mobile.close{opacity:0;transition:none;visibility:hidden}.ngx-backdrop.mobile.open{opacity:1;transition:none}.ngx-backdrop.mobile.anim-close{opacity:0;visibility:hidden;transition-delay:0s, 0.4s}.ngx-backdrop.mobile.anim-open{opacity:1;transition-delay:0.1s, 0s}.ngx-sidebar{height:100%;position:fixed;margin:0;padding:0;overflow-x:hidden;z-index:100;transition:transform 0.3s ease-in-out}.ngx-sidebar.left.close{transform:translateX(-100%)}.ngx-sidebar.left.open{transform:translateX(0)}.ngx-sidebar.right.close{transform:translateX(100%)}.ngx-sidebar.right.open{transform:translateX(0)}
  `]
})

export class NgxSidebarComponent implements OnInit, OnChanges {
  @ViewChild('sidebar') public sidebar: ElementRef;
  @ViewChild('backdrop') public backdrop: ElementRef;
  @Input() public options: any;
  @Output() public isMobile = new EventEmitter<boolean>();
  @Output() public isOpen = new EventEmitter<boolean>();
  toggle = true;
  screenSize: number;
  mobile: boolean;
  pointerX: any = {
    start : 0,
    end: 0,
    dragged: false
  };
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
  // SWIPE ANIMATION
  onSwipe(event: any): void {
    // PULL
    if (event.type === 'mousemove' && event.buttons === 1) {
      this.pointerX.dragged = true;
      this.swipeDrag(true, event);
    }
    // RELEASE
    if (event.type === 'mouseup' && this.pointerX.start > 0 && this.pointerX.dragged) {
      this.swipeDrag(false, event);
    }
    if (event.type === 'click') {
      if (this.pointerX.dragged) {
        this.pointerX.dragged = false;
        return;
      }
      this.swipeHide();
    }
  }

  swipeTouch(): void {

  } 

  swipeDrag(status: boolean, event: any): void {
    switch (status) {
      // SWIPE SIDEBAR
      case true:
        this.pointerX.start = !this.pointerX.start ? event.x : this.pointerX.start;
        this.sidebar.nativeElement.style.transition = 'none';
        this.sidebar.nativeElement.style.transform = this.defaultProps.place === 'left' ?
          `translateX(-${this.pointerX.start - event.x}px)` : `translateX(${0 + event.x}px)`;
          console.log('mouse axis x', this.pointerX.start);
        break;
      // RELEASE SIDEBAR
      case false:
        this.pointerX.start = 0;
        this.sidebar.nativeElement.style.removeProperty('transition');
        this.sidebar.nativeElement.style.removeProperty('transform');
        this.backdrop.nativeElement.style.removeProperty('opacity');

        const sidebarAxis = this.sidebar.nativeElement.getBoundingClientRect().x < 0 ?
        this.sidebar.nativeElement.getBoundingClientRect().x * -1 :
        this.sidebar.nativeElement.getBoundingClientRect().x;
        console.log('x axis', sidebarAxis);
        if ((sidebarAxis * 100) /  this.sidebar.nativeElement.getBoundingClientRect().width >= 55) {
          this.swipeHide();
        }
        break;
    }
  }

  swipeHide(): void {
    this.toggle = false;
    this.isOpen.emit(this.toggle);
  }
}
