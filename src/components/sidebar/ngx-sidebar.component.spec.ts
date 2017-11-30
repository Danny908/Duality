import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { NgxSidebarComponent } from './ngx-sidebar.component';
import { NgxSidebarService } from './ngx-sidebar.service';
import { Status } from '../../core/types/types';

describe('NgxSidebarComponent', () => {
  let component: NgxSidebarComponent;
  let fixture: ComponentFixture<NgxSidebarComponent>;

  beforeEach(async(() => {
    const windowMock: Window = window;
    TestBed.configureTestingModule({
      declarations: [ NgxSidebarComponent ],
      providers: [ NgxSidebarService, {provide: 'Window', useFactory: (() =>  windowMock )} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the sidebar component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a parent \'div\' working as backdrop for the sidebar', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.ngx-backdrop').textContent).toBeTruthy();
  });

  it('should have a child \'div\' holding the content for the sidebar', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.ngx-sidebar').textContent).toBeTruthy();
  });

  it('should have a \'defaultProps\' object with default options for the sidebar', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.componentInstance.defaultProps;
    expect(compiled).toEqual(jasmine.any(Object));
  });

  it('should have a \'status\' obecjt to storage the states of the sidebar', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.componentInstance.status;
    expect(compiled).toEqual(jasmine.any(Object));
  });

  it('should have \'sidebarAnimatedClasses()\' function that return the sidebar classes', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.sidebarAnimatedClasses();
    expect(compiled).toEqual(jasmine.any(Array));
  });

  it('should have \'dynamicStyles()\' function that return the sidebar position and width', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.dynamicStyles();
    expect(compiled).toEqual(jasmine.any(Object));
  });

  it('should have \'sidebarStyles()\' function that return the sidebar content style', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.sidebarStyles();
    expect(compiled).toEqual(jasmine.any(Object));
  });

  it('\'mobile\' variable should get sidebar mode on init', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.status.isMobile;
    expect(compiled).toEqual(jasmine.any(Boolean));
  });

});
