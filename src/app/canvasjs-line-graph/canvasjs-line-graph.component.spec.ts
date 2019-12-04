import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasjsLineGraphComponent } from './canvasjs-line-graph.component';

describe('CanvasjsLineGraphComponent', () => {
  let component: CanvasjsLineGraphComponent;
  let fixture: ComponentFixture<CanvasjsLineGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasjsLineGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasjsLineGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
