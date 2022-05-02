import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateAllergeneModalComponent } from './create-or-update-allergene-modal.component';

describe('CreateOrUpdateAllergeneModalComponent', () => {
  let component: CreateOrUpdateAllergeneModalComponent;
  let fixture: ComponentFixture<CreateOrUpdateAllergeneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateAllergeneModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateAllergeneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
