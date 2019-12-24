import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TablecontrolService {

    @Output() selectedData: EventEmitter<any> = new EventEmitter();
    @Output() totalData: EventEmitter<any> = new EventEmitter();
    @Output() onAirData: EventEmitter<any> = new EventEmitter();
    @Output() readyData: EventEmitter<any> = new EventEmitter();

    constructor(
        private http: HttpClient
    ) { }

    getPreviewTableData() {
        return this.http.get('/assets/previewdatatable.json')
    }

    getChannelTableData(): any {
        return this.http.get('/assets/channeldatatable.json')
    }

    setSelectedDetails(selected){
        this.selectedData.emit(selected);
    }

    setTotalDataTable(total){
        this.totalData.emit(total)
    }
    setOnAirDataTable(onAir){
        this.onAirData.emit(onAir)
    }
    setReadyDataTable(ready){
        this.readyData.emit(ready)
    }
}
