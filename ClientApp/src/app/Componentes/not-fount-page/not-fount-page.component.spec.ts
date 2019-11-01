import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFountPageComponent } from './not-fount-page.component';

describe('NotFountPageComponent', () => {
  let component: NotFountPageComponent;
  let fixture: ComponentFixture<NotFountPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFountPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
