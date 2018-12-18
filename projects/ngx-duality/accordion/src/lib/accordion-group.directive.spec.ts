import { Component, ElementRef, ViewChild } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AccordionGroupDirective } from './accordion-group.directive';
import { AccordionComponent } from './accordion.component';

@Component({
  template: `
  <div dualityAccordionGroup #directive='dualityAccordionGroup'>
    <duality-accordion
      header="Title 1"
      content="My text">
    </duality-accordion>
    <duality-accordion
      header="Title 2"
      content="My text">
    </duality-accordion>
  </div>`
})
class TestComponent {
  @ViewChild(AccordionGroupDirective) directive: AccordionGroupDirective;
  constructor(private el: ElementRef) {

  }
}

describe('AccordionGroupDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ BrowserAnimationsModule ],
      declarations: [
        TestComponent,
        AccordionGroupDirective,
        AccordionComponent
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(`should get an instance of accordion group childrens`, () => {
    const { accordions } = component.directive;
    accordions.forEach(accordion => {
      expect(accordion).toEqual(jasmine.any(AccordionComponent));
    });
  });

  it(`should inherit properties to child components`, () => {
    const { oneAtTime, expandTiming, rotateTiming, animated, toggleGroup, accordions } = component.directive;
    const props = {
      oneAtTime,
      expandTiming,
      rotateTiming,
      animated,
      toggleGroup
    };
    accordions.forEach(accordion => {
      Object.keys(props).forEach(key => {
        expect(JSON.stringify(accordion[key])).toBe(JSON.stringify(props[key]));
      });
    });
  });

  it('should populate dinamically toggleStatus based on number of children component', () => {
    const { accordions, toggleStatus } = component.directive;
    expect(toggleStatus.length).toBe(accordions.length);
    toggleStatus.forEach(status => {
      expect(status).toBeFalsy();
    });
  });

  it(`should handle accordion's group open state`, () => {
    expect(component.directive.toggle).toBeTruthy();
  });

  it(`should handle accordion's group open state of oneAtTime is true`, () => {
    expect(component.directive.toggleGroup).toBeTruthy();
  });

  it('should activate an accordion child manually if toggle is called', () => {
    const index = 0;
    const { directive } = component;
    const { isOpen } = directive.accordions['_results'][index];
    directive.toggle(index);
    fixture.detectChanges();
    expect(directive.accordions['_results'][index].isOpen).not.toBe(isOpen);
  });
});
