import { TestBed } from '@angular/core/testing';

import { DishGroupsHelperService } from './dish-groups-helper.service';

describe('DishGroupsHelperService', () => {
  let service: DishGroupsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishGroupsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
