import { Component, OnInit, ViewChild } from '@angular/core';
import { TablecontrolService } from 'src/app/tablecontrol.service';
import { LayoutService } from '../layout.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource, MatTable } from '@angular/material';

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
    dataSource: MatTableDataSource<tablechannel>;
    SideNavMode;

    masterSelected: boolean;
    checkedRow: any;
    lengthSelected = 0;

    rightSideNavWidth;

    @ViewChild('sidenavright', { static: false }) sidenavright;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatTable, {static: true}) table: MatTable<any>;
    
    constructor(
        private tableControlservice: TablecontrolService,
        private layoutService: LayoutService,
    ) { 
        layoutService.rightToggle.subscribe(data =>{
            this.toggleRightNav();
        })

        layoutService.rightWidth.subscribe(data =>{
          this.rightSideNavWidth = data
        })
    }

    ngOnInit() {
        // this.dataSource = this.tableControlservice.getChannelTableData();
        // this.dataSource.paginator = this.paginator;
        this.tableControlservice.getChannelTableData().subscribe((ChannelList) =>{
          this.dataSource = new MatTableDataSource (ChannelList);
          this.lengthSelected = 0;
          this.dataSource.paginator = this.paginator;
          console.log("datasourcelength", this.dataSource.data.length)
          this.tableControlservice.setTotalDataTable(this.dataSource.data.length);
          

        })

        if(window.innerWidth <= 900)
        {
          this.rightSideNavWidth = "calc(100vw - 57px)"
        }
        else{
          this.rightSideNavWidth = "20vw"
        }
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
    console.log('checked row : ', this.checkedRow.length);
    
    this.lengthSelected = this.checkedRow.length;
    this.checkedRow = JSON.stringify(this.checkedRow);
    this.tableControlservice.setSelectedDetails(this.checkedRow);
    //this.contentManagerService.setSelectedDetails(this.checkedRow);
  }
}
