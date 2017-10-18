import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSidebarComponent } from './ngx-sidebar.component';

describe('NgxSidebarComponent', () => {
  let component: NgxSidebarComponent;
  let fixture: ComponentFixture<NgxSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSidebarComponent ]
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
    expect(compiled.querySelector('.ngx-sidebar').textContent).toBeTruthy();
  });

  it('should have a child \'div\' holding the content for the sidebar', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.sidebar-content').textContent).toBeTruthy();
  });

  it('should have a \'defaultProps\' object with default options for the sidebar', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.componentInstance.defaultProps;
    expect(compiled).toEqual(jasmine.any(Object));
  });

  it('should have a \'screenSize\' variable to storage the screen width', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.componentInstance.screenSize;
    expect(compiled).toEqual(jasmine.any(Number));
  });

  it('should have a \'mobile\' variable to storage the sidebar behavior', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.componentInstance.mobile;
    expect(compiled).not.toBeDefined();
  });

  it('should have a \'toggle\' variable to hide/show the sidebar', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    const compiled = fixture.componentInstance.toggle;
    expect(compiled).toBe(false);
  });

  it('should have \'getScreenSize()\' function that return the screen width', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.getScreenSize();
    expect(compiled).toEqual(jasmine.any(Number));
  });

  it('should have \'handleContentClasses()\' function that return the sidebar classes', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.handleContentClasses();
    expect(compiled).toEqual(jasmine.any(Array));
  });

  it('should have \'getPlace()\' function that return the sidebar position', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.getPlace();
    expect(compiled).toEqual(jasmine.any(String));
  });

  it('should have \'setBackDrop()\' function that return the backdrop style', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.setBackDrop();
    expect(compiled).toEqual(jasmine.any(Object));
  });

  it('should have \'setContent()\' function that return the sidebar content style', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.setContent();
    expect(compiled).toEqual(jasmine.any(Object));
  });

  it('\'mobile\' variable should get sidebar mode on init', () => {
    fixture = TestBed.createComponent(NgxSidebarComponent);
    fixture.detectChanges();
    const compiled = fixture.componentInstance.mobile;
    expect(compiled).toEqual(jasmine.any(Boolean));
  });

});
