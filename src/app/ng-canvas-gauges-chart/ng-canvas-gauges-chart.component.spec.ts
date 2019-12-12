import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCanvasGaugesChartComponent } from './ng-canvas-gauges-chart.component';

describe('NgCanvasGaugesChartComponent', () => {
  let component: NgCanvasGaugesChartComponent;
  let fixture: ComponentFixture<NgCanvasGaugesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCanvasGaugesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCanvasGaugesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
