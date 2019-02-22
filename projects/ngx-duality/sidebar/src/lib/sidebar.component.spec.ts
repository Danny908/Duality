import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { async, ComponentFixture, TestBed, fakeAsync, tick, inject } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ SidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(true).toBeTruthy();
  });

  it('should have a backdrop', () => {
    const backdrop = fixture.debugElement.query(By.css('div.dl-sidebar-backdrop'));
    expect(backdrop).toBeTruthy();
  });

  it('should have a sidebar', () => {
    const sidebar = fixture.debugElement.query(By.css('div.dl-sidebar'));
    expect(sidebar).toBeTruthy();
  });

  it('should detect if device is mobile', () => {
    customUserAgent();
    component.getDevice();
    fixture.detectChanges();
    const mobile = fixture.debugElement.query(By.css('div.dl-sidebar-backdrop.mobile'));
    restoreUserAgent();
    expect(mobile).toBeTruthy();
  });

  it('should detect sidebar open state', () => {
    component.open = false;
    component.toggle();
    fixture.detectChanges();
    const backdrop = fixture.debugElement.query(By.css('div.dl-sidebar-backdrop.open'));
    const sidebar = fixture.debugElement.query(By.css('div.dl-sidebar.open'));
    expect(backdrop).toBeTruthy();
    expect(sidebar).toBeTruthy();
  });

  it(`should trigger "toggle" function if backdrop is clicked`, async(() => {
    spyOn(component, 'toggle');
    const backdrop = fixture.debugElement.nativeElement.querySelector('div.dl-sidebar-backdrop');
    backdrop.click();
    fixture.whenStable().then(() => {
      expect(component.toggle).toHaveBeenCalled();
    });
  }));

  it(`should have "not-animated as class if animated is setted false`, () => {
    component.animated = false;
    fixture.detectChanges();
    const backdrop = fixture.debugElement.query(By.css('div.dl-sidebar-backdrop.not-animated'));
    const sidebar = fixture.debugElement.query(By.css('div.dl-sidebar.not-animated'));
    expect(backdrop).toBeTruthy();
    expect(sidebar).toBeTruthy();
  });

  it('should emit the sidebar status', () => {
    let status: {open: boolean, mobile: boolean};
    component.status.subscribe((st: {open: boolean, mobile: boolean}) => status = st);
    component.toggle();
    const { mobile, open} = component;
    expect(status).toEqual({open, mobile});
  });

  it('should apply styles based on sidebar position', () => {
    component.screenPosition = 'bottom';
    fixture.detectChanges();
    const sidebar = fixture.debugElement.query(By.css('div.dl-sidebar'));
    expect(sidebar.styles).toEqual(component.position);
  });

  it('should apply animation params', () => {
    component.screenPosition = 'top';
    fixture.detectChanges();
    const sidebar = fixture.debugElement.query(By.css('div.dl-sidebar'));
    const animationParams = sidebar.properties['@translate'].params;
    const { timing, animation } = component;
    const {x, y} = animation;
    expect(animationParams).toEqual({timing, x, y});
  });
});


function restoreUserAgent() {
  navigator['__defineGetter__']('userAgent', function() {
    return 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36';
  });
}

function customUserAgent() {
  navigator['__defineGetter__']('userAgent', function() {
    return 'Mozilla/5.0 (Linux; Android 9; PH-1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.99 Mobile Safari/537.36';
  });
}
