import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

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
import { ModalsComponent, ModalsDialog } from './modals/modals.component';

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
        ModalsComponent,
        ModalsDialog,
    ],
    imports: [
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
    ],
    entryComponents: [
        ModalsComponent,
        ModalsDialog,
    ]
})
export class AppModule { }
