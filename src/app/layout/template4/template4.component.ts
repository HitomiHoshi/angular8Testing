import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';
import { TablecontrolService } from 'src/app/tablecontrol.service';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {

  jsonData;
  length=0;

  constructor(
    private layoutService:LayoutService,
    private tableControlService: TablecontrolService,
  ) {
    tableControlService.selectedData.subscribe(data =>{
      this.jsonData = JSON.parse(data);
      console.log('received ', this.jsonData);
      this.length = this.jsonData.length;
    })
   }

  ngOnInit() {
  }

  togglerightNav() {
    this.layoutService.toggleRight();
}
}
