import { Component, OnInit } from '@angular/core';
import {MenuConfigService} from '../../shared/service/menu-config.service';
import {MenusConfigModel} from '../../shared/model/menu-config-model';

@Component({
  selector: 'app-accueil-administrer',
  templateUrl: './accueil-administrer.component.html',
  styleUrls: ['./accueil-administrer.component.scss']
})
export class AccueilAdministrerComponent implements OnInit {

  configs: MenusConfigModel[];

  constructor(private configService: MenuConfigService) { }

  ngOnInit() {
    this.configService.fetch().subscribe((configs) => this.configs = configs);
  }

}
