import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommandeModel} from '../../../shared/model/commande-model';
import {MenusConfigModel} from '../../../shared/model/menu-config-model';
import {AbstractSmartEntityComponent} from '../../shared/widget/abstract-smart-component';
import {ApplicationService} from '../../../shared/service/application.service';
import {CommandeService} from '../../../shared/service/commande.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil-commander.component.html',
  styleUrls: ['./accueil-commander.component.scss']
})
export class AccueilCommanderComponent extends AbstractSmartEntityComponent<MenusConfigModel[]> implements OnInit {

  commande: CommandeModel;
  listeMenuConfig: MenusConfigModel[];

  get entityName() {
    return 'MenuConfigModel';
  }

  constructor(activatedRoute: ActivatedRoute,
              public application: ApplicationService,
              private commandeService: CommandeService) {
    super(activatedRoute);
    this.listeMenuConfig = this.entity;
  }

  ngOnInit() {
    this.commande = new CommandeModel();
  }

}
