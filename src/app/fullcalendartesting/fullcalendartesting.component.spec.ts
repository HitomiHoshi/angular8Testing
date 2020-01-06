import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullcalendartestingComponent } from './fullcalendartesting.component';

describe('FullcalendartestingComponent', () => {
  let component: FullcalendartestingComponent;
  let fixture: ComponentFixture<FullcalendartestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullcalendartestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullcalendartestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
