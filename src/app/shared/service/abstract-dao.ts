import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';

export class AbstractDao<T> {

  protected base = '/api';
  protected url;

  constructor(protected httpClient: HttpClient) {
  }

  read(id: string): Observable<T> {
    return this.httpClient.get<T>(this.base + this.url + '/' + id)
      .pipe(tap(
        data => console.log('read ', data),
        error => console.error('read error ', error)
      ));
  }

  fetch(): Observable<T[]> {
    return this.httpClient.get<T[]>(this.base + this.url)
      .pipe(tap(
      data => console.log('fetch ', data),
      error => console.error('fetch error ', error)
    ));
  }

  create(entity: T): Observable<T> {
    return this.httpClient.post<T>(this.base + this.url, entity)
      .pipe(tap(
        data => console.log('post ', data),
        error => console.error('post error ', error)
      ));
  }

  update(entity: T): Observable<T> {
    return this.httpClient.put<T>(this.base + this.url, entity)
      .pipe(tap(
        data => console.log('update ', data),
        error => console.error('update error ', error)
      ));
  }

  delete(entity: T): Observable<T> {
    return this.httpClient.delete<T>(this.base + this.url + '/' + entity['id'])
      .pipe(tap(
        data => console.log('delete ', data),
        error => console.error('delete error ', error)
      ));
  }
}
