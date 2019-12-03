import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegTipoDeActividadComponent } from './reg-tipo-de-actividad.component';

describe('RegTipoDeActividadComponent', () => {
  let component: RegTipoDeActividadComponent;
  let fixture: ComponentFixture<RegTipoDeActividadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegTipoDeActividadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegTipoDeActividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
