import { Component, OnInit, ViewChild } from '@angular/core';
import { TablecontrolService } from 'src/app/tablecontrol.service';
import { LayoutService } from '../layout.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
    selector: 'app-teplate1',
    templateUrl: './teplate1.component.html',
    styleUrls: ['./teplate1.component.css']
})

export class Teplate1Component implements OnInit {

    displayedColumns: string[] = ['name', 'ip', 'bandwidth', 'transportType', 'state', 'now', 'next'];
    dataSource;
    SideNavMode;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(
        private tableControlservice: TablecontrolService,
        private layoutService: LayoutService,
    ) { }

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
}
