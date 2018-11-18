import {MenusConfigModel} from '../shared/model/menu-config-model';

export const menuconfig: MenusConfigModel[] = [
  {
    id: 'sandwich',
    prix: '2,97 €',
    plats: [
      {
        nom: 'un sandwich',
        pain: ['demi-baguette', 'pain de mie', 'pain suédois', 'du jour'],
        ingredient: ['du jambon', 'du poulet', 'du saucisson', 'du paté', 'du fromage'],
        accompagnements: ['beurre', 'cornichon', 'salade', 'tomates', 'mayonnaise', `huile d'olive`],
        dessert: null,
        complement: null,
        boisson: null
      }

    ]
  },
  {
    id: 'pique-nique',
    prix: '6,00 €',
    plats: [
      {
        nom: 'un sandwich',
        pain: ['demi-baguette', 'pain de mie', 'pain suédois', 'du jour'],
        ingredient: ['du jambon', 'du poulet', 'du saucisson', 'du paté', 'du fromage'],
        accompagnements: ['beurre', 'cornichon', 'salade', 'tomates', 'mayonnaise', `huile d'olive`],
        dessert: ['un fruit de saison', 'un yaourt nature', 'un yaourt aux fruits', 'un dessert du jour'],
        complement: ['un biscuit', 'un yaourt nature', 'un yaourt aux fruits'],
        boisson: [`de l'eau plate`, `de l'eau gazeuse`]
      },
      {
        nom: 'une salade',
        pain: null,
        ingredient: ['du jambon', 'du poulet', 'du thon', 'du fromage', 'des oeufs'],
        accompagnements: ['salade', 'tomates', 'crudités'],
        dessert: ['un fruit de saison', 'un yaourt nature', 'un yaourt aux fruits', 'un dessert du jour'],
        complement: ['un biscuit', 'un yaourt nature', 'un yaourt aux fruits'],
        boisson: [`de l'eau plate`, `de l'eau gazeuse`]
      },
      {
        nom: 'un plat du jour',
        pain: null,
        ingredient: null,
        accompagnements: null,
        dessert: ['un fruit de saison', 'un yaourt nature', 'un yaourt aux fruits', 'un dessert du jour'],
        complement: ['un biscuit', 'un yaourt nature', 'un yaourt aux fruits'],
        boisson: [`de l'eau plate`, `de l'eau gazeuse`]
      }

    ]
  },

];
