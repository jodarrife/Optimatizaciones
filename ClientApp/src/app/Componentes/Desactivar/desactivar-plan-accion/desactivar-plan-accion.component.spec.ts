import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarPlanAccionComponent } from './desactivar-plan-accion.component';

describe('DesactivarPlanAccionComponent', () => {
  let component: DesactivarPlanAccionComponent;
  let fixture: ComponentFixture<DesactivarPlanAccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactivarPlanAccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivarPlanAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
