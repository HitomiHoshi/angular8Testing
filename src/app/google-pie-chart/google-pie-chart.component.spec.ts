import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglePieChartComponent } from './google-pie-chart.component';

describe('GooglePieChartComponent', () => {
  let component: GooglePieChartComponent;
  let fixture: ComponentFixture<GooglePieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglePieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
