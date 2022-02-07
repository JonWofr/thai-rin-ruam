import { TestBed } from '@angular/core/testing';

import { TitleIntersectionService } from './title-intersection.service';

describe('TitleIntersectionService', () => {
  let service: TitleIntersectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitleIntersectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
