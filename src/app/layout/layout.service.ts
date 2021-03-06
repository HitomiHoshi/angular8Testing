import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class LayoutService {

    sidenavMode: string;

    @Output() leftToggle: EventEmitter<any> = new EventEmitter();
    @Output() rightToggle: EventEmitter<any> = new EventEmitter();
    @Output() rightWidth: EventEmitter<any> = new EventEmitter();

    constructor() { }

    toggleLeft() {
        console.log('Toggle working');
        this.leftToggle.emit('left');
    }

    setSideNavMode(sm: string) {
        console.log(sm);
        this.sidenavMode = sm;
    }
    getSidenavMode(): string {
        return this.sidenavMode;
    }

    toggleRight(){
        console.log('Toggle working right');
        this.rightToggle.emit('right');
    }

    setrightsidenav(width){
        this.rightWidth.emit(width);
    }
}
