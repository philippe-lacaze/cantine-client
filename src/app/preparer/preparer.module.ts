import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparerRoutingModule } from './preparer-routing.module';
import { AccueilPreparerComponent } from './page/accueil-preparer/accueil-preparer.component';
import {SharedModule} from '../shared/shared.module';
import { CommandeAPreparerComponent } from './shared/widget/commande-apreparer/commande-apreparer.component';

@NgModule({
  declarations: [AccueilPreparerComponent, CommandeAPreparerComponent],
  imports: [
    CommonModule,
    PreparerRoutingModule,
    SharedModule
  ]
})
export class PreparerModule { }
