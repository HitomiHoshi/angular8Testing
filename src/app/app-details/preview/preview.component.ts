import { Component, OnInit } from '@angular/core';
import { TablecontrolService } from 'src/app/tablecontrol.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'start', 'end'];
  dataSource;

  constructor(
    private tableControlService: TablecontrolService
  ) { }

  ngOnInit() {
    this.dataSource = this.tableControlService.getPreviewTableData();

  }

  publish() {
    window.alert('Complete');
  }

  show() {
    window.alert('shown');
  }
}
