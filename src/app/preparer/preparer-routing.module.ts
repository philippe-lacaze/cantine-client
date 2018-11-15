import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AccueilPreparerComponent} from './page/accueil-preparer/accueil-preparer.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: 'preparerAccueil',
        pathMatch: 'full'
      },
      {
        path: 'preparerAccueil',
        component: AccueilPreparerComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreparerRoutingModule {
}
