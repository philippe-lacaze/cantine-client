import { ControlValueAccessor } from '@angular/forms';
import { ElementRef } from '@angular/core';

/**
 * Implémentation de base d'un ControlValueAccessor typé basé sur une propriété innerValue.
 *
 * Utilisé en général comme super classe de composant custom.
 *
 */
export class ValueAccessorBase<T> implements ControlValueAccessor {

  /**
   * Valeur du composant.
   */
  private innerValue: T;

  /**
   * Listeners lorsque la value change
   */
  private changed = new Array<(value: T) => void>();

  /**
   * Listeners lorsque le composant est touched
   */
  private touched = new Array<() => void>();

  /**
   * Flag indiquant si l'attribut id est obligatoire sur le composant, false par défaut.
   * Valeur a éventuellement modifier dans les sous-classes.
   */
  protected isIdRequired = false;

  constructor(protected elementRef: ElementRef) {

  }

  /**
   * Retourne l'id du composant.
   */
  get id(): string {
    const id = this.elementRef.nativeElement.id || this.elementRef.nativeElement.getAttribute('ng-reflect-id');

    if (!id && this.isIdRequired) {
      if (console && console.log) {
        console.log('L attribut id DOIT être spécifié sur l instance de ce composant', this);
      }
    }

    return id;
  }

  /**
   * Setter de l'id de l'élément html du composant avec l'id donné.
   * @param id donné.
   */
  set id(id: string) {
    this.elementRef.nativeElement.id = id;
  }

  /**
   * Retourne la value du composant.
   * @returns la value du composant.
   */
  get value(): T {
    return this.innerValue;
  }


  /**
   * Setter de la value du composant.
   * @param value
   */
  set value(value: T) {
    if (this.innerValue !== value) {
      this.innerValue = value;
      this.fireValueChanged(value);
    }
  }

  /**
   * Signale change a tous les listeners pour la value donnée.
   * @param value donnée.
   */
  protected fireValueChanged(value: T): void {
    this.changed.forEach(f => f(value));
  }

  /**
   * Signale touch à tous les listeners.
   */
  touch(): void {
    this.touched.forEach(f => f());
  }


  /**
   * Modifie la value de innerValue avec celle donnée.
   * @param value donnée.
   */
  writeValue(value: T): void {
    this.innerValue = value;
  }


  /**
   * Abonne un listener a change.
   * @param fn listener
   */
  registerOnChange(fn: (value: T) => void): void {
    this.changed.push(fn);
  }


  /**
   * Abonne un listener a touched.
   * @param fn listener
   */
  registerOnTouched(fn: () => void): void {
    this.touched.push(fn);
  }
}
