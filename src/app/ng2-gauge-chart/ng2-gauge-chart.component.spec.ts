import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2GaugeChartComponent } from './ng2-gauge-chart.component';

describe('Ng2GaugeChartComponent', () => {
  let component: Ng2GaugeChartComponent;
  let fixture: ComponentFixture<Ng2GaugeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng2GaugeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2GaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
