import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuConfigResolverService} from '../shared/service/menu-config-resolver.service';
import {AccueilCommanderComponent} from './page/accueil-commander/accueil-commander.component';
import {LayoutComponent} from './layout/layout.component';


const routes: Routes = [{
  path: '',
  component: LayoutComponent,

  children: [
    {
      path: '',
      redirectTo: 'commanderAccueil',
      pathMatch: 'full'
    },
    {
      path: 'commanderAccueil',
      component: AccueilCommanderComponent,
      resolve: {
        MenuConfigModel: MenuConfigResolverService
      }
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommanderRoutingModule {
}
