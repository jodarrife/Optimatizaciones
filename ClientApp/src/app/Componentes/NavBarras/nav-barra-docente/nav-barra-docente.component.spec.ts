import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarraDocenteComponent } from './nav-barra-docente.component';

describe('NavBarraDocenteComponent', () => {
  let component: NavBarraDocenteComponent;
  let fixture: ComponentFixture<NavBarraDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarraDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarraDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
