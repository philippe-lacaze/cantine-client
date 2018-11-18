import {Component, Input, OnInit} from '@angular/core';
import {CommandeModel} from '../../model/commande-model';

/**
 * Dumb component affichant sous forme de texte le contenu d'une commande.
 */
@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  @Input()
  commande: CommandeModel;

  private internalCommande = new CommandeModel();
  constructor() { }

  ngOnInit() {
  }

  displayCommande(): string {
    return this.internalCommande.display.apply(this.commande);
  }

}
