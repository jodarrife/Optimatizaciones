import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageJefeDepartamentoComponent } from './home-page-jefe-departamento.component';

describe('HomePageJefeDepartamentoComponent', () => {
  let component: HomePageJefeDepartamentoComponent;
  let fixture: ComponentFixture<HomePageJefeDepartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageJefeDepartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageJefeDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
