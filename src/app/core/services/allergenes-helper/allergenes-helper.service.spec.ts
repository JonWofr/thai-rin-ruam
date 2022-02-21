import { TestBed } from '@angular/core/testing';

import { AllergenesHelperService } from './allergenes-helper.service';

describe('AllergenesHelperService', () => {
  let service: AllergenesHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllergenesHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
