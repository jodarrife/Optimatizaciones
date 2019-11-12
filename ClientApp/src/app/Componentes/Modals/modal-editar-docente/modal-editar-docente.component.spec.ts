import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarDocenteComponent } from './modal-editar-docente.component';

describe('ModalEditarDocenteComponent', () => {
  let component: ModalEditarDocenteComponent;
  let fixture: ComponentFixture<ModalEditarDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
