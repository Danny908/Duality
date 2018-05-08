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
  ViewChild,
  SimpleChanges
} from '@angular/core';
import { SideBar, Status } from '../../core/types/types';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'dl-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})

export class DlSidebarComponent implements OnInit, OnChanges {
  @ViewChild('sidebarRef') private sidebarRef: ElementRef;
  @ViewChild('backdropRef') private backdropRef: ElementRef;
  @Output() private isMobile = new EventEmitter<boolean>();
  @Output() private isOpen = new EventEmitter<boolean>();
  @Input() public animated: boolean = true;
  @Input() public draggable: boolean = true;
  @Input() public backdrop: string = 'rgba(0, 0, 0, 0.5)';
  @Input() public place: string = 'left';
  @Input() public width: string = '300px';
  @Input() public background: string = 'whitesmoke';
  @Input() public mobile: number = 950;
  @Input() public sidebarStyle: Object;
  public status: Status = {
    isOpen: true,
    isMobile: false,
    screenSize: 0,
    prevMobile: -1
  };

  constructor(
    private sidebarService: SidebarService,
    private renderer: Renderer2,
  ) {
      // Get screen size
      this.status.screenSize = this.sidebarService.screenSize();
      this.status.isOpen = this.status.screenSize <= this.mobile ? false : this.status.isOpen;
      // Get screen type onInit
      this.status.isMobile =
        this.sidebarService.screenType(this.status.screenSize, this.status.isMobile, this.mobile);
  }

  ngOnInit() {
    console.log(this.background);
    this.initSidebar();
  }
  // Listen changes on input properties
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes, 'dsf');
  }

  // Set sidebar styles
  sidebarStyles(): {} {
    // Remove unnecessary styles and non-css properties
    const styles = Object.assign(
      {},
      {
        'width':this.width,
        'background': this.background
      },
      this.sidebarStyle,
      this.dynamicStyles()
    );
    return styles;
  }

   // Set dynamic sidebar styles
   dynamicStyles(): {[key: string]: any} {
    let position = '';
    let width = '';

    position = this.place === 'left' ? 'left' : 'right';
    if (!this.animated) {
      if (this.status.isOpen) {
        width = this.width;
      } else {
        width = '0';
      }
    } else {
      width = this.width;
    }

    return {
      width,
      [position]: 0
    };
  }

  // Handle sidebar classes if animated
  sidebarAnimatedClasses(): string[] {
    const classes = [];
    if (this.animated) {
      if (this.place === 'left') {
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
      this.sidebarService.swipe(
        this.place,
        event,
        this.sidebarRef,
        this.backdropRef
      );
    if (!toggle) {
      this.onToggle(false);
    }
  }

  // Enable/Disable swipe
  checkSwipe(): boolean {
    if (this.animated && this.draggable && this.status.isMobile) {
      return true;
    } else {
      return false;
    }
  }
  // Init sidebar
  initSidebar(): void {
    // WORKAROUND: Avoid "ExpressionHasChangedAfterItWasChecked".
    this.isMobile.emit(this.status.isMobile);
    this.isOpen.emit(this.status.isOpen);
    // Listen resize event
    this.resizeListener();
  }

  resizeListener() {
    this.renderer.listen('window', 'resize', (size) => {
      this.status.screenSize = size.target.innerWidth;
      this.status.isMobile =
        this.sidebarService.screenType(this.status.screenSize, this.status.isMobile, this.mobile);
      this.status.prevMobile =
        this.status.prevMobile === -1 ? !this.status.isMobile : this.status.prevMobile ;
      if (this.status.prevMobile !== this.status.isMobile) {
        this.isMobile.emit(this.status.isMobile);
        this.status.isOpen = this.status.screenSize <= this.mobile ? false : true;
        this.isOpen.emit(this.status.isOpen);
        this.status.prevMobile = this.status.isMobile;
      }
    });
  }
}
