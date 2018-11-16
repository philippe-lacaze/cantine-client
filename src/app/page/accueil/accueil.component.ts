import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../shared/service/application.service';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';
import {CommandeService} from '../../shared/service/commande.service';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private application: ApplicationService,
              private commandeService: CommandeService) {
  }


  ngOnInit(): void {
    // On veut juste réveille l'instance Héroku
    this.commandeService.read('toto').subscribe();

  }
}
