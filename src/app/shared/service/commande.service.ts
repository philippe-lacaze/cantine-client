import {Injectable} from '@angular/core';
import {AbstractDao} from './abstract-dao';
import {CommandeModel} from '../model/commande-model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {tap} from 'rxjs/internal/operators';
import {CommandeCrudAction} from '../model/commande-crud-action';

/**
 * Service d'accès aux commandes.
 */
@Injectable({
  providedIn: 'root'
})
export class CommandeService extends AbstractDao<CommandeModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient);
    // this.url =  '/commande';
    this.base = '';
    this.url = 'https://serene-forest-85695.herokuapp.com/api/commande';
    // this.url = 'http://localhost:8080/api/commande';
  }

  commandeCourante: CommandeModel;

  fetchMessage(): Observable<CommandeCrudAction> {
    console.log('CommandeService.fetchMessage')
    return Observable.create(observer => {
      const eventSource = new EventSource(this.url + '/message');
      eventSource.onmessage = x => {
        console.log('onmessage x=', x);
        observer.next(JSON.parse(x.data));
      };
      eventSource.onerror = x => {
        console.error('onerror x=', x);
        observer.error(x);
      };

      return () => {
        eventSource.close();
      };
    }).pipe(tap(event => {
        console.log('event ', event);
      },
      error => console.log('error ', error)));
  }
}
