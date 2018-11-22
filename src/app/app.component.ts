import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/index';
import {CommandeModel} from './shared/model/commande-model';
import {tap} from 'rxjs/internal/operators';
import {ApplicationService} from './shared/service/application.service';
import {PwaService} from './shared/service/pwa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  commandes: any[] = [];

  constructor(private changeDetector: ChangeDetectorRef,
              public application: ApplicationService,
              public pwa: PwaService) {
  }

  ngOnInit(): void {
    // this.listenSSE();
  }

  private listenSSE() {
    Observable.create(observer => {
      const eventSource = new EventSource('http://localhost:8080/api/commande/message');
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
        this.commandes.push(event);
        this.changeDetector.detectChanges();
      },
      error => console.log('error ', error))).subscribe();
  }

  installPwa() {
    this.pwa.promptEvent.prompt();
  }
}
