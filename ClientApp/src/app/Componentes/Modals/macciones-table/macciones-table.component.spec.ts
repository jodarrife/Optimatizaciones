import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAccionesTableComponent } from './macciones-table.component';

describe('MAccionesTableComponent', () => {
  let component: MAccionesTableComponent;
  let fixture: ComponentFixture<MAccionesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAccionesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAccionesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
