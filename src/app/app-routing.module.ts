import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Teplate1Component } from './layout/teplate1/teplate1.component';
import { Template2Component } from './layout/template2/template2.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { LiveComponent } from './app-details/live/live.component';
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
    { path: 'modals', component: ModalsComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
