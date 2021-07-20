import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BASE_PATH} from 'training-tracker-sdk-angular';
import {HttpClientModule} from '@angular/common/http';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: BASE_PATH, useValue: environment.apiBaseUrl}],
  bootstrap: [AppComponent]
})
export class AppModule { }
