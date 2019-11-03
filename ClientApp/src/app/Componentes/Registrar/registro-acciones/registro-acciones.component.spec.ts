import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAccionesComponent } from './registro-acciones.component';

describe('RegistroAccionesComponent', () => {
  let component: RegistroAccionesComponent;
  let fixture: ComponentFixture<RegistroAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
