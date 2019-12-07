import { TestBed } from '@angular/core/testing';

import { TipoActividadService } from './tipo-actividad.service';

describe('TipoActividadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipoActividadService = TestBed.get(TipoActividadService);
    expect(service).toBeTruthy();
  });
});
