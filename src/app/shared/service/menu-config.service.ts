import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MenusConfigModel} from '../model/menu-config-model';
import {AbstractDao} from './abstract-dao';
import {Observable, of} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';
import {menuconfig} from '../../mock/mockMenuConfig';

/**
 * Service d'accès a la config des menus.
 */
@Injectable({
  providedIn: 'root'
})
export class MenuConfigService extends AbstractDao<MenusConfigModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.url =  '/menuconfig';
  }

  fetch(): Observable<MenusConfigModel[]> {
    return of(menuconfig)
      .pipe(tap(
        data => console.log('fetch ', data),
        error => console.error('fetch error ', error)
      ));
  }
}
