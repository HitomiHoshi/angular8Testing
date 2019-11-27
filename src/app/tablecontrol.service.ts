import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class TablecontrolService {

    constructor(
        private http: HttpClient
    ) { }

    getPreviewTableData() {
        return this.http.get('/assets/previewdatatable.json')
    }

    getChannelTableData() {
        return this.http.get('/assets/channeldatatable.json')
    }
}
