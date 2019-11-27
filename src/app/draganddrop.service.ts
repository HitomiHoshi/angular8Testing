import { Injectable } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';

@Injectable({
    providedIn: 'root'
})
export class DraganddropService {

    constructor() { }

    Drop(event: CdkDragDrop<string[]>) {
        if (event.container === event.previousContainer) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event.container.id);
        } else {
            if (event.container.id == 'list-1') {
                copyArrayItem(event.previousContainer.data,
                    event.container.data,
                    event.previousIndex,
                    event.currentIndex);
            }
            // else{
            //     transferArrayItem(event.previousContainer.data,
            //         event.container.data,
            //         event.previousIndex,
            //         event.currentIndex);
            // }

        }
    }
}
