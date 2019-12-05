import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Teplate1Component } from './layout/teplate1/teplate1.component';
import { Template2Component } from './layout/template2/template2.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LiveComponent } from './app-details/live/live.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CanvasjsSampleCodeComponent } from './canvasjs-sample-code/canvasjs-sample-code.component';
import { CanvasjsLineGraphComponent } from './canvasjs-line-graph/canvasjs-line-graph.component';
import { GooglePieChartComponent } from './google-pie-chart/google-pie-chart.component';
import { Ng2GaugeChartComponent } from './ng2-gauge-chart/ng2-gauge-chart.component';
import { AngularGaugeChartComponent } from './angular-gauge-chart/angular-gauge-chart.component';
import { ModalsComponent } from './modals/modals.component';


const routes: Routes = [
    { path: '', redirectTo: 'template1', pathMatch: 'full' },
    { path: 'template1', component: Teplate1Component },
    { path: 'live', component: LiveComponent },
    {
        path: 'details', children: [
            { path: 'TV1', component: AppDetailsComponent },
        ]
    },
    { path: 'configuration', component: ConfigurationComponent },
    { path: 'linechart', component: LineChartComponent },
    { path: 'canvasjssamplecode', component: CanvasjsSampleCodeComponent },
    { path: 'canvasjslinegraph', component: CanvasjsLineGraphComponent },
    { path: 'googlepiechart', component: GooglePieChartComponent },
    { path: 'ng2gaugechart', component: Ng2GaugeChartComponent },
    { path: 'angulargaugechart', component: AngularGaugeChartComponent },
    { path: 'modals', component: ModalsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
