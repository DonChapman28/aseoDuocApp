import { TestBed } from '@angular/core/testing';

import { DatosserviceService } from './datosservice.service';

describe('DatosserviceService', () => {
  let service: DatosserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
