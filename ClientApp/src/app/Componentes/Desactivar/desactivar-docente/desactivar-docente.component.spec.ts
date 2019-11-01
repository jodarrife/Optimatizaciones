import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarDocenteComponent } from './desactivar-docente.component';

describe('DesactivarDocenteComponent', () => {
  let component: DesactivarDocenteComponent;
  let fixture: ComponentFixture<DesactivarDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactivarDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivarDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
