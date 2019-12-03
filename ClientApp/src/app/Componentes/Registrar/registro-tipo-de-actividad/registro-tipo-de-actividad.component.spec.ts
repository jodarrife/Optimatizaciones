import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroTipoDeActividadComponent } from './registro-tipo-de-actividad.component';

describe('RegistroTipoDeActividadComponent', () => {
  let component: RegistroTipoDeActividadComponent;
  let fixture: ComponentFixture<RegistroTipoDeActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroTipoDeActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTipoDeActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
