import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateNewsModalComponent } from './create-or-update-news-modal.component';

describe('CreateOrUpdateNewsModalComponent', () => {
  let component: CreateOrUpdateNewsModalComponent;
  let fixture: ComponentFixture<CreateOrUpdateNewsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateNewsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateNewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
