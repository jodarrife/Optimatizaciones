import { TestBed, async, inject } from '@angular/core/testing';

import { AuthDocenteGuard } from './auth-docente.guard';

describe('AuthDocenteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDocenteGuard]
    });
  });

  it('should ...', inject([AuthDocenteGuard], (guard: AuthDocenteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
