export class PlatConfigModel {
  nom: string;
  pain?: string[];
  ingredient?: string[];
  accompagnements?: string[];
  dessert?: string[];
  complement?: string[];
  boisson?: string[];

}

export class MenusConfigModel {
  id: string;
  plats: PlatConfigModel[];
}
