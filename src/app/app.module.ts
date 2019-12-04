import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleChartsModule } from 'angular-google-charts';
import { Ng2GaugeModule } from 'ng2-gauge';
import { GaugeChartModule } from 'angular-gauge-chart';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { Teplate1Component } from './layout/teplate1/teplate1.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { Template2Component } from './layout/template2/template2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LiveComponent } from './app-details/live/live.component';
import { ScheduleComponent } from './app-details/schedule/schedule.component';
import { PreviewComponent } from './app-details/preview/preview.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CanvasjsSampleCodeComponent } from './canvasjs-sample-code/canvasjs-sample-code.component';
import { CanvasjsLineGraphComponent } from './canvasjs-line-graph/canvasjs-line-graph.component';
import { GooglePieChartComponent } from './google-pie-chart/google-pie-chart.component';
import { Ng2GaugeChartComponent } from './ng2-gauge-chart/ng2-gauge-chart.component';
import { AngularGaugeChartComponent } from './angular-gauge-chart/angular-gauge-chart.component';

import { TablecontrolService } from './tablecontrol.service';

import { LayoutService } from './layout/layout.service';

import { DraganddropService } from './draganddrop.service';

import { ModalModule } from './configuration/modal/modal.module';

import { from } from 'rxjs';

import {
    MatFormFieldModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
} from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        LayoutComponent,
        Teplate1Component,
        AppDetailsComponent,
        Template2Component,
        LiveComponent,
        ScheduleComponent,
        PreviewComponent,
        ConfigurationComponent,
        LineChartComponent,
        CanvasjsSampleCodeComponent,
        CanvasjsLineGraphComponent,
        GooglePieChartComponent,
        Ng2GaugeChartComponent,
        AngularGaugeChartComponent,
    ],
    imports: [
        GaugeChartModule,
        Ng2GaugeModule,
        GoogleChartsModule,
        ChartsModule,
        FormsModule,
        ModalModule,
        HttpClientModule,
        FlexLayoutModule,
        A11yModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        PortalModule,
        ScrollingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatButtonToggleModule,
        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule
    ],
    providers: [
        DragDropModule,
        CdkTableModule,
        TablecontrolService,
        LayoutService,
        DraganddropService,
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
