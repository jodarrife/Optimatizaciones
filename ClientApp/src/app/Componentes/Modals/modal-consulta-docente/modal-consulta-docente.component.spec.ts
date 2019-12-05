import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalConsultaDocenteComponent } from './modal-consulta-docente.component';

describe('ModalConsultaDocenteComponent', () => {
  let component: ModalConsultaDocenteComponent;
  let fixture: ComponentFixture<ModalConsultaDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConsultaDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConsultaDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
