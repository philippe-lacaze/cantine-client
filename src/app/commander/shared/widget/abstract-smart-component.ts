import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';

/**
 * Classe abstraite d'un smart composant récupérant des données nécessaire dans la route (chargée par
 * resolver).
 */
export abstract class AbstractSmartEntityComponent<T> {

  entity: T;
  protected abstract get entityName(): string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.fetchEntity();
  }

  private fetchEntity() {
    this.entity = this.activatedRoute.snapshot.data[this.entityName] as T;
  }
}
