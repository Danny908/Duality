import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  ViewChild
} from '@angular/core';
import { SideBar, Status } from '../../core/types/types';

import { NgxSidebarService } from './ngx-sidebar.service';

@Component({
  selector: 'ngx-sidebar',
  template: `
    <!-- BACKDROP -->
    <div
      #backdrop
      class="ngx-backdrop"
      [style.background]="defaultProps.backdrop"
      [class.mobile]="status.isMobile" 
      [class.open]="status.isOpen && !defaultProps.animated" 
      [class.close]="!status.isOpen && !defaultProps.animated"
      [class.anim-open]="status.isOpen && defaultProps.animated"
      [class.anim-close]="!status.isOpen && defaultProps.animated"
      (click)="onSwipe($event)"
      (mousemove)="checkSwipe() ? onSwipe($event): ''"
      (mouseup)="checkSwipe() ? onSwipe($event): ''"
      (touchstart)="checkSwipe() ? onSwipe($event): ''"
      (touchmove)="checkSwipe() ? onSwipe($event): ''"
      (touchend)="checkSwipe() ? onSwipe($event): ''">
    </div>
    <!-- SIDEBAR -->
    <div 
      #sidebar
      class="ngx-sidebar"
      [ngClass]="sidebarAnimatedClasses()"
      [ngStyle]="sidebarStyles()"
      [class.mobile]="status.isMobile"
      (mousemove)="checkSwipe() ? onSwipe($event): ''"
      (mouseup)="checkSwipe() ? onSwipe($event): ''"
      (touchstart)="checkSwipe() ? onSwipe($event): ''"
      (touchmove)="checkSwipe() ? onSwipe($event): ''"
      (touchend)="checkSwipe() ? onSwipe($event): ''">
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
  @Input() public options: {};
  @Output() public isMobile = new EventEmitter<boolean>();
  @Output() public isOpen = new EventEmitter<boolean>();
  public status: Status = {
    isOpen: true,
    isMobile: false,
    screenSize: 0,
    prevMobile: -1
  };
  public defaultProps: SideBar = {
    animated: true,
    draggable: true,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    place: 'left',
    width: '300px',
    background: 'whitesmoke',
  };

  constructor(
    private ngxSidebarService: NgxSidebarService,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {
      // Get screen size
      this.status.screenSize = this.ngxSidebarService.screenSize();
      this.status.isOpen = this.status.screenSize <= 1100 ? false : true;
      this.status.isMobile = this.status.isOpen;
      // Listen screen size
      renderer.listen('window', 'resize', (size) => {
        this.status.screenSize = size.target.innerWidth;
        this.status.isMobile =
          this.ngxSidebarService.screenType(this.status.screenSize, this.status.isMobile);
        this.status.prevMobile =
          this.status.prevMobile === -1 ? !this.status.isMobile : this.status.prevMobile ;
        if (this.status.prevMobile !== this.status.isMobile) {
          this.isMobile.emit(this.status.isMobile);
          this.status.prevMobile = this.status.isMobile;
        }
      });
  }

  ngOnInit(): void {
    // Get screen type onInit
    this.status.isMobile =
      this.ngxSidebarService.screenType(this.status.screenSize, this.status.isMobile);
    this.isMobile.emit(this.status.isMobile);
    // Mergue user options with default options
    this.defaultProps = Object.assign(this.defaultProps, this.options);
  }
  // Listen changes on input properties
  ngOnChanges(changes: any) {
    if (changes &&
        JSON.stringify(changes.options.currentValue) !==
        JSON.stringify(changes.options.previousValue)
      ) {
      this.defaultProps = Object.assign(this.defaultProps, this.options);
    }
  }

  // Set sidebar styles
  sidebarStyles(): {} {
    // Remove unnecessary styles and non-css properties
    const excludeParams = ['animated', 'draggable', 'backdrop', 'place', 'top'];
    const styles = Object.assign(
      {},
      this.options,
      this.dynamicStyles()
    );

    for (const param of excludeParams) {
      if (styles.hasOwnProperty(param)) {
        delete styles[param];
      }
    }
    return styles;
  }

   // Set dynamic sidebar styles
   dynamicStyles(): {[key: string]: any} {
    let position = '';
    let width = '';

    position = this.defaultProps.place === 'left' ? 'left' : 'right';
    if (!this.defaultProps.animated) {
      if (this.status.isOpen) {
        width = this.defaultProps.width;
      } else {
        width = '0';
      }
    } else {
      width = this.defaultProps['width'];
    }

    return {
      width,
      [position]: 0
    };
  }

  // Handle sidebar classes if animated
  sidebarAnimatedClasses(): string[] {
    const classes = [];
    if (this.defaultProps.animated) {
      if (this.defaultProps.place === 'left') {
        classes.push('left');
      } else {
        classes.push('right');
      }
      if (this.status.isOpen) {
        classes.push('open');
      } else {
        classes.push('close');
      }
    }
    return classes;
  }

  // Show-Hide sidebar
  onToggle(status?: boolean): void {
    this.status.isOpen = status ? status : !this.status.isOpen;
    this.isOpen.emit(this.status.isOpen);
  }

  // Event listener handler
  onSwipe(event: MouseEvent | TouchEvent) {
    const toggle =
      this.ngxSidebarService.swipe(
        this.defaultProps.place,
        event,
        this.sidebar,
        this.backdrop
      );
    if (!toggle) {
      this.onToggle(false);
    }
  }

  // Enable/Disable swipe
  checkSwipe(): boolean {
    console.log(this.defaultProps.animated,this.defaultProps.draggable);
    if (this.defaultProps.animated && this.defaultProps.draggable) {
      return true;
    } else {
      return false;
    }
  }
}
