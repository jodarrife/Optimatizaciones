import { TestBed } from '@angular/core/testing';

import { EvidenciaService } from './evidencia.service';

describe('EvidenciaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvidenciaService = TestBed.get(EvidenciaService);
    expect(service).toBeTruthy();
  });
});
