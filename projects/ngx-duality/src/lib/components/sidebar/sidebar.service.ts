import { ElementRef, Inject, Injectable } from '@angular/core';

import { Window } from '../../core/types/types';

@Injectable()
export class SidebarService {
  private swipeStatus  = {
    start : 0,
    dragged: false
  };
  constructor(@Inject('Window') private window: Window) {}
  // Return true if mobile, false if desktop
  screenType(screenSize: number, isMobile: boolean, mobile: number): boolean {
    if (screenSize <= mobile && !isMobile) {
      return true;
    } else if (screenSize >= mobile && isMobile) {
      return false;
    }
    return isMobile;
  }
  // Get the current screen size
  screenSize(): number {
    return window.innerWidth;
  }
  // Swipe event listener
  swipe(position: string, event: any, sidebarRef: ElementRef, backdropRef: ElementRef): boolean {
    switch (event.type) {
      // Drag element with mouse
      case 'mousemove':
        if (event.buttons === 1) {
          this.swipeStatus.dragged = true;
          this.doDrag(sidebarRef, position, event.x);
        }
        return true;
      // Drop element with mouse
      case 'mouseup':
        if (this.swipeStatus.start > 0 && this.swipeStatus.dragged) {
          return this.doDrop(sidebarRef, backdropRef, position);
        }
        return true;
      // Click sidebar
      case 'click':
        if (this.swipeStatus.dragged) {
          this.swipeStatus.dragged = false;
          return true;
        }
        return false;
      // Drag element touch
      case 'touchmove':
        this.doDrag(sidebarRef, position, event.changedTouches[0].clientX);
        return true;
      // Drop element touch
      case 'touchend':
        return this.doDrop(sidebarRef, backdropRef, position);
      default:
        return true;
    }
  }
  // Drag sidebar
  doDrag(sidebarRef: ElementRef, position: string, movement: number): void {
    sidebarRef.nativeElement.style.transition = 'none';
    sidebarRef.nativeElement.style.transform =
      `translateX(${this.doTranslate(position, movement)}px)`;
  }
  // Drop sidebar
  doDrop(sidebarRef: ElementRef, backdropRef: ElementRef, position: string): boolean {
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
    return true;
  }
  // Apply translation when swipe
  doTranslate(position: string, movement: number): number {
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
