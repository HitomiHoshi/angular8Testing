import { Component, OnInit, ViewChild } from '@angular/core';
import { TablecontrolService } from 'src/app/tablecontrol.service';
import { LayoutService } from '../layout.service';
import {MatPaginator} from '@angular/material/paginator';

export interface tablechannel{

    name: string;
    ip: string;
    port: number;
    bandwidth: number;
    transportType: string;
    state: string;
    now: string;
    next: string;
    is_selected: boolean;
}

@Component({
    selector: 'app-teplate1',
    templateUrl: './teplate1.component.html',
    styleUrls: ['./teplate1.component.css']
})

export class Teplate1Component implements OnInit {

    displayedColumns: string[] = ['action','name', 'ip', 'bandwidth', 'transportType', 'state', 'now', 'next'];
    dataSource;
    SideNavMode;

    masterSelected: boolean;
    checkedRow: any;

    @ViewChild('sidenavright', { static: false }) sidenavright;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(
        private tableControlservice: TablecontrolService,
        private layoutService: LayoutService,
    ) { 
        layoutService.rightToggle.subscribe(data =>{
            this.toggleRightNav();
        })
    }

    ngOnInit() {
        this.dataSource = this.tableControlservice.getChannelTableData();
        this.dataSource.paginator = this.paginator;
    }

    toggleLeftNav() {
        this.layoutService.toggleLeft();
    }

    sidenavMode(): string {
        return this.layoutService.getSidenavMode();
    }

    toggleRightNav(){
        this.sidenavright.toggle();
    }

    checkUncheckAll() {
    for (var i = 0; i < this.dataSource.data.length; i++) {
      this.dataSource.data[i].is_selected = this.masterSelected;
    }
    this.getCheckedItemList();
  }

  isAllSelected() {
      console.log(this.dataSource.data);
    this.masterSelected = this.dataSource.data.every(function (item: any) {
      return item.is_selected == true;
    });
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    this.checkedRow = [];
    for (var i = 0; i < this.dataSource.data.length; i++) {
      if (this.dataSource.data[i].is_selected) {
        this.checkedRow.push(this.dataSource.data[i]);
      }
    }
    console.log('checked row : ', this.checkedRow);
    this.checkedRow = JSON.stringify(this.checkedRow);
    //this.contentManagerService.setSelectedDetails(this.checkedRow);
  }
}
