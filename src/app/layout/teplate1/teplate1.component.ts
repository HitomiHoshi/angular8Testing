import { Component, OnInit } from '@angular/core';

export interface ChannelData {
  name: string;
  ip: string;
  bandwidth: number;
  packetUnit: number;
  ttl: number;
  transportType: string;
  state: string; 
  now: string;
  next: string;
}

const ELEMENT_DATA: ChannelData[] = [
  {name: "Tv1", ip: '0.0.0.0', bandwidth: 100, packetUnit: 1, ttl: 1, transportType: "udp", state: "running" , now: "", next: "" },
];

@Component({
  selector: 'app-teplate1',
  templateUrl: './teplate1.component.html',
  styleUrls: ['./teplate1.component.css']
})
export class Teplate1Component implements OnInit {
  
  displayedColumns: string[] = ['name', 'ip', 'bandwidth', 'packetUnit', 'ttl', 'transportType', 'state', 'now', 'next'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
    
  }
  

}
