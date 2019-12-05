import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaDocenteComponent } from './consulta-docente.component';

describe('ConsultaDocenteComponent', () => {
  let component: ConsultaDocenteComponent;
  let fixture: ComponentFixture<ConsultaDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
