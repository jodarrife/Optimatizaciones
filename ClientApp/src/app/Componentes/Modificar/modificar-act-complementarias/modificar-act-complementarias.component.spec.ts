import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarActComplementariasComponent } from './modificar-act-complementarias.component';

describe('ModificarActComplementariasComponent', () => {
  let component: ModificarActComplementariasComponent;
  let fixture: ComponentFixture<ModificarActComplementariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarActComplementariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarActComplementariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
