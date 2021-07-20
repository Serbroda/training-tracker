import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BASE_PATH} from 'training-tracker-sdk-angular';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: BASE_PATH, useValue: environment.apiBaseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
