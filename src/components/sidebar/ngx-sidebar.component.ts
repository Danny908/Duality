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
import { Document, SideBar } from '../../core/types/types';

import { DOCUMENT } from '@angular/platform-browser';
import { NgxSidebarService } from './ngx-sidebar.service';

@Component({
  selector: 'ngx-sidebar',
  templateUrl: 'ngx-sidebar.component.html',
  styleUrls: ['ngx-sidebar.component.scss']
})

export class NgxSidebarComponent implements OnInit, OnChanges {
  @ViewChild('sidebar') public sidebar: ElementRef;
  @ViewChild('backdrop') public backdrop: ElementRef;
  @Input() public options: {};
  @Output() public isMobile = new EventEmitter<boolean>();
  @Output() public isOpen = new EventEmitter<boolean>();
  public status: {[key: string]: any} = {
    isOpen: true,
    isMobile: false,
    screenSize: 0,
    prevMobile: -1
  };
  public defaultProps: SideBar = {
    animated: true,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    place: 'left',
    width: '300px',
    background: 'whitesmoke',
  };


  constructor(
    @Inject(DOCUMENT) private document: any,
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
    const excludeParams = ['mobile', 'animated', 'backdrop', 'place', 'top'];
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
    console.log(toggle);
    if (!toggle) {
      this.onToggle(false);
    }
  }
}
