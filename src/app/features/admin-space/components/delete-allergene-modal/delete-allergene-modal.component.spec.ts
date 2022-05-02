import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllergeneModalComponent } from './delete-allergene-modal.component';

describe('DeleteAllergeneModalComponent', () => {
  let component: DeleteAllergeneModalComponent;
  let fixture: ComponentFixture<DeleteAllergeneModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllergeneModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAllergeneModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
