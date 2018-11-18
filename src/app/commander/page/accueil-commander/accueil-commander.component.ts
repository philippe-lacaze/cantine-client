import {ChangeDetectorRef, Component, Inject, InjectionToken, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommandeModel} from '../../../shared/model/commande-model';
import {MenusConfigModel} from '../../../shared/model/menu-config-model';
import {AbstractSmartEntityComponent} from '../../shared/widget/abstract-smart-component';
import {ApplicationService} from '../../../shared/service/application.service';
import {CommandeService} from '../../../shared/service/commande.service';

export const WINDOW = new InjectionToken('WindowToken');

/**
 * Smart component principal affichant la page permettant de passer commande.
 */
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil-commander.component.html',
  styleUrls: ['./accueil-commander.component.scss'],
  providers: [{provide: WINDOW, useValue: window}]
})
export class AccueilCommanderComponent
  extends AbstractSmartEntityComponent<MenusConfigModel[]>
  implements OnInit, OnDestroy {

  commande: CommandeModel;
  listeMenuConfig: MenusConfigModel[];

  isPrintingMode = false;

  private mediaQueryListPrint;
  private mediaQueryListScreen;

  get entityName() {
    return 'MenuConfigModel';
  }

  constructor(activatedRoute: ActivatedRoute,
              public application: ApplicationService,
              private commandeService: CommandeService,
              @Inject(WINDOW) public window: Window,
              private changeDetectorRef: ChangeDetectorRef) {
    super(activatedRoute);
    this.listeMenuConfig = this.entity;
  }

  ngOnInit() {
    this.commande = new CommandeModel();
    this.commandeService.commandeCourante = this.commande;
    this.onPrintListener();
  }

  /**
   * Permet de réagir au passage à une demande d'impression de façon a afficher une vue dédiée.
   */
  private onPrintListener() {
    this.mediaQueryListPrint = this.window.matchMedia('print');
    this.mediaQueryListPrint.addListener(this.onPrint);
  }

  /**
   * Callback activé sur demande d'impression, passant la vue en mode impression.
   * @param mql
   */
  private onPrint = (mql) => {
    if (mql.matches) {
      this.isPrintingMode = true;
      this.changeDetectorRef.detectChanges();
      this.mediaQueryListScreen = this.window.matchMedia('screen');
      this.mediaQueryListScreen.addListener(this.onScreen);
    }
  }

  /**
   * Callback activé lorsqu'on quitte la demande d'impression, repassant la vue en mode normal.
   * @param mql
   */
  private onScreen = (mql) => {
    if (mql.matches) {
      this.isPrintingMode = false;
      this.changeDetectorRef.detectChanges();
      this.mediaQueryListScreen.removeListener(this.onScreen);
    }
  }

  ngOnDestroy() {
    this.mediaQueryListPrint.removeListener(this.onPrint);
  }

}
