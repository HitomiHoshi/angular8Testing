import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @HostListener('window:resize', ['$event']) onResizeEvent(event) {
    this.onloadWindowSetup(event.target.innerWidth);
  }

  SideNavMode: string;
  LeftNavWidth: string;

  links = [
    { path: 'template1', name: 'Template 1' },
    { path: 'template2', name: 'Template 2' },
    { path: 'details', name: 'Template 3' }
  ];

  selected: ActivatedRoute;

  constructor() { }

  ngOnInit() {
    this.onloadWindowSetup(window.innerWidth);
  }


  public onloadWindowSetup(width): void {
    if (width <= 900) {
      this.SideNavMode = "over";
      this.LeftNavWidth = "30%"; // TODO: If width is small the left Nav should be 100%
    }
    else {
      this.SideNavMode = "side";
      this.LeftNavWidth = "20%";
    }
  }


}
