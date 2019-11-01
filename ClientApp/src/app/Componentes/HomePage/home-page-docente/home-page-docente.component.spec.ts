import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDocenteComponent } from './home-page-docente.component';

describe('HomePageDocenteComponent', () => {
  let component: HomePageDocenteComponent;
  let fixture: ComponentFixture<HomePageDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
