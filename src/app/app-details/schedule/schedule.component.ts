import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { DraganddropService } from 'src/app/draganddrop.service';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

    schedulelist = [
    ];

    constructor(
        private dndService: DraganddropService
    ) { }

    ngOnInit() {
    }

    drop(event: CdkDragDrop<string[]>) {
        this.dndService.Drop(event);

        // if (event.previousContainer === event.container) {
        //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        // } else {
        //   transferArrayItem(event.previousContainer.data,
        //                     event.container.data,
        //                     event.previousIndex,
        //                     event.currentIndex);
        // }
    }

    deleteitem(item) {
        this.schedulelist.splice(item, 1);
    }

}
