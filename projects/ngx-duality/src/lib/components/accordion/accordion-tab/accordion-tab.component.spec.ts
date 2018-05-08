import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlAccordionTabComponent } from './accordion-tab.component';

describe('DlAccordionTabComponent', () => {
  let component: DlAccordionTabComponent;
  let fixture: ComponentFixture<DlAccordionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlAccordionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlAccordionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
