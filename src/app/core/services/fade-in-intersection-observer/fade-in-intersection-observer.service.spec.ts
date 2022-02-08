import { TestBed } from '@angular/core/testing';

import { FadeInIntersectionObserverService } from './fade-in-intersection-observer.service';

describe('FadeInIntersectionObserverService', () => {
  let service: FadeInIntersectionObserverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FadeInIntersectionObserverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
