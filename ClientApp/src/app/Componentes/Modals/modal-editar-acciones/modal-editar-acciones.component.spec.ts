import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAccionesComponent } from './modal-editar-acciones.component';

describe('ModalEditarAccionesComponent', () => {
  let component: ModalEditarAccionesComponent;
  let fixture: ComponentFixture<ModalEditarAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditarAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
