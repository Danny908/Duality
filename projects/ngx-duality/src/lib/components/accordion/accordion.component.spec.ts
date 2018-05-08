import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlAccordionComponent } from './accordion.component';

describe('DlAccordionComponent', () => {
  let component: DlAccordionComponent;
  let fixture: ComponentFixture<DlAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
