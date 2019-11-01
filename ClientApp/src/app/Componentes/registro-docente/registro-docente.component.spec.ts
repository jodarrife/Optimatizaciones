import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDocenteComponent } from './registro-docente.component';

describe('RegistroDocenteComponent', () => {
  let component: RegistroDocenteComponent;
  let fixture: ComponentFixture<RegistroDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
