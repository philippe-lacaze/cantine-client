import {ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractSmartEntityComponent} from '../../../commander/shared/widget/abstract-smart-component';
import {CommandeModel} from '../../../shared/model/commande-model';
import {CommandeService} from '../../../shared/service/commande.service';
import {takeUntil, tap} from 'rxjs/internal/operators';
import {Subject} from 'rxjs/index';
import {CommandeCrudAction} from '../../../shared/model/commande-crud-action';
import {MatSlideToggleChange} from '@angular/material';

@Component({
  selector: 'app-accueil-preparer',
  templateUrl: './accueil-preparer.component.html',
  styleUrls: ['./accueil-preparer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AccueilPreparerComponent implements OnInit, OnDestroy {

  commandes: CommandeModel[] = [];
  private unsubscribeSubject: Subject<void>;

  constructor(private commandeService: CommandeService,
              private changeDetector: ChangeDetectorRef) {
  }

  ngOnInit() {
    console.log('AccueilPreparerComponent.ngOnInit ');
    this.unsubscribeSubject = new Subject();
    this.commandeService.fetchMessage()
      .pipe(
        takeUntil(this.unsubscribeSubject),
      )
      .subscribe(
        (crudAction: CommandeCrudAction) => {
          console.log('SSE receiving ', crudAction);
          this.doCrudAction(crudAction);
          this.changeDetector.detectChanges();
        },
        error => console.error('Error receiving SSE ', error),
        () => console.log('Completing SSE')
      );
  }


  ngOnDestroy() {
    this.unsubscribeSubject.next();
  }

  onChange(change: MatSlideToggleChange, commande) {
    commande.traitee = change.checked;
    this.commandeService.update(commande).subscribe();
  }

  doCrudAction(crudAction: CommandeCrudAction) {
    if (crudAction.action === 'READ' || crudAction.action === 'CREATE') {
      this.commandes.push(crudAction.entity);
    } else if (crudAction.action === 'UPDATE') {
      const index = this.commandes.findIndex(cmd => cmd.id === crudAction.entity.id);
      if (index > -1) {
        this.commandes[index] = crudAction.entity;
      } else {
        this.commandes.push(crudAction.entity);
      }
    }
  }
}
