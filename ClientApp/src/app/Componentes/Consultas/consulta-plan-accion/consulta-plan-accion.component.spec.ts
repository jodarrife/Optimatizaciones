import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaPlanAccionComponent } from './consulta-plan-accion.component';

describe('ConsultaPlanAccionComponent', () => {
  let component: ConsultaPlanAccionComponent;
  let fixture: ComponentFixture<ConsultaPlanAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaPlanAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaPlanAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
