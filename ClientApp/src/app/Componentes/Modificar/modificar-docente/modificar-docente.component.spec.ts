import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDocenteComponent } from './modificar-docente.component';

describe('ModificarDocenteComponent', () => {
  let component: ModificarDocenteComponent;
  let fixture: ComponentFixture<ModificarDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
