import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MenusConfigModel, PlatConfigModel} from '../../../../shared/model/menu-config-model';
import {CommandeModel} from '../../../../shared/model/commande-model';
import {CommandeService} from '../../../../shared/service/commande.service';
import {MatSnackBar, MatSnackBarConfig, MatStepper} from '@angular/material';
import {resetComponentState} from '@angular/core/src/render3/instructions';
import {AbstractControl, NgForm} from '@angular/forms';
import {isCombinedModifierFlagSet} from 'tslint';

@Component({
  selector: 'app-commander',
  templateUrl: './commander.component.html',
  styleUrls: ['./commander.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommanderComponent implements OnInit {

  newCommande = true;

  @Input()
  listeMenuConfig: MenusConfigModel[];

  @Input()
  set commande(commande: CommandeModel) {
    if (this.stepper) {
      this.stepper.selectedIndex = 0
    }
    this._commande = commande;
    if (commande && commande.menu) {
      this.initilalizeMenuConfigFromMenu();
      this.newCommande = false;
    }
    if (commande && commande.plat) {
      this.initializePlatConfigFromPlat();
    }
  }

  @ViewChild('stepper')
  stepper: MatStepper;


  @ViewChild('f')
  form: NgForm;

  get commande() {
    return this._commande;
  }

  private _commande: CommandeModel;

  listeMenus: string[];
  menuConfig: MenusConfigModel;

  listePlats: string[];
  platConfig: PlatConfigModel;

  listePains: string[];
  listeIngredients: string[];
  listeAccompagenents: string[];
  listeDesserts: string[];
  listeComplements: string[];
  listeBoissons: string[];

  constructor(private commandeService: CommandeService,
              private snackBar: MatSnackBar) {
    this.newCommande = true;
  }

  get plusieurPains(): boolean {
    return this.listePains && this.listePains.length > 1;
  }

  ngOnInit() {
    this.listeMenus = this.listeMenuConfig.map(v => v.id);
  }


  onChangeMenu(theMenu: string) {

    const menu = theMenu || this.commande.menu;

    if (menu) {

      this.commande.menu = menu;
      this.initilalizeMenuConfigFromMenu();
      this.commande.plat = null;

      if (this.listePlats.length === 1) {
        this.commande.plat = this.listePlats[0];
        this.onChangePlat();
      } else {
        this.resetCommande();
      }

    }

  }

  private initilalizeMenuConfigFromMenu() {
    this.menuConfig = this.listeMenuConfig.find(m => m.id === this.commande.menu);
    this.listePlats = this.menuConfig.plats.map(plat => plat.nom);
  }

  onChangePlat() {
    this.resetCommande();
    this.initializePlatConfigFromPlat();
  }

  private initializePlatConfigFromPlat() {
    this.platConfig = this.menuConfig.plats.find(plat => plat.nom === this.commande.plat);
    this.listePains = this.platConfig.pain;
    this.listeIngredients = this.platConfig.ingredient;
    this.listeAccompagenents = this.platConfig.accompagnements;
    this.listeDesserts = this.platConfig.dessert;
    this.listeComplements = this.platConfig.complement;
    this.listeBoissons = this.platConfig.boisson;
  }

  private resetCommande() {
    this.commande.boisson = null;
    this.commande.complement = null;
    this.commande.dessert = null;
    this.commande.pain = null;
    this.commande.ingredient = null;
    this.commande.accompagnements = [];
  }

  onAccompagnementChange() {

  }

  onCommander() {
    if (this.commande && this.commande.client && this.commande.dateCommande
      && !this.form.invalid) {
      this.commande.clientDate = this.commande.client + this.commande.dateCommande.replace(/\//g, '');
      this.commande.id = this.commande.clientDate;
      this.commandeService.create(this.commande)
        .subscribe((commande => {
          this.newCommande = false;
          this.snackBar.open('Votre commande a été envoyée', 'Annuler', {duration: 3000} as MatSnackBarConfig)
            .onAction().subscribe(() => {
            this.commandeService.delete(commande).subscribe(
              () => {
                this.snackBar.open('Votre commande a été annulée', '', {duration: 3000} as MatSnackBarConfig)
                this.newCommande = true;
              }
            );
          });
        }));
    } else {
      this.snackBar.open(`Impossible d'envoyer la commande, il reste des champs non remplis`, '', {duration: 3000} as MatSnackBarConfig);
    }
  }


  onChangeClientOrDate() {
    this.commande.clientDate = this.commande.client + this.commande.dateCommande.replace(/\//g, '');
    this.commandeService.read(this.commande.clientDate)
      .subscribe(commande => {
        if (commande) {
          this.commande = commande;
          this.snackBar.open('Une commande existe pour ce nom à cette date', '', {duration: 3000} as MatSnackBarConfig)
        }
      }, (error) => {
        this.snackBar.open('Aucune commande pour ce nom et cette date', '', {duration: 1500} as MatSnackBarConfig);
      });
  }

  hasError(control: AbstractControl) {
    return control.invalid && (control.dirty || control.touched);
  }

  getStatus(): string {
    if (this.commande) {
      if (this.newCommande) {
        return this.form.invalid ? 'incomplète' : 'modifiable';
      } else {
        return this.commande.traitee ? 'traitée' : 'envoyée';
      }
    }
    return '';
  }

  getTitleCommander(): string {
    if (this.commande && !this.commande.menu) {
      return 'Consultez une commande';
    } else {
      return 'Votre commande';
    }
  }

}
