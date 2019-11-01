import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarAccionesComponent } from './desactivar-acciones.component';

describe('DesactivarAccionesComponent', () => {
  let component: DesactivarAccionesComponent;
  let fixture: ComponentFixture<DesactivarAccionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactivarAccionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivarAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
