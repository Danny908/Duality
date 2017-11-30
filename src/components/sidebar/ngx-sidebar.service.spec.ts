import { TestBed, inject } from '@angular/core/testing';

import { ElementRef } from '@angular/core';
import { NgxSidebarService } from './ngx-sidebar.service';

class MockElementRef implements ElementRef {
  nativeElement = {
    removeProperty: {}
  };
}

describe('NgxSidebarService', () => {
  const windowMock: Window = window;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NgxSidebarService,
                  { provide: 'Window', useFactory: (() =>  windowMock )},
                  { provide: ElementRef, useClass: MockElementRef }
                  ]
    });
  });

  it('should create an instance of the service',
      inject([ NgxSidebarService ], (service: NgxSidebarService) => {
        expect(service).toBeTruthy();
  }));

  it('should have a screenType() function that return the type of the screen',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      expect(service.screenType).toBeDefined();
  }));

  it('screenType() function should return a boolean',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      const mockScreenSize = 1100;
      const mockisMobile = true;
      expect(service.screenType(mockScreenSize, mockisMobile)).toEqual(jasmine.any(Boolean));
  }));

  it('should have a screenSize() function that return the screen width on pixels',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      expect(service.screenSize).toBeDefined();
  }));

  it('screenSize() function should return a number',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      expect(service.screenSize()).toEqual(jasmine.any(Number));
  }));

  it('should have a swipe() function that handle all the event on the sidebar',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      expect(service.swipe).toBeDefined();
  }));

  it('swipe() function should return a boolean',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      const mockSwipeData = {
        position: 'left',
        event: {type: 'click'},
        sidebarRef: this,
        backdropRef: this
      };
      expect(service.swipe(
        mockSwipeData.position,
        mockSwipeData.event,
        mockSwipeData.sidebarRef,
        mockSwipeData.backdropRef
      )).toEqual(jasmine.any(Boolean));
  }));

  it('should have a doDrag() function that handle the translation of the sidebar',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      expect(service.doDrag).toBeDefined();
  }));

  it('should have a doDrop() function that handle the release of the sidebar',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      expect(service.doDrop).toBeDefined();
  }));

  it('should have a doTranslate() function that calculate hte movement of the sidebar',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      expect(service.doTranslate).toBeDefined();
  }));

  it('doTranslate() function should return a number',
    inject([ NgxSidebarService ], (service: NgxSidebarService) => {
      const mockDoTranslate = {
        position: 'left',
        movement: 40
      };
      expect(service.doTranslate(mockDoTranslate.position, mockDoTranslate.movement))
        .toEqual(jasmine.any(Number));
  }));
});
