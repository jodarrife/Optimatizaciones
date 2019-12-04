import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarTipoDeActividadComponent } from './asignar-tipo-de-actividad.component';

describe('AsignarTipoDeActividadComponent', () => {
  let component: AsignarTipoDeActividadComponent;
  let fixture: ComponentFixture<AsignarTipoDeActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarTipoDeActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarTipoDeActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
