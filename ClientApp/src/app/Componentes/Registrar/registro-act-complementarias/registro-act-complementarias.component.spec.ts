import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroActComplementariasComponent } from './registro-act-complementarias.component';

describe('RegistroActComplementariasComponent', () => {
  let component: RegistroActComplementariasComponent;
  let fixture: ComponentFixture<RegistroActComplementariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroActComplementariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroActComplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
