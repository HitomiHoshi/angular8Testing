import { Component, OnInit } from '@angular/core';
import { TablecontrolService } from 'src/app/tablecontrol.service';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-teplate1',
  templateUrl: './teplate1.component.html',
  styleUrls: ['./teplate1.component.css']
})

export class Teplate1Component implements OnInit {

  displayedColumns: string[] = ['name', 'ip', 'bandwidth', 'packetUnit', 'ttl', 'transportType', 'state', 'now', 'next'];
  dataSource;
  SideNavMode;

  constructor(
    private tableControlservice: TablecontrolService,
    private layoutService: LayoutService,
  ) { }

  ngOnInit() {
    this.dataSource = this.tableControlservice.getChannelTableData();
    //this.SideNavMode = this.layoutService.getSidenavMode();
  }

  toggleLeftNav() {
    this.layoutService.toggleLeft();
  }

  sidenavMode(): string
  {
   return this.layoutService.getSidenavMode();
  }
}
