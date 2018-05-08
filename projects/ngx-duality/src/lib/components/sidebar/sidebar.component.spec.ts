import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlSidebarComponent } from './sidebar.component';

describe('DlSidebarComponent', () => {
  let component: DlSidebarComponent;
  let fixture: ComponentFixture<DlSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
