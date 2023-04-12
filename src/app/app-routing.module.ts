import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

import { PagesComponent } from './telechargement/pages.component';

import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './absence/statistics.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},

  {path: 'absence/:id', component: StatisticsComponent},

  {path: 'telecharger/:id', component: PagesComponent},

  {path: 'settings', component: SettingsComponent},
  
  {path : 'logout', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
