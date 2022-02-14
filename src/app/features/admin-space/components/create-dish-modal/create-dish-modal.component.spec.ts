import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDishModalComponent } from './create-dish-modal.component';

describe('CreateDishModalComponent', () => {
  let component: CreateDishModalComponent;
  let fixture: ComponentFixture<CreateDishModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDishModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
