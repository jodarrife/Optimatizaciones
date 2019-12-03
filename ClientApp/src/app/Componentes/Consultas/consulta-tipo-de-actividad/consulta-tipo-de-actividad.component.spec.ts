import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTipoDeActividadComponent } from './consulta-tipo-de-actividad.component';

describe('ConsultaTipoDeActividadComponent', () => {
  let component: ConsultaTipoDeActividadComponent;
  let fixture: ComponentFixture<ConsultaTipoDeActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTipoDeActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTipoDeActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
