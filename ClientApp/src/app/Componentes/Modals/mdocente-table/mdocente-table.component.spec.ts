import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MDocenteTableComponent } from './mdocente-table.component';

describe('MDocenteTableComponent', () => {
  let component: MDocenteTableComponent;
  let fixture: ComponentFixture<MDocenteTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MDocenteTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MDocenteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
