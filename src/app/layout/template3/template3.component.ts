import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template3',
  templateUrl: './template3.component.html',
  styleUrls: ['./template3.component.css']
})
export class Template3Component implements OnInit {

  xpandStatus: boolean;

  constructor() { }

  ngOnInit() {
  }

  cancel(){
    this.xpandStatus = !this.xpandStatus;
  }
}
