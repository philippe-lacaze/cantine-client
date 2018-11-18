/**
 * Configuration d'un plat du menu.
 */
export class PlatConfigModel {
  nom: string;
  pain?: string[];
  ingredient?: string[];
  accompagnements?: string[];
  dessert?: string[];
  complement?: string[];
  boisson?: string[];
}

/**
 * Configuration du menu.
 */
export class MenusConfigModel {
  id: string;
  plats: PlatConfigModel[];
  prix?: string;
}
