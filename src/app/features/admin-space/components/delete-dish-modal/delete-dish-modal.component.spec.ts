import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDishModalComponent } from './delete-dish-modal.component';

describe('DeleteDishModalComponent', () => {
  let component: DeleteDishModalComponent;
  let fixture: ComponentFixture<DeleteDishModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDishModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDishModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
