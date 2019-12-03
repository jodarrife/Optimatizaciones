import { TestBed } from '@angular/core/testing';

import { TipoDeActividadService } from './tipo-de-actividad.service';

describe('TipoDeActividadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoDeActividadService = TestBed.get(TipoDeActividadService);
    expect(service).toBeTruthy();
  });
});
