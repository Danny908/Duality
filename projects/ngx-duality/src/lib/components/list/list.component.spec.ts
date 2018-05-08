import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlListComponent } from './list.component';

describe('DlListComponent', () => {
  let component: DlListComponent;
  let fixture: ComponentFixture<DlListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
