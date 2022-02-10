import { TestBed } from '@angular/core/testing';

import { SpinnerControllerService } from './spinner-controller.service';

describe('SpinnerControllerService', () => {
  let service: SpinnerControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
