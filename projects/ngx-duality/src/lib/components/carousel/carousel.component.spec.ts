import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlCarouselComponent } from './carousel.component';

describe('DlCarouselComponent', () => {
  let component: DlCarouselComponent;
  let fixture: ComponentFixture<DlCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
