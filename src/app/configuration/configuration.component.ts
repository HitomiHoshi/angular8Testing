import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.css']
})

export class ConfigurationComponent implements OnInit {

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
