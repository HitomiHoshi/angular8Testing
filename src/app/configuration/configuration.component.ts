import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../layout/layout.service';
import { ModalService } from './modal/modal.service';

@Component({
    selector: 'app-configuration',
    templateUrl: './configuration.component.html',
    styleUrls: ['./configuration.component.css']
})

export class ConfigurationComponent implements OnInit {

    bodyText:string;

    constructor(
        private layoutService: LayoutService,
        private modalService: ModalService,
    ) { }

    ngOnInit() {
        this.bodyText = "This text can be updated in modal 1";
    }

    toggleLeftNav() {
        this.layoutService.toggleLeft();
    }

    sidenavMode(): string {
        return this.layoutService.getSidenavMode();
    }

    openModal(id: string){
        this.modalService.open(id);
    }

    closeModal(id: string){
        this.modalService.close(id);
    }

}
