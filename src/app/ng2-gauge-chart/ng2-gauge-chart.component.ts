import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2-gauge-chart',
  templateUrl: './ng2-gauge-chart.component.html',
  styleUrls: ['./ng2-gauge-chart.component.css']
})
export class Ng2GaugeChartComponent implements OnInit {

  input: number;

  sectors = [{
    from: 6500,
    to: 8000,
    color: 'orange'
  }, {
    from: 8000,
    to: 9000,
    color: 'red'
  }];

  constructor() { }

  ngOnInit() {
    this.input=1000;
  }

}
