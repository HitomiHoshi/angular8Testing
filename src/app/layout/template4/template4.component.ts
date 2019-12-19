import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-template4',
  templateUrl: './template4.component.html',
  styleUrls: ['./template4.component.css']
})
export class Template4Component implements OnInit {

  constructor(
    private layoutService:LayoutService,
  ) { }

  ngOnInit() {
  }

  togglerightNav() {
    this.layoutService.toggleRight();
}
}
