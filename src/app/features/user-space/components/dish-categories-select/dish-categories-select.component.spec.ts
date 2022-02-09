import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoriesSelectComponent } from './dish-categories-select.component';

describe('DishCategoriesSelectComponent', () => {
  let component: DishCategoriesSelectComponent;
  let fixture: ComponentFixture<DishCategoriesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCategoriesSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCategoriesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
