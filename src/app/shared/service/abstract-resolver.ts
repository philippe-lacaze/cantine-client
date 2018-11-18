import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AbstractDao} from './abstract-dao';
import {Observable} from 'rxjs/index';

/**
 * Classe abstraite d'un resolver basé sur un AbstractDao.
 */
export abstract class AbstractResolver<T> implements Resolve<T[]> {

  constructor(protected dao: AbstractDao<T>) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<T[]> | Promise<T[]> | T[] {
    return this.dao.fetch();
  }
}
