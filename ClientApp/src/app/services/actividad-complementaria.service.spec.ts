import { TestBed } from '@angular/core/testing';

import { ActividadComplementariaService } from './actividad-complementaria.service';

describe('ActividadComplementariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActividadComplementariaService = TestBed.get(ActividadComplementariaService);
    expect(service).toBeTruthy();
  });
});
