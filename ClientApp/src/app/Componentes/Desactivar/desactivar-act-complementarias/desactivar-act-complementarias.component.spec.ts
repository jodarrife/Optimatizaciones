import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarActComplementariasComponent } from './desactivar-act-complementarias.component';

describe('DesactivarActComplementariasComponent', () => {
  let component: DesactivarActComplementariasComponent;
  let fixture: ComponentFixture<DesactivarActComplementariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesactivarActComplementariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesactivarActComplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
