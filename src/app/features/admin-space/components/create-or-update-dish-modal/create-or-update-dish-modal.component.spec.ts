import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateDishModalComponent } from './create-or-update-dish-modal.component';

describe('CreateOrUpdateDishModalComponent', () => {
  let component: CreateOrUpdateDishModalComponent;
  let fixture: ComponentFixture<CreateOrUpdateDishModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateOrUpdateDishModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrUpdateDishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
