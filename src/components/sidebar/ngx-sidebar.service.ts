import { ElementRef, Inject, Injectable } from '@angular/core';

import { Window } from '../../core/types/types';

@Injectable()
export class NgxSidebarService {
  private swipeStatus  = {
    start : 0,
    moved: 0,
    end: 0,
    dragged: false
  };
  constructor(@Inject('Window') private window: Window) {}
  // Return true if mobile, false if desktop
  screenType(screenSize: number, isMobile: boolean): boolean {
    if (screenSize <= 1100 && !isMobile) {
      return true;
    } else if (screenSize >= 1100 && isMobile) {
      return false;
    }
    return isMobile;
  }
   // Get the current screen size
   screenSize(): number {
    return window.screen.width;
  }

  // Swipe event listener
  swipe(position: string, event: any, sidebarRef: ElementRef, backdropRef: ElementRef): boolean {
    switch (event.type) {
      // Drag mouse
      case 'mousemove':
        if (event.buttons === 1) {
          this.swipeStatus.dragged = true;
          return this.swipeDrag(position, true, event, sidebarRef, backdropRef);
        }
        break;
      // Release mouse
      case 'mouseup':
        if (this.swipeStatus.start > 0 && this.swipeStatus.dragged) {
          return this.swipeDrag(position, false, event, sidebarRef, backdropRef);
        }
        break;
       // Click sidebar
      case 'click':
        if (this.swipeStatus.dragged) {
          this.swipeStatus.dragged = false;
          return true;
        }
        return false;
      // default: return true;
    }
    return true;
    // Touch gestures handler
    // return this.swipeTouch(position, event.type, event, sidebarRef, backdropRef);
  }

  // Mouse drag gestures
  swipeDrag(
    position: string,
    status: boolean,
    event: MouseEvent,
    sidebarRef: ElementRef,
    backdropRef: ElementRef
  ): boolean {
    switch (status) {
      // Drag sidebar
      case true:
        sidebarRef.nativeElement.style.transition = 'none';
        sidebarRef.nativeElement.style.transform =
          `translateX(${this.doTranslate(position, event.x)}px)`;
        break;
      // Release sidebar
      case false:
        this.swipeStatus.start = 0;
        sidebarRef.nativeElement.style.removeProperty('transition');
        sidebarRef.nativeElement.style.removeProperty('transform');
        backdropRef.nativeElement.style.removeProperty('opacity');

        const sidebarAxis = sidebarRef.nativeElement.getBoundingClientRect().x < 0 ?
        sidebarRef.nativeElement.getBoundingClientRect().x * -1 :
        sidebarRef.nativeElement.getBoundingClientRect().x;
        if (position === 'left') {
          if ((sidebarAxis * 100) /
            sidebarRef.nativeElement.getBoundingClientRect().width >= 55) {
              return false;
          }
        } else {
          const desplaced = backdropRef.nativeElement.getBoundingClientRect().width - sidebarAxis;
          const sideWidth = sidebarRef.nativeElement.getBoundingClientRect().width;
          if ((((desplaced * 100) / sideWidth - 100) ) < -55) {
            return false;
          }
        }
        break;
      default:
        return true;
    }
  }

  // Toch swipe gestures
  swipeTouch(position: string ,status: string, event: TouchEvent,  sidebarRef: ElementRef, backdropRef: ElementRef): boolean {
    switch (status) {
      case 'touchmove':
        // this.swipeStatus.start = event.changedTouches[0].clientX;
        sidebarRef.nativeElement.style.transition = 'none';
        sidebarRef.nativeElement.style.transform =
          `translateX(${this.doTranslate(position, event.changedTouches[0].clientX)}px)`;
        break;
      case 'touchend':
        this.swipeStatus.start = 0;
        sidebarRef.nativeElement.style.removeProperty('transition');
        sidebarRef.nativeElement.style.removeProperty('transform');
        backdropRef.nativeElement.style.removeProperty('opacity');

        const sidebarAxis = sidebarRef.nativeElement.getBoundingClientRect().x < 0 ?
        sidebarRef.nativeElement.getBoundingClientRect().x * -1 :
        sidebarRef.nativeElement.getBoundingClientRect().x;

        console.log(sidebarAxis);
        if (position === 'left') {
          if ((sidebarAxis * 100) /
            sidebarRef.nativeElement.getBoundingClientRect().width >= 55) {
              return false;
          }
        } else {
          const desplaced = backdropRef.nativeElement.getBoundingClientRect().width - sidebarAxis;
          const sideWidth = sidebarRef.nativeElement.getBoundingClientRect().width;
          if ((((desplaced * 100) / sideWidth - 100) ) < -55) {
            return false;
          }
        }
        break;
    }
  }

  // Apply translation when swipe
  doTranslate(position: string, movement: any): number {
    if (!this.swipeStatus.start ||
        position === 'left' && movement > this.swipeStatus.start ||
        position !== 'left' && movement < this.swipeStatus.start) {
          this.swipeStatus.start = movement;
    } else {
      this.swipeStatus.start = this.swipeStatus.start;
    }

    if (position === 'left') {
      return -(this.swipeStatus.start - movement) <= -1 ? -(this.swipeStatus.start - movement) : 0;
    } else {
      return (movement - this.swipeStatus.start) >= 0 ? movement - this.swipeStatus.start : 0;
    }
  }

}
