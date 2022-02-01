import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCategoriesSectionComponent } from './dish-categories-section.component';

describe('DishCategoriesSectionComponent', () => {
  let component: DishCategoriesSectionComponent;
  let fixture: ComponentFixture<DishCategoriesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCategoriesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DishCategoriesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
