import { TestBed } from '@angular/core/testing';

import { NewsHelperService } from './news-helper.service';

describe('NewsHelperService', () => {
  let service: NewsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
