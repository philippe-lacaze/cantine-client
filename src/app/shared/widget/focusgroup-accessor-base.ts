import { ElementRef, HostBinding, HostListener } from '@angular/core';
import { ValueAccessorBase } from './value-accessor-base';


/**
 * Extension de ValueAccessorBase pour les composants custom se comportant comme des compositions d'él"ments de contrôles
 * HTML comme par exemple les listes de choix qui génèrent des inputs radio ou checkbox et "composent" c.a.d.
 * synthétisent les saisies dans leur propre value.
 *
 * Ce composant factorise les comportements suivants :
 * <ul>
 * <li>ajout de la classe css focusgroup qui permet de gérer ce type de custom élément correctement dans la css
 * <li>définition d'un flag isIdRequired=true par défaut pour générer les id des sous-éléments
 * <li>capture des évènements focusout pour détecter qd un des inputs généré rend le focus et appeler
 * automatiquement super.touch()
 * <li>Ajout d'un HostBinding rajoutant la classe css focused sur le custom élément de façon a signaler qu'il a le focus.
 */
export class FocusgroupAccessorBase<T> extends ValueAccessorBase<T> {

  /**
   * Flag reflétant si le composant custom "a le focus", c.a.d. qu'un des sous-élement qu'il a généré a actuellementt
   * le focus.
   */
  private internalFocused = false;

  /**
   * Construit une instance a partir des paramètres fournis et rajoute la classe css 'focusgroup" sur l'élément HTML.
   * @param elementRef donné.
   */
  constructor(elementRef: ElementRef) {
    super(elementRef);
    elementRef.nativeElement.classList.add('focusgroup');
    this.isIdRequired = true;
  }

  /**
   * Quand on perd le focus sur un des sous composants alors on considère qu'on a touched le composant.
   */
  @HostListener('focusout')
  onFocusOut(): void {
    this.internalFocused = false;
    super.touch();
  }


  /**
   * Quand on gagne le focus sur un des sous composants alors on considère qu'on a touched le composant.
   */
  @HostListener('focusin')
  onFocusIn(): void {
    this.internalFocused = true;
  }

  /**
   * Rajoute une classe css focused sur l'élément custorm pour matérialiser qu'il a le focus, c.a.d. un de ces
   * sous-éléments a le focus.
   * @return  true si this.internalFocused === true.
   */
  @HostBinding('class.focused')
  get focused(): boolean {
    return (true === this.internalFocused);
  }

}
