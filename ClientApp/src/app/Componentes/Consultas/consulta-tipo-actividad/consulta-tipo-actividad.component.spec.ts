import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaTipoActividadComponent } from './consulta-tipo-actividad.component';

describe('ConsultaTipoActividadComponent', () => {
  let component: ConsultaTipoActividadComponent;
  let fixture: ComponentFixture<ConsultaTipoActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaTipoActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTipoActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
