import { TestBed } from '@angular/core/testing';

import { FechaserviceService } from './fechaservice.service';

describe('FechaserviceService', () => {
  let service: FechaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FechaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
