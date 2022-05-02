import { TestBed } from '@angular/core/testing';

import { IntersectionObserverHelperService } from './intersection-observer-helper.service';

describe('IntersectionObserverHelperService', () => {
  let service: IntersectionObserverHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntersectionObserverHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
