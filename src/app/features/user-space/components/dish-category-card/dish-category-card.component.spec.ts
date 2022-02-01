import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoryCardComponent } from './dish-category-card.component';

describe('DishCategoryCardComponent', () => {
  let component: DishCategoryCardComponent;
  let fixture: ComponentFixture<DishCategoryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCategoryCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
