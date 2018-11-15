import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MenusConfigModel} from '../model/menu-config-model';
import {AbstractDao} from './abstract-dao';
import {CommandeModel} from '../model/commande-model';

@Injectable({
  providedIn: 'root'
})
export class MenuConfigService extends AbstractDao<MenusConfigModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url =  '/menuconfig';
  }
}
