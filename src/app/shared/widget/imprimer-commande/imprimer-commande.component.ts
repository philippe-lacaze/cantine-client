import {Component, Input, OnInit} from '@angular/core';
import {Commande, CommandeModel} from '../../model/commande-model';
import {MenusConfigModel} from '../../model/menu-config-model';
import {MenuConfigService} from '../../service/menu-config.service';
import {CommandeService} from '../../service/commande.service';

/**
 * Dumb component permettant d'afficher une commande prête a imprimer.
 */
@Component({
  selector: 'app-imprimer-commande',
  templateUrl: './imprimer-commande.component.html',
  styleUrls: ['./imprimer-commande.component.scss']
})
export class ImprimerCommandeComponent implements OnInit {

  @Input() commande: CommandeModel;

  @Input() listeMenuConfig: MenusConfigModel[];

  constructor() {
  }

  ngOnInit() {
  }


}
