import { Component, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DraganddropService } from 'src/app/draganddrop.service';

@Component({
    selector: 'app-template2',
    templateUrl: './template2.component.html',
    styleUrls: ['./template2.component.css']
})
export class Template2Component implements OnInit {


    sourceitem = [
        'Video 1',
        'Video 2',
        'Video 3',
        'Video 4',
        'Video 5'
    ];

    constructor(
        private dndService: DraganddropService,
    ) { }

    ngOnInit() {
    }

    drop(event: CdkDragDrop<string[]>) {
        this.dndService.Drop(event);
    }

}
