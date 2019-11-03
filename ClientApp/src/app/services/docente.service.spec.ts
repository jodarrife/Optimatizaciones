import { TestBed } from '@angular/core/testing';

import { DocenteService } from './docente.service';

describe('DocenteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocenteService = TestBed.get(DocenteService);
    expect(service).toBeTruthy();
  });
});
