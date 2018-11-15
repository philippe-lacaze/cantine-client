import { Injectable } from '@angular/core';
import {AbstractResolver} from './abstract-resolver';
import {MenuConfigService} from './menu-config.service';
import {MenusConfigModel} from '../model/menu-config-model';

@Injectable({
  providedIn: 'root'
})
export class MenuConfigResolverService extends AbstractResolver<MenusConfigModel> {

  constructor(service: MenuConfigService) {
    super(service);
  }
}
