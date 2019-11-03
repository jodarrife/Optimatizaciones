import { TestBed } from '@angular/core/testing';

import { PlanDeAccionService } from './plan-de-accion.service';

describe('PlanDeAccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanDeAccionService = TestBed.get(PlanDeAccionService);
    expect(service).toBeTruthy();
  });
});
