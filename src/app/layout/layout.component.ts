import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutService } from './layout.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    showFiller = false;

    @ViewChild('sidenavleft', { static: false }) sidenavleft;

    @HostListener('window:resize', ['$event']) onResizeEvent(event) {
        this.onloadWindowSetup(event.target.innerWidth);
    }

    SideNavMode: string;
    LeftNavWidth = "15vw";

    // links = [
    //     { path: 'template1', name: 'Channel' },
    //     {
    //         path: 'details',
    //         name: 'Schedule',
    //         children: [
    //             { path: 'details/TV1', name: 'TV1' },
    //         ]
    //     },
    //     { path: 'configuration', name: 'Configuration' }
    // ];

    links = [
        { path: 'template4', name: 'Dashboard' },
        { path: 'details', name: 'Monitoring' },
        { path: 'configuration', name: 'Playlist' },
        { path: 'details', name: 'Schedule' },
    ];

    selected: ActivatedRoute;

    constructor(
        private layoutService: LayoutService,
    ) {

        this.layoutService.leftToggle.subscribe(data => {
            this.toggleLeftNav();
        });

    }

    ngOnInit() {
        this.onloadWindowSetup(window.innerWidth);
    }


    public onloadWindowSetup(width): void {
        if (width <= 900) {
            this.SideNavMode = "over";
            this.LeftNavWidth = "100%"; // TODO: If width is small the left Nav should be 100%

            this.layoutService.setSideNavMode(this.SideNavMode);
        }
        else {
            this.SideNavMode = "side";
            //this.LeftNavWidth = "15vw";

            this.layoutService.setSideNavMode(this.SideNavMode);
        }
    }

    toggleLeftNav() {
        //this.layoutService.toggleLeft();
        // this.sidenavleft.toggle();
        this.showFiller = !this.showFiller;

        if(this.showFiller)
            this.LeftNavWidth = "3vw";
        else
            this.LeftNavWidth = "15vw";

    }

}
