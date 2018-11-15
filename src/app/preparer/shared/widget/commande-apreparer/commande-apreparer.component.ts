import {Component, Input, OnInit} from '@angular/core';
import {CommandeModel} from '../../../../shared/model/commande-model';

@Component({
  selector: 'app-commande-apreparer',
  templateUrl: './commande-apreparer.component.html',
  styleUrls: ['./commande-apreparer.component.scss']
})
export class CommandeAPreparerComponent implements OnInit {

  @Input()
  commande: CommandeModel;

  constructor() { }

  ngOnInit() {
  }

}
