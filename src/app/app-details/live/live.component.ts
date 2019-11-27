import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/layout.service';

export interface LiveData {
    start: string;
    name: string;
    end: string;
}

const ELEMENT_DATA: LiveData[] = [
    { start: "00:00:00", name: "Video1", end: "00:00:10" },
];

@Component({
    selector: 'app-live',
    templateUrl: './live.component.html',
    styleUrls: ['./live.component.css']
})
export class LiveComponent implements OnInit {

    clock = new Date();
    clockHandle;

    displayedColumns: string[] = ['start', 'name', 'end'];
    dataSource = ELEMENT_DATA;

    constructor(
        private layoutService: LayoutService,
    ) { }

    ngOnInit() {
        //time only
        this.clockHandle = setInterval(() => {
            this.clock = new Date();
        }, 1);
    }

    ngOnDestroy() {
        clearInterval(this.clockHandle);
    }

    toggleLeftNav() {
        this.layoutService.toggleLeft();
    }

    sidenavMode(): string {
        return this.layoutService.getSidenavMode();
    }

}
