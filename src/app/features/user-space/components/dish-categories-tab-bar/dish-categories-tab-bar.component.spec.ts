import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoriesTabBarComponent } from './dish-categories-tab-bar.component';

describe('DishCategoriesTabBarComponent', () => {
  let component: DishCategoriesTabBarComponent;
  let fixture: ComponentFixture<DishCategoriesTabBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCategoriesTabBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCategoriesTabBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
