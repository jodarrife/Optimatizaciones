import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaActComplementariasComponent } from './consulta-act-complementarias.component';

describe('ConsultaActComplementariasComponent', () => {
  let component: ConsultaActComplementariasComponent;
  let fixture: ComponentFixture<ConsultaActComplementariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaActComplementariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaActComplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
