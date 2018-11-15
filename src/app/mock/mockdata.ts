import {InMemoryDbService} from 'angular-in-memory-web-api';
import {menuconfig} from './mockMenuConfig';
import {commande} from './mockCommande';

export class MockData implements InMemoryDbService {
  createDb() {
    return {
      menuconfig,
      //commande
    };
  }
}
