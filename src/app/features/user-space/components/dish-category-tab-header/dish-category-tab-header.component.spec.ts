import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoryTabHeaderComponent } from './dish-category-tab-header.component';

describe('DishCategoryTabHeaderComponent', () => {
  let component: DishCategoryTabHeaderComponent;
  let fixture: ComponentFixture<DishCategoryTabHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCategoryTabHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCategoryTabHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
