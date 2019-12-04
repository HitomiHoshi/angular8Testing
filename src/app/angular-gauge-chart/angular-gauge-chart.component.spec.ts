import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGaugeChartComponent } from './angular-gauge-chart.component';

describe('AngularGaugeChartComponent', () => {
  let component: AngularGaugeChartComponent;
  let fixture: ComponentFixture<AngularGaugeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularGaugeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularGaugeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
