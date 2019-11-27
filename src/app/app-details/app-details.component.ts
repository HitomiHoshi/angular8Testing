import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

@Component({
    selector: 'app-app-details',
    templateUrl: './app-details.component.html',
    styleUrls: ['./app-details.component.css']
})

export class AppDetailsComponent implements OnInit {

    constructor(
        private layoutService: LayoutService,
    ) { }

    ngOnInit() {
    }

    toggleLeftNav() {
        this.layoutService.toggleLeft();
    }

    sidenavMode(): string {
        return this.layoutService.getSidenavMode();
    }

}
