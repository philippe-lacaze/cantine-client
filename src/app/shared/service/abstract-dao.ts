import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';

/**
 * Classe abstraite d'un dao CRUD pour une donnée de type T donné.
 */
export class AbstractDao<T> {

  protected base = '/api';
  protected url;

  constructor(protected httpClient: HttpClient) {
  }

  /**
   * Retourne un Observable sur l'entité d'id donné.
   * @param {string} id
   * @returns {Observable<T>}
   */
  read(id: string): Observable<T> {
    return this.httpClient.get<T>(this.base + this.url + '/' + id)
      .pipe(tap(
        data => console.log('read ', data),
        error => console.error('read error ', error)
      ));
  }

  /**
   * Retoure un Observable sur la collection d'entité.
   * @returns {Observable<T[]>}
   */
  fetch(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.base + this.url)
      .pipe(tap(
      data => console.log('fetch ', data),
      error => console.error('fetch error ', error)
    ));
  }

  /**
   * Crée l'entité donnée et retourne un Observable dessus.
   * @param {T} entity
   * @returns {Observable<T>}
   */
  create(entity: T): Observable<T> {
    return this.httpClient.post<T>(this.base + this.url, entity)
      .pipe(tap(
        data => console.log('post ', data),
        error => console.error('post error ', error)
      ));
  }

  /**
   * Maj l'entité donné et retourne un Observable dessus.
   * @param {T} entity
   * @returns {Observable<T>}
   */
  update(entity: T): Observable<T> {
    return this.httpClient.put<T>(this.base + this.url, entity)
      .pipe(tap(
        data => console.log('update ', data),
        error => console.error('update error ', error)
      ));
  }

  /**
   * Supprime l'entité donnée.
   * @param {T} entity
   * @returns {Observable<T>}
   */
  delete(entity: T): Observable<T> {
    return this.httpClient.delete<T>(this.base + this.url + '/' + entity['id'])
      .pipe(tap(
        data => console.log('delete ', data),
        error => console.error('delete error ', error)
      ));
  }
}
