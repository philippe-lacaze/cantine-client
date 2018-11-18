import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrerRoutingModule } from './administrer-routing.module';
import { AccueilAdministrerComponent } from './accueil-administrer/accueil-administrer.component';
import {SharedModule} from '../shared/shared.module';

/**
 * Feature module routé de la partie administrative de l'appli.
 */
@NgModule({
  declarations: [AccueilAdministrerComponent],
  imports: [
    CommonModule,
    AdministrerRoutingModule,
    SharedModule
  ]
})
export class AdministrerModule { }
