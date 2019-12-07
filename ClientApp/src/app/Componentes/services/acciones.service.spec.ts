import { TestBed } from '@angular/core/testing';

import { AccionesService } from './acciones.service';

describe('AccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccionesService = TestBed.get(AccionesService);
    expect(service).toBeTruthy();
  });
});
