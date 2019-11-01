import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarAccionesComponent } from './modificar-acciones.component';

describe('ModificarAccionesComponent', () => {
  let component: ModificarAccionesComponent;
  let fixture: ComponentFixture<ModificarAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
