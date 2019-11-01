import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPlanAccionComponent } from './modificar-plan-accion.component';

describe('ModificarPlanAccionComponent', () => {
  let component: ModificarPlanAccionComponent;
  let fixture: ComponentFixture<ModificarPlanAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPlanAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPlanAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
