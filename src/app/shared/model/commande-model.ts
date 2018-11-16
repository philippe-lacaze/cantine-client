export interface Commande {
  id?: string;
  client?: string;
  dateCommande?: string;
  clientDate?: string;
  menu?: string;
  plat?: string;
  pain?: string;
  ingredient?: string;
  accompagnements?: string[];
  dessert?: string;
  complement?: string;
  boisson?: string;
  traitee: boolean;
}

export class CommandeModel implements Commande {
  id: string;
  client: string;
  dateCommande: string = new Date().toLocaleDateString();
  clientDate: string;
  menu: string;
  plat: string;
  pain?: string;
  ingredient?: string;
  accompagnements?: string[] = [];
  dessert?: string;
  complement?: string;
  boisson?: string;
  traitee = false;

  constructor(commande: Commande = null) {
    if (commande) {
      Object.assign(this, commande);
    }
  }

  static withThat(s1: string, s2: string, s3 = ''): string {
    return s2 ? s1 + s2 + s3 : '';
  }

  display() {
    return `${CommandeModel.withThat('', this.client, ` commande dans le`)} ` +
      `${CommandeModel.withThat('menu ', this.menu)} ` +
      `${CommandeModel.withThat(', ', this.plat)} ` +
      `${CommandeModel.withThat('', this.pain)} ` +
      `${CommandeModel.withThat('avec ', this.ingredient)} ` +
      `${CommandeModel.withThat('garni de ', this.accompagnements ? this.accompagnements.join(', ') : '')}` +
      `${CommandeModel.withThat(', avec comme dessert ', this.dessert)}` +
      `${CommandeModel.withThat(', comme complément ', this.complement)}` +
      `${CommandeModel.withThat(', et comme boisson ', this.boisson)}`;
    ;
  }
}
