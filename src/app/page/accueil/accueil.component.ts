import {Component, OnInit} from '@angular/core';
import {ApplicationService} from '../../shared/service/application.service';
import {ViewEncapsulation} from '@angular/cli/lib/config/schema';


@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  constructor(private application: ApplicationService) {
  }


}
