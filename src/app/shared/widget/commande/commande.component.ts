import {Component, Input, OnInit} from '@angular/core';
import {CommandeModel} from '../../model/commande-model';


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
