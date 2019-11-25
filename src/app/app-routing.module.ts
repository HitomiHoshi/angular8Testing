import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { Teplate1Component } from './layout/teplate1/teplate1.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { Template2Component } from './layout/template2/template2.component';
import { LiveComponent } from './app-details/live/live.component';
import { ScheduleComponent } from './app-details/schedule/schedule.component';
import { PreviewComponent } from './app-details/preview/preview.component';

const routes: Routes = [
  { path: '', redirectTo: 'template1', pathMatch: 'full' },
  { path: 'template1', component: Teplate1Component },
  // { path: 'details', redirectTo: 'schedule', pathMatch: 'full' },
  { path: 'details', component: AppDetailsComponent },
  { path: 'template2', component: Template2Component },
  { path: 'live', component: LiveComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'preview', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
