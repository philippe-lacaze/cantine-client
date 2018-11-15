import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuConfigResolverService} from './shared/service/menu-config-resolver.service';
import {AccueilComponent} from './page/accueil/accueil.component';

const routes: Routes = [
  {
    path: '',

    children: [
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full'
      },
      {
        path: 'accueil',
        component: AccueilComponent,
      },
      {
        path: 'commander',
        loadChildren: './commander/commander.module#CommanderModule'
      },
      {
        path: 'preparer',
        loadChildren: './preparer/preparer.module#PreparerModule'
      },
      {
        path: 'admin',
        loadChildren: './administrer/administrer.module#AdministrerModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
