import { TestBed } from '@angular/core/testing';

import { JefeDepartamentoService } from './jefe-departamento.service';

describe('JefeDepartamentoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JefeDepartamentoService = TestBed.get(JefeDepartamentoService);
    expect(service).toBeTruthy();
  });
});
