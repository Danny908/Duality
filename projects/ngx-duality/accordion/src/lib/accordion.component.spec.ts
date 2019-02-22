import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionComponent } from './accordion.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <duality-accordion
      header="Title 1"
      content="My text">
      <ng-template #dualityHeaderTemplate let-header>
        My custom {{header}}
      </ng-template>
      <ng-template #dualityContentTemplate let-content>
        My custom {{constent}}
      </ng-template>
    </duality-accordion>`
})
class MockComponent {}


describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  let mockFixture: ComponentFixture<MockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [ AccordionComponent, MockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockFixture = TestBed.createComponent(MockComponent);
    mockFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be wrapping the accordion element', () => {
    const dlAccordion = fixture.debugElement.query(By.css('div.dl-accordion'));
    expect(dlAccordion).toBeTruthy();
  });

  it('should be wrapping the header title', () => {
    const dlAccordionHeader = fixture.debugElement.query(By.css('div.dl-accordion-header'));
    expect(dlAccordionHeader).toBeTruthy();
  });

  it('should have a header', () => {
    const header = fixture.debugElement.query(By.css('h3'));
    expect(header).toBeTruthy();
  });

  it('should display the header on the screen', () => {
    component.header = 'MyHeader';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h3')).nativeElement.textContent.trim()).toBe(`${component.header}  ▶`);
  });

  it('should hide the original header if there is a custom header template', () => {
    component.headerTemplate = mockFixture.debugElement.children[0].componentInstance.headerTemplate;
    fixture.detectChanges();
    const header = fixture.debugElement.query(By.css('h3'));
    expect(header).toBeFalsy();
  });

  it('should have a wrapper for the accordion content', () => {
    const dlAccordionContent = fixture.debugElement.query(By.css('div.dl-accordion-content'));
    expect(dlAccordionContent).toBeTruthy();
  });

  it('should have content container', () => {
    const content = fixture.debugElement.query(By.css('div.dl-accordion-content > div'));
    expect(content).toBeTruthy();
  });

  it('should display the content on the screen', () => {
    component.content = 'MyContent';
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div.dl-accordion-content > div')).nativeElement.textContent.trim()).toBe(component.content);
  });

  it('should hide the original content if there is a custom content template', () => {
    component.contentTemplate = mockFixture.debugElement.children[0].componentInstance.contentTemplate;
    fixture.detectChanges();
    const content = fixture.debugElement.query(By.css('div.dl-accordion-content > div'));
    expect(content).toBeFalsy();
  });

  it(`should trigger toggle accordion's function`, async(() => {
    spyOn(component, 'toggle');
    const accordion = fixture.debugElement.nativeElement.querySelector('div.dl-accordion-header');
    accordion.click();
    fixture.whenStable().then(() => {
      expect(component.toggle).toHaveBeenCalled();
    });
  }));

  it(`should toggle accordion's open state between true & false`, async(() => {
    const isOpen = component.isOpen;
    component.toggle();
    fixture.detectChanges();
    expect(component.isOpen).not.toBe(isOpen);
  }));

  it('should lock the accordion if disabled option is true', async(() => {
    spyOn(component, 'toggle');
    const isOpen = component.isOpen;
    fixture.detectChanges();
    const disabledAccordion = fixture.debugElement.nativeElement.querySelector('div.dl-accordion-header');
    disabledAccordion.click();
    fixture.whenStable().then(() => {
      expect(disabledAccordion).toBeTruthy();
      expect(component.toggle).toHaveBeenCalled();
      expect(component.isOpen).toBe(isOpen);
    });
  }));

  it('should set disabled class to header if disbaled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h3.disabled'))).toBeTruthy();
  });

  it('should trigger the animation if animated is true', async(() => {
    spyOn(component, 'updateAnimation');
    const accordion = fixture.debugElement.nativeElement.querySelector('div.dl-accordion-header');
    accordion.click();
    fixture.whenStable().then(() => {
      expect(component.updateAnimation).toHaveBeenCalled();
    });
  }));

  it('should not trigger the animation if animated is false', async(() => {
    spyOn(component, 'updateAnimation');
    const accordion = fixture.debugElement.nativeElement.querySelector('div.dl-accordion-header');
    component.animated = false;
    accordion.click();
    fixture.whenStable().then(() => {
      expect(component.updateAnimation).not.toHaveBeenCalled();
    });
  }));

  it('should change the animation state if toggle is triggered', () => {
    expect(component.animationState).toBe('inactive');
    component.toggle();
    fixture.detectChanges();
    expect(component.animationState).toBe('active');
  });

  it('should allow add custom classes to header', () => {
    component.headerClass = ['custom', 'title'];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('h3.custom.title'))).toBeTruthy();
  });

  it('should allow add custom styles to header', () => {
    component.headerStyle = {
      color: 'red',
      width: '100%',
      fontSize: '16px'
    };
    fixture.detectChanges();
    const { styles } = fixture.debugElement.query(By.css('h3'));
    expect(styles).toEqual(component.headerStyle);
  });

  it('should allow add custom classes to content', () => {
    component.contentClass = ['custom', 'content'];
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('div.dl-accordion-content > div.custom.content'))).toBeTruthy();
  });

  it('should allow add custom styles to content', () => {
    component.contentStyle = {
      color: 'red',
      width: '100%',
      fontSize: '16px'
    };
    fixture.detectChanges();
    const { styles } = fixture.debugElement.query(By.css('div.dl-accordion-content > div'));
    expect(styles).toEqual(component.contentStyle);
  });

  it(`should emit if it's open or close`, () => {
    let isOpen: boolean;
    component.toggled.subscribe(status => isOpen = status);
    component.toggle();
    expect(isOpen).toBe(component.isOpen);
  });

});
