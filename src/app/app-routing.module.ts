import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { Teplate1Component } from './layout/teplate1/teplate1.component';
import { AppDetailsComponent } from './app-details/app-details.component';
import { Template2Component } from './layout/template2/template2.component';

const routes: Routes = [
  { path: '', redirectTo: 'details', pathMatch: 'full' },
  { path: 'template1', component: Teplate1Component },
  { path: 'details', component: AppDetailsComponent },
  { path: 'template2', component: Template2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
