import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {environment} from '../environments/environment';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockData} from './mock/mockdata';
import { AccueilComponent } from './page/accueil/accueil.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

const imports: any = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  SharedModule
];

if (!environment.production) {
  imports.push(
    InMemoryWebApiModule.forRoot(MockData,
      {apiBase: 'api', passThruUnknownUrl: true}
    ));
}


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent
  ],
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
