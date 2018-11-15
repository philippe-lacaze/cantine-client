import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanderRoutingModule } from './commander-routing.module';
import {SharedModule} from '../shared/shared.module';
import {CommanderComponent} from './shared/widget/commander/commander.component';
import {AccueilCommanderComponent} from './page/accueil-commander/accueil-commander.component';
import { LayoutComponent } from './layout/layout.component';
import { ChoixSimpleComponent } from './shared/widget/choix-simple/choix-simple.component';
import { ChoixMultipleComponent } from './shared/widget/choix-multiple/choix-multiple.component';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MAT_MOMENT_DATE_FORMATS} from '@angular/material-moment-adapter';

@NgModule({
  imports: [
    CommonModule,
    CommanderRoutingModule,
    SharedModule
  ],
  declarations: [
    AccueilCommanderComponent,
    CommanderComponent,
    LayoutComponent,
    ChoixSimpleComponent,
    ChoixMultipleComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr'},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class CommanderModule { }
