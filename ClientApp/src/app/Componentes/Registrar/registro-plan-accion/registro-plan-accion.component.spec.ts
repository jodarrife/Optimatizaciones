import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPlanAccionComponent } from './registro-plan-accion.component';

describe('RegistroPlanAccionComponent', () => {
  let component: RegistroPlanAccionComponent;
  let fixture: ComponentFixture<RegistroPlanAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPlanAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPlanAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
