import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlHeaderComponent } from './header.component';

describe('DlHeaderComponent', () => {
  let component: DlHeaderComponent;
  let fixture: ComponentFixture<DlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
