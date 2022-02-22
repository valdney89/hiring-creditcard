import { TestBed } from '@angular/core/testing';

import { ValidateControlService } from './validate-control.service';

describe('ValidateControlService', () => {
  let service: ValidateControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidateControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
