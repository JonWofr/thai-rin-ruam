import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayNoteComponent } from './holiday-note.component';

describe('HolidayNoteComponent', () => {
  let component: HolidayNoteComponent;
  let fixture: ComponentFixture<HolidayNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolidayNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
