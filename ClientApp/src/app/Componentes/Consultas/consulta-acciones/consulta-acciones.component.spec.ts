import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaAccionesComponent } from './consulta-acciones.component';

describe('ConsultaAccionesComponent', () => {
  let component: ConsultaAccionesComponent;
  let fixture: ComponentFixture<ConsultaAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
