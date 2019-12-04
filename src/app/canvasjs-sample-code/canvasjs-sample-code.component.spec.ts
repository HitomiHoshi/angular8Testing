import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasjsSampleCodeComponent } from './canvasjs-sample-code.component';

describe('CanvasjsSampleCodeComponent', () => {
  let component: CanvasjsSampleCodeComponent;
  let fixture: ComponentFixture<CanvasjsSampleCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasjsSampleCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasjsSampleCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
