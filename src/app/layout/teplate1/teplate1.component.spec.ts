import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Teplate1Component } from './teplate1.component';

describe('Teplate1Component', () => {
  let component: Teplate1Component;
  let fixture: ComponentFixture<Teplate1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teplate1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Teplate1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
