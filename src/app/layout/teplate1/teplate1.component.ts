import { Component, OnInit } from '@angular/core';
import { TablecontrolService } from 'src/app/tablecontrol.service';

@Component({
  selector: 'app-teplate1',
  templateUrl: './teplate1.component.html',
  styleUrls: ['./teplate1.component.css']
})
export class Teplate1Component implements OnInit {

  displayedColumns: string[] = ['name', 'ip', 'bandwidth', 'packetUnit', 'ttl', 'transportType', 'state', 'now', 'next'];
  dataSource;

  constructor(
    private tableControlservice: TablecontrolService
  ) { }

  ngOnInit() {
    this.dataSource = this.tableControlservice.getChannelTableData();
  }

}
