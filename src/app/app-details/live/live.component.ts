import { Component, OnInit } from '@angular/core';

export interface LiveData {
  name: string;
  start: string;
  end: string;
}

const ELEMENT_DATA: LiveData[] = [
  { name: "Video1", start: "00:00:00", end: "00:00:10" },
];

@Component({
  selector: 'app-live',
  templateUrl: './live.component.html',
  styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

  clock = new Date();
  clockHandle;

  displayedColumns: string[] = ['name', 'start', 'end'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
    //time only
    this.clockHandle = setInterval(() => {
      this.clock = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.clockHandle);
  }
}
