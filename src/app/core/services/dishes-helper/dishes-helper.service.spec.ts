import { TestBed } from '@angular/core/testing';

import { DishesHelperService } from './dishes-helper.service';

describe('DishesHelperService', () => {
  let service: DishesHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishesHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
