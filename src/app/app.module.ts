import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {MockData} from './mock/mockdata';
import { AccueilComponent } from './page/accueil/accueil.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import {environment} from '../environments/environment';

const imports: any = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  SharedModule,
  /*ServiceWorkerModule.register('/ngsw-worker.js',{enabled: environment.production})*/
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
