import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BASE_PATH } from 'training-tracker-sdk-angular';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { RunChartComponent } from './components/charts/run-chart/run-chart.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
    declarations: [AppComponent, SidenavComponent, DashboardComponent, SettingsComponent, RunChartComponent, ChartComponent],
    imports: [HttpClientModule, BrowserModule, AppRoutingModule, FontAwesomeModule],
    providers: [{ provide: BASE_PATH, useValue: environment.apiBaseUrl }],
    bootstrap: [AppComponent],
})
export class AppModule {}
