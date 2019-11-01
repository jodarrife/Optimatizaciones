import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarraJefeComponent } from './nav-barra-jefe.component';

describe('NavBarraJefeComponent', () => {
  let component: NavBarraJefeComponent;
  let fixture: ComponentFixture<NavBarraJefeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarraJefeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarraJefeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
