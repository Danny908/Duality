import { ElementRef, Inject, Injectable } from '@angular/core';

import { Window } from '../../core/types/types';

@Injectable()
export class NgxSidebarService {
  private swipeStatus  = {
    start : 0,
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
    // Drag mouse
    if (event.type === 'mousemove' && event.buttons === 1) {
      this.swipeStatus.dragged = true;
      return this.swipeDrag(position, true, event, sidebarRef, backdropRef);
    }
    // Release mouse
    if (event.type === 'mouseup' && this.swipeStatus.start > 0 && this.swipeStatus.dragged) {
      return this.swipeDrag(position, false, event, sidebarRef, backdropRef);
    }
    // Click sidebar backdrop
    if (event.type === 'click') {
      if (this.swipeStatus.dragged) {
        this.swipeStatus.dragged = false;
        return true;
      }
      return false;
    }
    return true;
    // PULL TOUCH
    // this.swipeTouch(event.type, event);
  }

  // Mouse drag geastures
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
          `translateX(${this.doTranslate(position, event)}px)`;

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
          console.log((desplaced * 100) / sideWidth, desplaced);
          if ((((desplaced * 100) / sideWidth - 100) ) < -55) {
            return false;
          }
        }
        break;
    }
    return true;
  }

  // Apply translation when swipe
  doTranslate(position: string, event: any): number {
    if (!this.swipeStatus.start ||
        position === 'left' && event.x > this.swipeStatus.start ||
        position !== 'left' && event.x < this.swipeStatus.start) {
          this.swipeStatus.start = event.x;
    } else {
      this.swipeStatus.start = this.swipeStatus.start;
    }

    if (position === 'left') {
      return -(this.swipeStatus.start - event.x) <= -1 ? -(this.swipeStatus.start - event.x) : 0;
    } else {
      return (event.x - this.swipeStatus.start) >= 0 ? event.x - this.swipeStatus.start : 0;
    }
  }

}
