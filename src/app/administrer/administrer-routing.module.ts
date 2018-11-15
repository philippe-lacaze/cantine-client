import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilAdministrerComponent} from './accueil-administrer/accueil-administrer.component';
const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: 'administrerAccueil',
        pathMatch: 'full'
      },
      {
        path: 'administrerAccueil',
        component: AccueilAdministrerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrerRoutingModule { }
