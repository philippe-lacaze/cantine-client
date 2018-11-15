(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["commander-commander-module"],{

/***/ "./node_modules/zia-composants/fesm5/zia-composants.js":
/*!*************************************************************!*\
  !*** ./node_modules/zia-composants/fesm5/zia-composants.js ***!
  \*************************************************************/
/*! exports provided: ValueAccessorBase, FocusgroupAccessorBase, GenericStates, States, StatesWithTransitions, ActionStateSupportContext, ActionStateSupportService, FormActionStateSupportService, State, StateTransition, StateTransitionByKey, StateWithTransitions, NavigationStateApp, NavigationStateGuardService, NavigationStateService, ZiaNavigationStateModule, ZiaActionBarModule, ActionEnum, actionEnumToString, ZiaActionBarComponent, ZiaActionPanelComponent, ZiaActionPanelModule, ZiaFormActionPanelComponent, ZiaStateBarModule, ZiaStateBarComponent, ZiaStateBarLabelDirective, ZiaStateWizardModule, ZiaStateWizardComponent, FormUtilsService, FocusService, ZiaComposantsModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueAccessorBase", function() { return ValueAccessorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusgroupAccessorBase", function() { return FocusgroupAccessorBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericStates", function() { return GenericStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "States", function() { return States; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatesWithTransitions", function() { return StatesWithTransitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStateSupportContext", function() { return ActionStateSupportContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionStateSupportService", function() { return ActionStateSupportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormActionStateSupportService", function() { return FormActionStateSupportService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTransition", function() { return StateTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateTransitionByKey", function() { return StateTransitionByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateWithTransitions", function() { return StateWithTransitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationStateApp", function() { return NavigationStateApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationStateGuardService", function() { return NavigationStateGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationStateService", function() { return NavigationStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaNavigationStateModule", function() { return ZiaNavigationStateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaActionBarModule", function() { return ZiaActionBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionEnum", function() { return ActionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionEnumToString", function() { return actionEnumToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaActionBarComponent", function() { return ZiaActionBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaActionPanelComponent", function() { return ZiaActionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaActionPanelModule", function() { return ZiaActionPanelModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaFormActionPanelComponent", function() { return ZiaFormActionPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaStateBarModule", function() { return ZiaStateBarModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaStateBarComponent", function() { return ZiaStateBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaStateBarLabelDirective", function() { return ZiaStateBarLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaStateWizardModule", function() { return ZiaStateWizardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaStateWizardComponent", function() { return ZiaStateWizardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormUtilsService", function() { return FormUtilsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusService", function() { return FocusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZiaComposantsModule", function() { return ZiaComposantsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NAVIGATION_STATE_TOKEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");









/**
 * Implémentation de base d'un ControlValueAccessor typé basé sur une propriété innerValue.
 *
 * Utilisé en général comme super classe de composant custom.
 *
 */
var ValueAccessorBase = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function ValueAccessorBase(elementRef) {
        this.elementRef = elementRef;
        /**
         * Listeners lorsque la value change
         */
        this.changed = new Array();
        /**
         * Listeners lorsque le composant est touched
         */
        this.touched = new Array();
        /**
         * Flag indiquant si l'attribut id est obligatoire sur le composant, false par défaut.
         * Valeur a éventuellement modifier dans les sous-classes.
         */
        this.isIdRequired = false;
    }
    Object.defineProperty(ValueAccessorBase.prototype, "id", {
        /**
         * Retourne l'id du composant.
         * @return {?}
         */
        get: function () {
            var /** @type {?} */ id = this.elementRef.nativeElement.id || this.elementRef.nativeElement.getAttribute('ng-reflect-id');
            if (!id && this.isIdRequired) {
                if (console && console.log) {
                    console.log('L attribut id DOIT être spécifié sur l instance de ce composant', this);
                }
            }
            return id;
        },
        /**
         * Setter de l'id de l'élément html du composant avec l'id donné.
         * @param {?} id donné.
         * @return {?}
         */
        set: function (id) {
            this.elementRef.nativeElement.id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValueAccessorBase.prototype, "value", {
        /**
         * Retourne la value du composant.
         * @return {?} la value du composant.
         */
        get: function () {
            return this.innerValue;
        },
        /**
         * Setter de la value du composant.
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (this.innerValue !== value) {
                this.innerValue = value;
                this.fireValueChanged(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Signale change a tous les listeners pour la value donnée.
     * @param {?} value donnée.
     * @return {?}
     */
    ValueAccessorBase.prototype.fireValueChanged = function (value) {
        this.changed.forEach(function (f) { return f(value); });
    };
    /**
     * Signale touch à tous les listeners.
     * @return {?}
     */
    ValueAccessorBase.prototype.touch = function () {
        this.touched.forEach(function (f) { return f(); });
    };
    /**
     * Modifie la value de innerValue avec celle donnée.
     * @param {?} value donnée.
     * @return {?}
     */
    ValueAccessorBase.prototype.writeValue = function (value) {
        this.innerValue = value;
    };
    /**
     * Abonne un listener a change.
     * @param {?} fn listener
     * @return {?}
     */
    ValueAccessorBase.prototype.registerOnChange = function (fn) {
        this.changed.push(fn);
    };
    /**
     * Abonne un listener a touched.
     * @param {?} fn listener
     * @return {?}
     */
    ValueAccessorBase.prototype.registerOnTouched = function (fn) {
        this.touched.push(fn);
    };
    return ValueAccessorBase;
}());

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
var FocusgroupAccessorBase = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FocusgroupAccessorBase, _super);
    /**
     * Construit une instance a partir des paramètres fournis et rajoute la classe css 'focusgroup" sur l'élément HTML.
     * @param {?} elementRef donné.
     */
    function FocusgroupAccessorBase(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        /**
         * Flag reflétant si le composant custom "a le focus", c.a.d. qu'un des sous-élement qu'il a généré a actuellementt
         * le focus.
         */
        _this.internalFocused = false;
        elementRef.nativeElement.classList.add('focusgroup');
        _this.isIdRequired = true;
        return _this;
    }
    /**
     * Quand on perd le focus sur un des sous composants alors on considère qu'on a touched le composant.
     * @return {?}
     */
    FocusgroupAccessorBase.prototype.onFocusOut = function () {
        this.internalFocused = false;
        _super.prototype.touch.call(this);
    };
    /**
     * Quand on gagne le focus sur un des sous composants alors on considère qu'on a touched le composant.
     * @return {?}
     */
    FocusgroupAccessorBase.prototype.onFocusIn = function () {
        this.internalFocused = true;
    };
    Object.defineProperty(FocusgroupAccessorBase.prototype, "focused", {
        /**
         * Rajoute une classe css focused sur l'élément custorm pour matérialiser qu'il a le focus, c.a.d. un de ces
         * sous-éléments a le focus.
         * @return {?} true si this.internalFocused === true.
         */
        get: function () {
            return (true === this.internalFocused);
        },
        enumerable: true,
        configurable: true
    });
    return FocusgroupAccessorBase;
}(ValueAccessorBase));
FocusgroupAccessorBase.propDecorators = {
    "onFocusOut": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focusout',] },],
    "onFocusIn": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['focusin',] },],
    "focused": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['class.focused',] },],
};

/**
 * Implémentation d'une instance d'état porteuse des propriétés définies par StatesProperties
 * et des méthodes de manipulation de cet état.
 *
 * La value ou payload peut par exemple porter :
 * <ul>
 *     <li>un type de Composant angular à afficher dans un composant zia-state-wizar.
 *     <li>une commande a passer a router.navigate pour naviguer vers une route angular correspndant à la page a atteindre.
 *     <li>une instance particulière d'une collection de modèle (individu par exemple) a afficher au sein d'un composant fixe.
 */
var State = /** @class */ (function () {
    /**
     * Instancie et retourne une nouvelle instance alimentée à partir de l'objet stateProperties donné en paramètre.
     *
     * @param {?} stateProperties donné.
     */
    function State(stateProperties) {
        Object.assign(this, stateProperties);
    }
    /**
     * Retourne l'état désigné par la transition donnée et la machine à état donnée (et sont état courant), en déléguant
     * le gros du boulot à this.getNewStateIndexForTransition.
     *
     * Méthode overridable dans les sous-classes.
     *
     * @param {?} states donné.
     * @param {?} transition donnée.
     * @return {?} état désigné par la transition donnée et la machine à état donnée (et sont état courant).
     */
    State.prototype.getNewStateForTransition = function (states, transition) {
        var /** @type {?} */ index = this.getNewStateIndexForTransition(states, transition);
        if (index >= 0) {
            return states.getStateForIndex(index);
        }
    };
    /**
     * Retourne l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant), en déléguant
     * tout le boulot a la méthode overridable findNewStateIndex.
     *
     * Méthode overridable dans les sous-classes.
     *
     * @param {?} states donné.
     * @param {?} transition donnée.
     * @return {?} l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant).
     */
    State.prototype.getNewStateIndexForTransition = function (states, transition) {
        return this.findNewStateIndex(states, transition);
    };
    /**
     * Retourne l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant en délégant
     * à deux autres méthodes selon le type de tansition.value.
     *
     * Utilisé par la méthode publoque getNewStateForTransition.
     *
     * Méthode overridable dans les sous-classes.
     *
     * @param {?} states donné.
     * @param {?} transition donnée.
     * @return {?} l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant).
     */
    State.prototype.findNewStateIndex = function (states, transition) {
        if (typeof transition.value === 'number') {
            return this.findNewStateIndexByNumber(states, transition);
        }
        else if (typeof transition.value === 'string') {
            return this.findNewStateIndexByString(states, transition);
        }
        else {
            throw new Error('StateTransition type non géré');
        }
    };
    /**
     * Retourne l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant en délégant
     * à deux autres méthodes lorsque le type de transition.value === number.
     *
     * Dans ce cas transition.value porte l'entier positif ou négatif à additionner à l'index de l'état courant pour
     * trouver l'état désigné par la transition.
     *
     * @throws Error si transition.value est incorrecte ou inconsistante avec la collection de la machine a état.
     * @param {?} states donné.
     * @param {?} transition donnée.
     * @return {?} l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant).
     */
    State.prototype.findNewStateIndexByNumber = function (states, transition) {
        var /** @type {?} */ delta = (transition.value);
        var /** @type {?} */ newIndex = states.currentStateIndex + delta;
        if (newIndex >= 0 && newIndex < states.collection.length) {
            return newIndex;
        }
        else {
            throw new Error('StateTransition number invalide');
        }
    };
    /**
     * Retourne l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant en délégant
     * à deux autres méthodes lorsque le type de transition.value === string.
     *
     * Dans ce cas transition.value porte l'identifiant de l'état désigné par la transition.
     *
     * @throws Error si transition.value est incorrecte ou inconsistante avec la collection de la machine a état.
     * @param {?} states donné.
     * @param {?} transition donnée.
     * @return {?} l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant).
     */
    State.prototype.findNewStateIndexByString = function (states, transition) {
        var /** @type {?} */ key = (transition.value);
        var /** @type {?} */ newIndex = states.collection.findIndex(function (state) { return state.id === key; });
        if (newIndex >= 0) {
            return newIndex;
        }
        else {
            throw new Error('StateTransition string invalide');
        }
    };
    return State;
}());
/**
 * Implémentation d'une transition pour une machine à état de type States.
 * Selon le typeof de la value :
 * <ul>
 *     <li>string => identifiant de l'état désigné par la transition.
 *     <li>number => entier positif ou négatif à additionner à l'index de l'étape courante pour avoir l'index de l'état
 *     désigné par cette transition
 *
 */
var StateTransition = /** @class */ (function () {
    function StateTransition() {
    }
    return StateTransition;
}());
/**
 * Classe permettant de typer un objet assiocatif {clé de transition ou action => transition}.
 *
 * Utilisé dans la navigation applicative.
 *
 */
var StateTransitionByKey = /** @class */ (function () {
    function StateTransitionByKey() {
    }
    return StateTransitionByKey;
}());
/**
 * Etat spécifique à la navigation applicative dans laquelle à chaque état de la navigation (une "page")
 * est associé un groupe d'actions possibles (le plus souvent matérialisé sous la forme d'une barre d'action) correspondant
 * chacune a une StateTransition désignant le nouvel état associé a cette action.
 *
 * Cette classe étends State en overridant en particulier la méthode getNewStateIndexForTransition de façon a considérer
 * que si la transition.value est de type string alors cela désigne non plus l'identifiant du nouvel état comme
 * dans la super classe mais la clé de transition ou d'action qu'il faut utiliser pour récuperer la bonne transition.
 */
var StateWithTransitions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StateWithTransitions, _super);
    function StateWithTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Overrides de la méthode de la super-classe de façon a considérer que si la transition.value est de type string
     * alors cela désigne non plus l'identifiant du nouvel état comme dans la super classe
     * mais la clé de transition ou d'action qu'il faut utiliser pour récuperer la bonne transition.
     *
     * Retourne l'index de l'état désigné par la transitionKey donnée et la machine à état donnée (et sont état courant).
     *
     * Méthode overridable dans les sous-classes.
     *
     * @param {?} states donné.
     * @param {?} transitionKey donnée.
     * @return {?} l'index de l'état désigné par la transition donnée et la machine à état donnée (et sont état courant).
     */
    StateWithTransitions.prototype.getNewStateIndexForTransition = function (states, transitionKey) {
        var /** @type {?} */ transition;
        if (typeof transitionKey.value === 'string') {
            // Si la value est de type string alors on la considère comme une clé de transition
            // avec laquelle on obtient la transition cible.
            transition = this.findTransitionFromCurrentStateForKey(transitionKey.value);
        }
        if (!transition) {
            // Dans tous les autres cas ou en cas d'echec a considérer la string comme une transitionKey
            // alors on considère que la transition est en fait directement donné par la transition.value.
            transition = transitionKey;
        }
        return _super.prototype.getNewStateIndexForTransition.call(this, states, transition);
    };
    /**
     * Retourne la transtion correspondant a la clé de transition donnée en paramètre.
     * @param {?} transitionKey donnée.
     * @return {?} la transtion correspondant a la clé de transition donnée en paramètre.
     */
    StateWithTransitions.prototype.findTransitionFromCurrentStateForKey = function (transitionKey) {
        return this.transitionsByKey[transitionKey];
    };
    return StateWithTransitions;
}(State));

/**
 * Machine à état générique (c.a.d. utilisant le paramétrage de type) centralisant :
 * <ul>
 *     <li>une collection ordonnées d'états</li>
 *     <li>des pointeurs sur l'état courant et son index dans la collection.</li>
 *     <li>une méthode permettant de demander une transition c.a.d. un changement d'état courant.</li>
 *     <li>une méthode permettant de faire une transition c.a.d. un changement d'état courant.</li>
 *     <li>un Observable sur les demandes de transitions.</li>
 *     <li>un Observable sur les transitions.</li>
 * <ul>
 *
 * @param <S> type des états, devant obligatoirement être ou étendre State, gérés par cette machine a état.
 * @param <T> type de la value (=> payload) des états de cette instance de machine a état.
 *
 * Created by Philippe on 15/10/2017.
 */
var GenericStates = /** @class */ (function () {
    /**
     * Instancie et retourne une nouvelle instance à partir de la collection d'états donnée.
     * @param {?} collection donnée.
     */
    function GenericStates(collection) {
        /**
         * Subject interne permattant de tirer des évènements de demande de transition.
         */
        this.transitionRequestSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Observable sur les demandes de transition.
         */
        this.$transitionRequest = this.transitionRequestSubject.asObservable();
        this.collection = collection || [];
        this.currentStateIndex = this.collection.length ? (this.initialStateIndex || 0) : null;
        if (this.currentState) {
            this.currentState.reached = true;
        }
        this.transitionSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ value: this.currentStateIndex });
        this.$transition = this.transitionSubject.asObservable();
    }
    Object.defineProperty(GenericStates.prototype, "currentState", {
        /**
         * Etat courant de la machine à état.
         * @return {?}
         */
        get: function () {
            return this.getStateForIndex(this.currentStateIndex);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericStates.prototype, "previousState", {
        /**
         * Retourne l'état précédent.
         * @return {?} l'état précédent.
         */
        get: function () {
            return this.getStateForIndex(this.previousStateIndex);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Déclenche une transition depuis l'état courant vers l'état désigné par la transition en paramètre.
     *
     * Avant de déclencher la transition on vérifie que celle-ci désigne bien un état appartenant à la machine a état.
     *
     * @param {?} transition
     * @return {?} true si la transition a reussie, false si echec.
     */
    GenericStates.prototype.doTransition = function (transition) {
        var /** @type {?} */ nextStateIndex = this.findNewStateIndex(transition);
        var /** @type {?} */ newState = 0 <= nextStateIndex && this.collection[nextStateIndex];
        if (0 <= nextStateIndex && newState) {
            this.previousStateIndex = this.currentStateIndex;
            this.currentStateIndex = nextStateIndex;
            this.currentState.reached = true;
            this.transitionSubject.next(transition);
            return true;
        }
        return false;
    };
    /**
     * Emet une demande de transition sur l'Observable this.$transitionRequest pour la transition donnée.
     *
     * Avent d'émettre on vérifie que la transition.value donnée correspond bien a un état de la machine à état.
     *
     * @param {?} transition donnée.
     * @return {?} true si l'émission a été possible, false sinon.
     */
    GenericStates.prototype.requestTransition = function (transition) {
        var /** @type {?} */ nextStateIndex = this.findNewStateIndex(transition);
        var /** @type {?} */ newState = 0 <= nextStateIndex && this.collection[nextStateIndex];
        var /** @type {?} */ delta = nextStateIndex - this.currentStateIndex;
        if (0 <= nextStateIndex && newState) {
            this.transitionRequestSubject.next({ value: delta });
            return true;
        }
        return false;
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    GenericStates.prototype.computeDelta = function (from, to) {
        return from && to && this.getIndexOf(to) - this.getIndexOf(from);
    };
    /**
     * Repositionne l'index de l'état courant (et donc l'état courant) au stateIndex donné
     * **SANS** déclencher de transition.
     *
     * @param {?} stateIndex donné.
     * @return {?}
     */
    GenericStates.prototype.resetToStateIndex = function (stateIndex) {
        this.currentStateIndex = stateIndex;
    };
    /**
     * Repositionne l'index de l'état courant (et donc l'état courant) sur le premier état
     * **SANS** déclencher de transition.
     * @return {?}
     */
    GenericStates.prototype.resetToFirstStateIndex = function () {
        this.resetToStateIndex(0);
    };
    /**
     * Repositionne l'index de l'état courant (et donc l'état courant) sur le dernier état
     * **SANS** déclencher de transition.
     * @return {?}
     */
    GenericStates.prototype.resetToLastStateIndex = function () {
        this.resetToStateIndex(this.collection.length - 1);
    };
    /**
     * Retourne l'état de cette machine a état correspondant a l'identifiant donné, s"il existe.
     * @param {?} stateId donné.
     * @return {?} l'état de cette machine a état correspondant a l'identifiant donné, s"il existe.
     */
    GenericStates.prototype.getStateForId = function (stateId) {
        return this.collection.find(function (state) { return state.id === stateId; });
    };
    /**
     * Retourne la value/payload de l'état correspondant au stateId donné, s'il existe dans cette machine a état.
     * @param {?} stateId donné.
     * @return {?} Retourne la value/payload de l'état correspondant au stateId donné, s'il existe dans cette machine a état.
     */
    GenericStates.prototype.getStateValueForStateId = function (stateId) {
        var /** @type {?} */ stateForId = this.getStateForId(stateId);
        return stateForId && stateForId.value;
    };
    /**
     * Retourne l'état correspondant a l'index donné pour cette machine a état, s'il existe.
     * @param {?} index donné.
     * @return {?} Retourne l'état correspondant a l'index donné pour cette machine a état, s'il existe.
     */
    GenericStates.prototype.getStateForIndex = function (index) {
        return 0 <= index && this.collection[index];
    };
    /**
     * Retourne true si l'état courant de cette machine a état est le premier.
     * @return {?} true si l'état courant de cette machine a état est le premier.
     */
    GenericStates.prototype.isCurrentIsFirst = function () {
        return 0 === this.currentStateIndex;
    };
    /**
     * Retourne true si l'état courant de cette machine a état est le dernier.
     * @return {?} true si l'état courant de cette machine a état est le dernier.
     */
    GenericStates.prototype.isCurrentIsLast = function () {
        if (this.collection) {
            return (this.collection.length - 1) === this.currentStateIndex;
        }
        else {
            return false;
        }
    };
    /**
     * @param {?} state
     * @return {?}
     */
    GenericStates.prototype.getIndexOf = function (state) {
        return this.collection && this.collection.findIndex(function (el) { return el && el.id === state.id; });
    };
    /**
     * Retourne l'index de l'état désigné par la transtion donnée.
     * @param {?} transition donnée.
     * @return {?} index de l'état désigné par la transtion donnée.
     */
    GenericStates.prototype.findNewStateIndex = function (transition) {
        return this.currentState.getNewStateIndexForTransition(this, transition);
    };
    /**
     * Retourne l'index de l'état désigné par la transition donnée dans laquelle la value est de type number.
     * @param {?} transition donnée.
     * @return {?} index de l'état désigné par la transition donnée dans laquelle la value est de type number.
     */
    GenericStates.prototype.findNewStateIndexByNumber = function (transition) {
        var /** @type {?} */ delta = (transition.value);
        var /** @type {?} */ newIndex = this.currentStateIndex + delta;
        if (0 <= newIndex && newIndex < this.collection.length) {
            return newIndex;
        }
        else {
            throw new Error('StateTransition number invalide');
        }
    };
    /**
     * Retourne l'index de l'état désigné par la transition donnée dans laquelle la value est de type string.
     * @param {?} transition donnée.
     * @return {?} index de l'état désigné par la transition donnée dans laquelle la value est de type string.
     */
    GenericStates.prototype.findNewStateIndexByString = function (transition) {
        var /** @type {?} */ key = (transition.value);
        var /** @type {?} */ newIndex = this.collection.findIndex(function (state) { return state.id === key; });
        if (0 <= newIndex) {
            return newIndex;
        }
        else {
            throw new Error('StateTransition string invalide');
        }
    };
    return GenericStates;
}());
/**
 * Classe raccourci pour désigner une GenericState<State<T>, T> dans laquelle les paramètres de types sont alignés de façon cohérente,
 * c.a.d. que le payload T des états de la machine a état et le payload T des états de type State géré par cette machine a
 * état sont le même type.
 */
var States = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(States, _super);
    function States() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return States;
}(GenericStates));
/**
 * Classe raccourci pour désigner une GenericState<StateWithTransition<T>, T> dans laquelle les paramètres de types sont
 * alignés de façon cohérente, c.a.d. que le payload T des états de la machine a état et le payload T des états de type
 * StateWithTransition géré par cette machine a état sont le même type.
 */
var StatesWithTransitions = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StatesWithTransitions, _super);
    function StatesWithTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Instancie et retourne une nouvelle instance à partir des paramètres donnés.
     *
     * @template T
     * @param {?} collection donnée.
     * @return {?} nouvelle instance instanciée à partir des paramètres donnés.
     */
    StatesWithTransitions.For = function (collection) {
        var /** @type {?} */ newCollection = ([]);
        collection.forEach(function (properties) { return newCollection.push(new StateWithTransitions(properties)); });
        return new StatesWithTransitions(newCollection);
    };
    return StatesWithTransitions;
}(GenericStates));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var ActionEnum = {
    /**
       * Action négative, par exemple naviguer vers page précédente.
       */
    negative: -1,
    /**
       * Action neutre, par exemple ouvrir une popin modale.
       */
    neutral: 0,
    /**
       * Action positive, par exemple naviguer vers une page suivante.
       */
    positive: 1,
    /**
       * Action autre, par exemple abandonner.
       */
    other: 2,
    /**
       * Action en provenance d'une barre de navigation, permettant de la combiner avec l'évaluation
       * de la validité du formulaire.
       */
    state: 3,
};
ActionEnum[ActionEnum.negative] = "negative";
ActionEnum[ActionEnum.neutral] = "neutral";
ActionEnum[ActionEnum.positive] = "positive";
ActionEnum[ActionEnum.other] = "other";
ActionEnum[ActionEnum.state] = "state";
/**
 * Fonction utilitaire permettant de convertir la valeur d'une ActionEnum en string.
 * @param {?} actionEnum à convertir.
 * @return {?} libellé de l'ActionEnum fournie en paramètre.
 */
function actionEnumToString(actionEnum) {
    var /** @type {?} */ label = ActionEnum[actionEnum];
    if (label) {
        return label;
    }
    else {
        throw new Error('actionEnumToString incorrect pour ' + actionEnum);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Interface des propriétés de contexte nécéssaires à chaque méthode d'un ActionStateSupportService.
 * <p/>
 * Cette interface <b>doit</b> être implémentée par un composant souhaitant faire appel a ActionStateSupportService et
 * sous-classes, en particulier il est important pour la bonne gestion des unsubscribe sur les Observer que
 * active soit mis a true sur ngOnInit et a false sur ngOnDestroy.
 */
var ActionStateSupportContext = /** @class */ (function () {
    function ActionStateSupportContext() {
    }
    return ActionStateSupportContext;
}());
/**
 * Service support pour les composants incluant une ziaActionPanel voulant gérer la navigation/routage à partir
 * des actions d'une barre d'action incluse dans un composant ziaActionPanel.
 *
 * Les composants peuvent donc s'injecter ce service et lui déleguer le traitement des boutons de la barre
 * d'action qd ceux-ci sont lié a la navigation/routage de l'application.
 *
 * Ce service propose
 * <ul>
 *     <li>une implémentation par défaut d'un Observer sur une machine a état, appelant la méthode onActionState
 *     de ce composant
 *     <li>une implémentation par défaut de l'eventHandler(event: ActionEnum) que l'on doit trouver dans un composant
 *     utilisant un ActionPanel
 */
var ActionStateSupportService = /** @class */ (function () {
    function ActionStateSupportService() {
    }
    /**
     * Permet de créer un Observer sur states.$transitionRequest appelant l'implémentation par défaut this.onActionState.
     *
     * @param {?} states à observer.
     * @param {?} context de travail du composant.
     * @return {?}
     */
    ActionStateSupportService.prototype.listenStatesTransitionRequest = function (states, context) {
        var _this = this;
        if (states) {
            if (context.active === true || context.unsubscribeSubject) {
                if (!context['_active']) {
                    this.overridesDefinitionOfActive(context);
                }
                return states.$transitionRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(context.unsubscribeSubject))
                    .subscribe(function (transition) { return _this.onActionState(transition, context); }, function (error) { return console.error(error); }, function () {
                    if (true === context['_active']) {
                        context['_active'] = false;
                    }
                });
            }
            else {
                return states.$transitionRequest
                    .subscribe(function (transition) { return _this.onActionState(transition, context); });
            }
        }
    };
    /**
     * Redéfintion de la propriété active du context donné pour lui adjoindre getter et setter de façon a ce que le set(false) provoque
     * l'émission sur un unsubscribeSubject interne servant d'évènement technique d'arrêt au sein d'un takeUntil.
     *
     * @param {?} context donné
     * @return {?}
     */
    ActionStateSupportService.prototype.overridesDefinitionOfActive = function (context) {
        if (!context.unsubscribeSubject) {
            context.unsubscribeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        }
        Object.defineProperty(context, 'active', {
            set: function (active) {
                context['_active'] = active;
                if (!active && context.unsubscribeSubject && !context.unsubscribeSubject.closed) {
                    context.unsubscribeSubject.next();
                    context.unsubscribeSubject.complete();
                }
            },
            get: function () {
                return context['_active'];
            }
        });
        context.active = true;
    };
    /**
     * Implémentation standard de l'eventHandler(event: ActionEnum) d'une ziaActionBar incluse dans un ziaActionPanel.
     *
     * <ul>
     *     <li>si action 'negative', s'il existe une machine states (wizard) alors si on est pas sur le premier state on
     *     déclenche une transition 'negative' sur cette machine à état sinon on déclenche une demande de transition sur
     *     la machine a état navigationnelle.
     *     <li>si action 'positive", s'il existe une machine states (wizard) alors si on est pas sur le dernier élément
     *     de cette machine a état on déclenche une transition 'positive' dessus, sinon on déclenche une transition sur
     *     la machine a état navigationnelle.
     *
     * @param {?} action à traiter.
     * @param {?} context du composant déléguant le boulot.
     * @return {?} true si une transition a été déclenchée.
     */
    ActionStateSupportService.prototype.onActionBar = function (action, context) {
        if (action === ActionEnum.state) {
            // On ne traite pas ce cas, c'est juste une info
            return false;
        }
        else if (action === ActionEnum.negative) {
            return this.onNegativeAction({ value: action }, context);
        }
        else if (action === ActionEnum.positive) {
            return this.onPositiveAction({ value: action }, context);
        }
        else {
            return this.navigateTo({ value: action }, context);
        }
    };
    /**
     * Implémentation standard d'une méthode d'eventHandling lorsqu'une transition est demandée au niveau
     * d'une states machine (normalement appelé par listenStatesTransitionRequest) du context donné.
     *
     * @param {?} transition à traiter.
     * @param {?} context du composant déléguant le boulot.
     * @return {?} true si une transition a été déclenchée.
     */
    ActionStateSupportService.prototype.onActionState = function (transition, context) {
        return this.changeStateTo(transition, context);
    };
    /**
     * Traitement particulier d'une action 'negative'.
     * @param {?} transition à traiter.
     * @param {?} context du composant déléguant.
     * @return {?} true si une transition a été déclenchée.
     */
    ActionStateSupportService.prototype.onNegativeAction = function (transition, context) {
        if (context.actionBarConfig && context.actionBarConfig.negativeActionLabel) {
            if (context.states) {
                if (context.states.isCurrentIsFirst()) {
                    return this.navigateTo(transition, context);
                }
                else {
                    return this.changeStateTo(transition, context);
                }
            }
            else {
                return this.navigateTo(transition, context);
            }
        }
    };
    /**
     * Traitement particulier d'une action 'positive'.
     * @param {?} transition à traiter.
     * @param {?} context du composant déléguant.
     * @return {?} true si une transition a été déclenchée.
     */
    ActionStateSupportService.prototype.onPositiveAction = function (transition, context) {
        if (context.actionBarConfig && context.actionBarConfig.positiveActionLabel) {
            if (context.states) {
                if (context.states.isCurrentIsLast()) {
                    return this.navigateTo(transition, context);
                }
                else {
                    return this.changeStateTo(transition, context);
                }
            }
            else {
                return this.navigateTo(transition, context);
            }
        }
    };
    /**
     * Méthode realisant une demande de navigation.
     *
     * @param {?} transition à traiter.
     * @param {?} context du composant déléguant.
     * @return {?} true si une transition a été déclenchée.
     */
    ActionStateSupportService.prototype.navigateTo = function (transition, context) {
        if (context.navigationStateService) {
            return context.navigationStateService.requestNavigationStateTransition(transition);
        }
    };
    /**
     * Méthode realisant une demande de transition sur une states machine du context donné.
     *
     * @param {?} transition à traiter.
     * @param {?} context du composant déléguant.
     * @return {?} true si une transition a été déclenchée.
     */
    ActionStateSupportService.prototype.changeStateTo = function (transition, context) {
        if (context.states) {
            return context.states.doTransition(transition);
        }
    };
    return ActionStateSupportService;
}());
ActionStateSupportService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
ActionStateSupportService.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service support pour les composants incluant une ziaFormActionPanel voulant gérer la navigation/routage
 * à partir des actions d'une barre d'action incluse dans un composant ziaFormActionPanel.
 *
 * Les composants peuvent donc s'injecter ce service et lui déleguer le traitement des boutons de la barre
 * d'action et d'une éventuelle states machine (wizard) qd ceux-ci sont lié a la navigation/routage de l'application.
 *
 */
var FormActionStateSupportService = /** @class */ (function () {
    /**
     * @param {?} actionStateSupportService
     */
    function FormActionStateSupportService(actionStateSupportService) {
        this.actionStateSupportService = actionStateSupportService;
    }
    /**
     * Souscrit au flux des demandes de transition du states donné pour l'instance de composant implémentant
     * FormActionStateSupportContext donné, tant que ce dernier est actif, et déclenche alors la méthide onActionState
     * pour l'AbstractControl donné.
     *
     * @param {?} states donné
     * @param {?} context donné
     * @param {?} control donné
     * @return {?} subscription réalisée.
     */
    FormActionStateSupportService.prototype.listenStatesTransitionRequest = function (states, context, control) {
        var _this = this;
        if (states) {
            if (context.active === true || context.unsubscribeSubject) {
                if (!context['_active']) {
                    this.overridesDefinitionOfActive(context);
                }
                return states.$transitionRequest.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(context.unsubscribeSubject))
                    .subscribe(function (transition) { return _this.onActionState(transition, context, control.valid); }, function (error) { return console.error(error); }, function () {
                    if (true === context['_active']) {
                        context['_active'] = false;
                    }
                });
            }
            else {
                return states.$transitionRequest
                    .subscribe(function (transition) { return _this.onActionState(transition, context, control.valid); });
            }
        }
    };
    /**
     * Redéfintion de la propriété active du context donné pour lui adjoindre getter et setter de façon a ce que le set(false) provoque
     * l'émission sur un unsubscribeSubject interne servant d'évènement technique d'arrêt au sein d'un takeUntil.
     *
     * @param {?} context donné
     * @return {?}
     */
    FormActionStateSupportService.prototype.overridesDefinitionOfActive = function (context) {
        this.actionStateSupportService.overridesDefinitionOfActive(context);
    };
    /**
     * Implémentation du traitement standard d'une action sur la barre d'action pour un composant, déléguant pour l'occasion a une instance
     * de ActionStateSupportService, pour l'action donné, pour le composant implémentant FormActionStateSupportContext donné
     * et le flag sur la validité du formulaire donné.
     * <p/>
     * Le comportement standard est d'émettre une transition vers l'état cible si le context l'autorise (ne doit pas valider ou est valide).
     *
     * @param {?} action donnée
     * @param {?} context donné
     * @param {?} isFormValid donné
     * @return {?} true si une transition a été déclenchée.
     */
    FormActionStateSupportService.prototype.onActionBar = function (action, context, isFormValid) {
        if (!context.shouldValidate || !context.shouldValidate({
            action: action, transition: { value: action }, isValid: isFormValid
        }) || isFormValid) {
            return this.actionStateSupportService.onActionBar(action, context);
        }
    };
    /**
     * Implémentation du traitement standard d'une action sur la barre d'étape pour un composant, déléguant pour l'occasion a une instance
     * de ActionStateSupportService, pour la transition donnée, poiur le composant implémentant FormActionStateSupportContext donné
     * et le flag sur la validité du formulaire donné.
     * <p/>
     * Le comportement standard est d'émettre une transition vers l'état cible si le context l'autorise (ne doit pas valider ou est valide).
     * <p/>
     * Appelé par listenStatesTransitionRequest lorsq'une demande de transition est reçue.
     *
     * @param {?} transition donné
     * @param {?} context donné
     * @param {?} isFormValid donné
     * @return {?} true si une transition a été déclenchée.
     */
    FormActionStateSupportService.prototype.onActionState = function (transition, context, isFormValid) {
        if (!context.shouldValidate || !context.shouldValidate({
            action: ActionEnum.state, transition: transition, isValid: isFormValid
        }) || isFormValid) {
            return this.actionStateSupportService.onActionState(transition, context);
        }
    };
    /**
     * Implémentation standard de l'eventHandler(event: ActionEnum) d'une ziaActionBar incluse dans un ziaFormActionPanel.
     *
     * <ul>
     *     <li>failfast si le formActionPanelEvent shouldValidate et que le ziaFormActionPanel n'est pas valide, sinon
     *     on continue :
     *     <li>si action 'negative', s'il existe une machine states (wizard) alors si on est pas sur le premier state on
     *     déclenche une transition 'negative' sur cette machine à état sinon on déclenche une demande de transition sur
     *     la machine a état navigationnelle.
     *     <li>si action 'positive", s'il existe une machine states (wizard) alors si on est pas sur le dernier élément
     *     de cette machine a état on déclenche une transition 'positive' dessus, sinon on déclenche une transition sur
     *     la machine a état navigationnelle.
     *
     * @param {?} event à traiter
     * @param {?} context du composant déléguant le boulot.
     * @return {?} true si une transition a été déclenchée.
     */
    FormActionStateSupportService.prototype.onFormActionEvent = function (event, context) {
        // On ne continue donc que si l'action porté par l'event n'a pas besoin d'être validée ou alors qu'elle est valide
        if (event.action === ActionEnum.state) {
            return this.onActionState(event.transition, context, event.isValid);
        }
        else {
            return this.onActionBar(event.action, context, event.isValid);
        }
    };
    return FormActionStateSupportService;
}());
FormActionStateSupportService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
FormActionStateSupportService.ctorParameters = function () { return [
    { type: ActionStateSupportService, },
]; };

/**
 * Classe abstraite positionnant un Observer sur les demandes de transition faite sur l'instance du service
 * NavigationStateService de façon a exécuter la commande de navigation normalement portée par la transition.
 *
 * En effet Router.navigate ne fonctionne qu'au sein d'un composant et ne fonctionne pas dans un \@Injectable.
 *
 * Toute application souhaitant bénéficier du service de navigation déclarative doit avoir un (et un seul) de
 * ces composants root héritant de cette classe abstraite pour que les demandes de transition se transforment
 * en commande de routage. Par convention on utilisera AppComponent.
 *
 * @abstract
 */
var NavigationStateApp = /** @class */ (function () {
    /**
     * ctor pour les paramètres donnés.
     * @param {?} navigationStateService donné.
     * @param {?} router donné.
     */
    function NavigationStateApp(navigationStateService, router) {
        this.navigationStateService = navigationStateService;
        this.router = router;
        this.listenStatesTransitionRequest(navigationStateService, router);
    }
    /**
     * @param {?} navigationStateService
     * @param {?} router
     * @return {?}
     */
    NavigationStateApp.prototype.listenStatesTransitionRequest = function (navigationStateService, router) {
        navigationStateService.states.$transitionRequest.subscribe(function (stateChange) {
            var /** @type {?} */ navigateCommand = navigationStateService.getNavigateCommandToDeltaStateTransition(stateChange);
            if (navigateCommand) {
                // noinspection JSIgnoredPromiseFromCall
                router.navigate(navigateCommand).then(function (success) {
                    if (success) {
                        navigationStateService.pendingState = null;
                    }
                });
            }
        });
    };
    return NavigationStateApp;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Token d'injection de la configuration de la navigation applicative.
 */
var /** @type {?} */ NAVIGATION_STATE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('zia.navigation.token');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service applicatif de niveau root gérant le système de déclaration centralisé de la navigation.
 *
 * Ce système à pour objectif de centraliser la déclaration et la gestion des transitions de navigation ayant
 * un impact sur les routes (c.a.d se traduisant par un changement dans les urls bookmarkables de l'appli).
 *
 * Ce système ne gère pas et ne voit pas les transitions de changement d'étapes du composant ziaStateWizard, dont
 * l'intérêt est justemment d'être non exposé dans l'url.
 *
 * Ce service porte la machine à état de type StatesWithTransitions normalement configurée par le fichier de déclaration
 * de la navigation navigation-state.definitions.ts et expose directement en façade certaines des méthodes de la machine à
 * état, en particulier les demandes de navigation applicative via requestNavigationTransitionForKey.
 *
 */
var NavigationStateService = /** @class */ (function () {
    /**
     * @param {?} statesWithTransitions
     */
    function NavigationStateService(statesWithTransitions) {
        if (statesWithTransitions) {
            this.states = StatesWithTransitions.For(statesWithTransitions);
        }
    }
    /**
     * Demande de navigation vers une route pour l'ActionEnum donnée.
     *
     * @param {?} action donné.
     * @return {?} true si la demande est correcte et a été traitée, false sinon.
     */
    NavigationStateService.prototype.requestNavigationTransitionForActionEnum = function (action) {
        return this.requestNavigationStateTransition({ value: actionEnumToString(action) });
    };
    /**
     * Demande de navigation vers une route pour la clé de transition (string) donnée.
     * Les clés de transtion correspondent en général actionEnumToString(ActionEnum) de la barre d'action, c.a.d.
     * 'negative', 'neutral', 'positive', 'other'.
     *
     * @param {?} transitionKey donné.
     * @return {?} true si la demande est correcte et a été traitée, false sinon.
     */
    NavigationStateService.prototype.requestNavigationTransitionForKey = function (transitionKey) {
        return this.requestNavigationStateTransition({ value: transitionKey });
    };
    /**
     * Demande de navigation vers une route pour une transition donnée.
     *
     * @param {?} transition donnée.
     * @return {?} true si la demande est correcte et a été traitée, false sinon.
     */
    NavigationStateService.prototype.requestNavigationStateTransition = function (transition) {
        return this.states.requestTransition(transition);
    };
    /**
     * Retourne l'état courant.
     * @return {?} l'état courant.
     */
    NavigationStateService.prototype.getCurrentNavigationState = function () {
        return this.states.currentState;
    };
    /**
     * Retourne la commande de navigation (pour router.navigate) correspondant a la transition donnée.
     * @param {?} deltaStateTransition donnée.
     * @return {?} la commande de navigation (pour router.navigate) correspondant a la transition donnée.
     */
    NavigationStateService.prototype.getNavigateCommandToDeltaStateTransition = function (deltaStateTransition) {
        var /** @type {?} */ state = this.getCurrentNavigationState().getNewStateForTransition(this.states, deltaStateTransition);
        if (state) {
            this.pendingState = /** @type {?} */ (state);
            return this.states.getStateValueForStateId(state.id);
        }
        else {
            return null;
        }
    };
    return NavigationStateService;
}());
NavigationStateService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
NavigationStateService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [NAVIGATION_STATE_TOKEN,] },] },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service de garde lié a la machine à état de NavigationStateService, dont la responsabilité première est
 * d'associer une route à un état navigationnel grâce à la prpriété 'stateId' qui doit être présente dans
 * la déclaration de l'objet data de chque route que l'on désire lié a un état navigationnel.
 *
 * Par ailleurs cette garde, de type à la fois CanActivate et CanActivateChild, refusera toute route
 * **non** associée a un état.
 *
 * La méthode canActivateNavigation peut être overidée par d'éventuelles sous-classe pour ajouter d'autres
 * critères de garde si besoin.
 *
 */
var NavigationStateGuardService = /** @class */ (function () {
    /**
     * @param {?} navigationService
     */
    function NavigationStateGuardService(navigationService) {
        this.navigationService = navigationService;
    }
    /**
     * Retourne true pour autoriser la route pour les paramètres donnés.
     *
     * @param {?} route donnée
     * @param {?} state donné
     * @return {?} true pour autoriser la route pour les paramètres donnés.
     */
    NavigationStateGuardService.prototype.canActivate = function (route, state) {
        return this.internalCanActivate(route, state);
    };
    /**
     * Retourne true pour autoriser les sous-routes pour les paramètres donnés.
     *
     * @param {?} route donné
     * @param {?} state donné
     * @return {?} true pour autoriser les sous-routes pour les paramètres donnés.
     */
    NavigationStateGuardService.prototype.canActivateChild = function (route, state) {
        return this.internalCanActivate(route, state);
    };
    /**
     * Point d'extension pour ajouter des contrôle métier, retournant true par défaut.
     * A redefinir par les sous-classes si nécessaire.
     *
     * @param {?} activatedRoute
     * @param {?} routerState
     * @return {?} true par défaut.
     */
    NavigationStateGuardService.prototype.canActivateNavigation = function (activatedRoute, routerState) {
        return true;
    };
    /**
     * @param {?} activatedRoute
     * @param {?} routerState
     * @return {?}
     */
    NavigationStateGuardService.prototype.internalCanActivate = function (activatedRoute, routerState) {
        // variable retoue de la méthode
        var /** @type {?} */ canActivate = true;
        if (activatedRoute.component) {
            // On récupère le stateId si on peut
            var /** @type {?} */ stateId = this.extractStateNameFromRouteData(activatedRoute);
            if (stateId) {
                // On a un stateId
                var /** @type {?} */ state = this.navigationService.states.getStateForId(stateId);
                if (state) {
                    // un état correspondant au stateId existe
                    if (this.isNewStateSameAsCurrentStateOrSameAsPendingState(state)) {
                        // On est déjà dans cet état ou on l'a demandé programmatiquement (il sera mis a effectivement mis à jour automatiquement)
                        canActivate = true;
                    }
                    else {
                        // A priori c'est une nouvelle url entrée dans la barre de navigation
                        // On laisse la possibilité a un override de décider
                        canActivate = this.canActivateNavigation(activatedRoute, routerState);
                        if (canActivate) {
                            // On met l'état a jour
                            this.navigationService.states.doTransition({ value: stateId });
                        }
                    }
                }
                else {
                    // Pas d'état correspondant au state id, on bloque
                    canActivate = false;
                }
            }
            else {
                // pas de stateId, on laisse la possibilité a un override de décider
                canActivate = this.canActivateNavigation(activatedRoute, routerState);
            }
        }
        else {
            // On a pas de component, celle-ci n'est pas branchée a un état de navigation
            // On laisse la possibilité a un override de décider
            canActivate = this.canActivateNavigation(activatedRoute, routerState);
        }
        return canActivate;
    };
    /**
     * @param {?} state
     * @return {?}
     */
    NavigationStateGuardService.prototype.isNewStateSameAsCurrentStateOrSameAsPendingState = function (state) {
        return this.navigationService.getCurrentNavigationState().id === state.id; // || this._navigationService.isPending(state);
    };
    /**
     * @param {?} activatedRoute
     * @return {?}
     */
    NavigationStateGuardService.prototype.extractStateNameFromRouteData = function (activatedRoute) {
        return activatedRoute.data['stateId'];
    };
    return NavigationStateGuardService;
}());
NavigationStateGuardService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
NavigationStateGuardService.ctorParameters = function () { return [
    { type: NavigationStateService, },
]; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Module permettant de définir et configurer les services permettant de déclencher la navigation routée de façon
 * déclarative.
 */
var ZiaNavigationStateModule = /** @class */ (function () {
    function ZiaNavigationStateModule() {
    }
    /**
     * @param {?} statesWithTransitions
     * @return {?}
     */
    ZiaNavigationStateModule.forConfig = function (statesWithTransitions) {
        return {
            ngModule: ZiaNavigationStateModule,
            providers: [
                { provide: NAVIGATION_STATE_TOKEN, useValue: statesWithTransitions },
                NavigationStateService,
                NavigationStateGuardService
            ]
        };
    };
    return ZiaNavigationStateModule;
}());
ZiaNavigationStateModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                declarations: []
            },] },
];
/** @nocollapse */
ZiaNavigationStateModule.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Composant affichant une barre de boutons (jusqu'à 4 boutons) selon le paramètre actionBarConfig donné, obligatoire,
 * de type {\@link ActionBarConfig}.
 *
 * Le composant emet en sortie un évènement de type ActionEnum porteur du type de bouton cliqué.
 * Les types d'évènement de ActionEnum ont une sémantique volontairement généraliste: negative, neutral, positive, other.
 *
 * Voir : {\@link ActionBarConfig}.
 *
 * Voir : {\@link ActionEnum}.
 *
 * \@example
 * Pour afficher des boutons avec les libellés "libelle_a" "libelle_b" "libelle_c" fournir au composant un objet de type
 * ActionBarConfig ainsi configuré :
 * actionBarConfig = {
 *              negativeActionLabel: libelle_a;
 *              positiveActionLabel: libelle_b;
 *              neutralActionLabel: libelle_c;
 *  }
 *  <app-zia-action-bar [actionBarConfig]="actionBarConfig" (action)="actionEmitted($event)"></app-zia-action-bar>
 */
var ZiaActionBarComponent = /** @class */ (function () {
    function ZiaActionBarComponent() {
        /**
         * EventEmitter<ActionEnum> de l'action émise de type {\@link ActionEnum}.
         */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(ZiaActionBarComponent.prototype, "cssClass", {
        /**
         * @return {?}
         */
        get: function () {
            return 'action-bar';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Emet un évent de type {\@link EventEmitter} contenant le type d'action
     * @param {?} type d'action.
     * @return {?}
     */
    ZiaActionBarComponent.prototype.actionClicked = function (type) {
        var _this = this;
        // On laisse le temps a d'autre handler d'être traités avant celui-ci
        setTimeout(function (_) { return _this.action.emit(type); }, 0);
    };
    Object.defineProperty(ZiaActionBarComponent.prototype, "actionEnum", {
        /**
         * Donne accès au template a ActionEnum.
         * @return {?} actionEnum
         */
        get: function () {
            return ActionEnum;
        },
        enumerable: true,
        configurable: true
    });
    return ZiaActionBarComponent;
}());
ZiaActionBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'zia-action-bar',
                template: "<div *ngIf=\"actionBarConfig\">\n  <button *ngIf=\"actionBarConfig.otherActionLabel\" class=\"btn-other\"\n          (click)=\"actionClicked(actionEnum.other)\">\n    <span class=\"icon\"></span>\n    {{actionBarConfig.otherActionLabel}}\n  </button>\n\n  <button *ngIf=\"actionBarConfig.neutralActionLabel\" class=\"btn-neutral\"\n          (click)=\"actionClicked(actionEnum.neutral)\">\n    <span class=\"icon\"></span>\n    {{actionBarConfig.neutralActionLabel}}\n  </button>\n\n  <button *ngIf=\"actionBarConfig.negativeActionLabel\" class=\"btn-negative\"\n          (click)=\"actionClicked(actionEnum.negative)\">\n    <span class=\"icon\"></span>\n    {{actionBarConfig.negativeActionLabel}}\n  </button>\n\n  <button *ngIf=\"actionBarConfig.positiveActionLabel\" class=\"btn-positive\"\n          (click)=\"actionClicked(actionEnum.positive)\">\n    <span class=\"icon\"></span>\n    {{actionBarConfig.positiveActionLabel}}\n  </button>\n\n</div>\n",
                styles: [""]
            },] },
];
/** @nocollapse */
ZiaActionBarComponent.ctorParameters = function () { return []; };
ZiaActionBarComponent.propDecorators = {
    "actionBarConfig": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "action": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "cssClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.class',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * NgModule de feature exposant juste le composant ZiaActionBarComponent permettant de réaliser est une barre d'action de 1 à 4 boutons d'action
 * génériques, émettant un Observable des actions déclanchées.
 */
var ZiaActionBarModule = /** @class */ (function () {
    function ZiaActionBarModule() {
    }
    return ZiaActionBarModule;
}());
ZiaActionBarModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                ],
                declarations: [ZiaActionBarComponent],
                exports: [
                    ZiaActionBarComponent
                ]
            },] },
];
/** @nocollapse */
ZiaActionBarModule.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Composant ActionPanel ne faisant rien de plus qu'encapsuler le corps qui lui est fourni par son conteneur en lui
 * rajoutant une barre d'action de type ZiaActionBarComponent.
 *
 * ActionPanel écoute l'évènement 'action' émise par ZiaActionBarComponent et selon le type d'action appelle la méthode
 * appropriée parmi les méthodes protected on[negative|neutral|positive|other]Action, qui sont fournies ici vide
 * et peuvent être overridée par les sous-classes.
 *
 * En plus d’appeler une des méthodes protected on[…]Action, le composant relai l’évènement émis par la barre d’action
 * en tirant lui-même un évènement action
 *
 * Par ailleurs en plus du corps et de l’\@input actionBarConfig de paramétrage de la barre d’action incluse,
 * on peut fournir en \@input une instanc ede machine à état et le composant écoutera la machine a état et si celle-ci
 * émet un évènement le composant appellera alors la méthode protected onStateAction(), implémentée a vide
 * mais overridable dans les sous-classes, et émettra une action ActionEnum.state.
 * Cet input states est cependant déprécié depuis la v1, il est préférable (plus clair) de gérer directement la machine a état.
 *
 * \@example
 *
 * <zia-action-panel [actionBarConfig]="actionBarConfig" [states]="states" (action)="onActionBar($event)">
 * <h1>
 *              page works!
 * </h1>
 * </zia-action-panel>
 */
var ZiaActionPanelComponent = /** @class */ (function () {
    function ZiaActionPanelComponent() {
        /**
         * Emetteur d'évènement de type ActionEnum permettant de propager l'action emise par
         * le composant barre d'action inclue dans ce composant.
         *
         */
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(ZiaActionPanelComponent.prototype, "configButtonActionBar", {
        /**
         * API de configuration initiale, maintenant obsolète, a éviter.
         * @deprecated use actionBarConfig
         * @param {?} config
         * @return {?}
         */
        set: function (config) {
            var /** @type {?} */ actionBarConfig = {};
            this.move(config.buttonNeutreLabel, actionBarConfig, 'neutralActionLabel');
            this.move(config.buttonNegatifLabel, actionBarConfig, 'negativeActionLabel');
            this.move(config.buttonAutreLabel, actionBarConfig, 'otherActionLabel');
            this.move(config.buttonPositifLabel, actionBarConfig, 'positiveActionLabel');
            this.actionBarConfig = actionBarConfig;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaActionPanelComponent.prototype, "cssClass", {
        /**
         * @return {?}
         */
        get: function () {
            return 'action-panel';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialisation du composant.
     * this.active passe a true.
     * Si this.states existe alors subscription sur this.states.$transitionRequest tq this.active.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.unsubscribeEvent = new rxjs_index__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        if (this.states) {
            this.states.$transitionRequest.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.unsubscribeEvent)).subscribe(function (transition) {
                _this.onActionEmitted(ActionEnum.state, transition);
            });
        }
    };
    /**
     * Destruction du composant.
     * this.active passe a false.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeEvent.next(true);
        this.unsubscribeEvent.complete();
    };
    /**
     * Méthode appelée lorsque la barre d'action emet une ActionEnum.positive.
     * Peut être redéfinie dans les sous-classes.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.onPositiveAction = function () {
    };
    /**
     * Méthode appelée lorsque la barre d'action emet une ActionEnum.neutral.
     * Peut être redéfinie dans les sous-classes.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.onNeutralAction = function () {
    };
    /**
     * Méthode appelée lorsque la barre d'action emet une ActionEnum.negative.
     * Peut être redéfinie dans les sous-classes.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.onNegativeAction = function () {
    };
    /**
     * Méthode appelée lorsque la barre d'action emet une ActionEnum.other.
     * Peut être redéfinie dans les sous-classes.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.onOtherAction = function () {
    };
    /**
     * Methode appelée lorsque l'éventuelle machine à état passée en \@Input emet
     * une demande de transition.
     *
     * Peut être redéfinie dans les sous-classes.
     *
     * @param {?} transition
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.onStateAction = function (transition) {
    };
    /**
     * Méthode privée appelée par l'écouteur (action), de la barre d'action, du template.
     * <p/>
     * Appelle en retour une des 4 méthodes on<positive|neutral|negative|other>Action.
     *
     * @param {?} action émise par la barre d'action, à relayer.
     * @param {?=} transition émise par l'éventuelle machine a état liée, à relayer.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.onActionEmitted = function (action, transition) {
        switch (action) {
            case ActionEnum.negative:
                this.onNegativeAction();
                break;
            case ActionEnum.neutral:
                this.onNeutralAction();
                break;
            case ActionEnum.positive:
                this.onPositiveAction();
                break;
            case ActionEnum.state:
                this.onStateAction(transition);
                break;
            default:
                this.onOtherAction();
        }
        this.action.emit(action);
    };
    /**
     * Méthode utilisé pour alimenter une ActionBarConfig target à partir d'une valeur source donnée.
     * @param {?} source - (valeur) a donner.
     * @param {?} target - instance cible.
     * @param {?} name - nom de la propriété a modifier dans l'instance cible.
     * @return {?}
     */
    ZiaActionPanelComponent.prototype.move = function (source, target, name) {
        if (source) {
            target[name] = source;
        }
    };
    return ZiaActionPanelComponent;
}());
ZiaActionPanelComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'zia-action-panel',
                template: "<ng-content></ng-content>\n\n<nav class=\"navbar action-panel-nav\" aria-label=\"barre d'action\">\n  <zia-action-bar [actionBarConfig]=\"actionBarConfig\" (action)=\"onActionEmitted($event)\"></zia-action-bar>\n</nav>\n\n",
                styles: [""]
            },] },
];
/** @nocollapse */
ZiaActionPanelComponent.ctorParameters = function () { return []; };
ZiaActionPanelComponent.propDecorators = {
    "actionBarConfig": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "states": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "action": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "configButtonActionBar": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cssClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.class',] },],
};

/**
 * Spécialisation de ZiaActionPanelComponent rajoutant juste la notion de "formulaire validant", c.a.d. appelant
 * automatiquement la méthode de validation du ou des FormGroup fournis et émettant  simplement ce résulat en
 * retour (avec mise du focus sur le premier FormControl en erreur le cas échéant).
 *
 * <p/>
 * Au sein du corps fourni par le conteneur de ce composant on doit donc trouver obligatoirement un élément
 * Form et-ou un élément définissant un (ou plusieurs) FormGroup, qu'il faut passer en \@Input.
 * <p/>
 * En retour le composant emet simplement un nouvel évènement de type FormActionPanelEvent qui porte
 * l'ActionEnum ET le résultat de la validation du ou des FormGroup fournis.
 * <p/>
 * Ce composant extends ZiaActionPanelComponent mais **conserve** son template.
 * <p/>
 * Des comportements peuvent cependant être rajoutés par les sous-classes en overridant d'autres méthodes spécifiques
 * à ce composant :
 * <ul>
 *     <li>validate pour rajouter de la validation métier
 *     <li>onValidFormActionPanel pour étendre voire modifier le comportement lorsque les FormGroup sont valides.
 *     <li>onInvalidFormActionPanel pour étendre voire modifier le comportement lorsque les FormGroup sont invalides.
 *
 * \@example
 * <h3>
 * form1 works!
 * </h3>
 *
 * <zia-form-action-panel [actionBarConfig]="actionBarConfig" [formGroups]="form1.form"
 * (formActionEvent)="onFormActionEvent($event)">
 *              <form #form1="ngForm">
 *                <zia-field>
 *                  <label for="prenom">Prénom</label>
 *                  <input type="text" id="prenom" name="prenom" [(ngModel)]="grappe.personne.prenom" required>
 *                </zia-field>
 *
 *              </form>
 * </zia-form-action-panel>
 */
var ZiaFormActionPanelComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ZiaFormActionPanelComponent, _super);
    /**
     * Construit une nouvelle instance à partir des paramètres donnes.
     *
     * @throws une exception si appelé depuis une sous-classe redéfinissant des méthodes considérées comme final.
     * @param {?} container
     * @param {?} doc HTML.
     */
    function ZiaFormActionPanelComponent(container, doc) {
        var _this = _super.call(this) || this;
        _this.container = container;
        _this.doc = doc;
        /**
         * Emission d'un FormActionPanelEvent lorsqu'une action de la barre d'action est déclenchée.
         */
        _this.formActionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(ZiaFormActionPanelComponent.prototype, "formGroups", {
        /**
         * Getter sur la propriété this.internalFormGroups.
         * @return {?} this.internalFormGroups.
         */
        get: function () {
            return this.internalFormGroups;
        },
        /**
         * Le ou les FoemGroup portant les contraintes de validation.
         * @param {?} formGroups
         * @return {?}
         */
        set: function (formGroups) {
            this.internalFormGroups =
                formGroups instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"] ? [formGroups] : formGroups;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaFormActionPanelComponent.prototype, "cssClass", {
        /**
         * @return {?}
         */
        get: function () {
            return 'form-action-panel';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Cette méthode est interne et ne doit PAS être redéfinie dans les sous-classes pour ne pas risquer de casser la responsabilité
     * de ce composant (OCP).
     * Cette méthode override le comportement de sa super-classe.
     * \@readonly
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.onNegativeAction = function () {
        this.validateAndEmitActionAndValidationEvent(ActionEnum.negative);
    };
    /**
     * Cette méthode est interne et ne doit PAS être redéfinie dans les sous-classes pour ne pas risquer de casser la responsabilité
     * de ce composant (OCP).
     * Cette méthode override le comportement de sa super-classe.
     * \@readonly
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.onNeutralAction = function () {
        this.validateAndEmitActionAndValidationEvent(ActionEnum.neutral);
    };
    /**
     * Cette méthode est interne et ne doit **PAS** être redéfinie dans les sous-classes pour ne pas risquer de casser la responsabilité
     * de ce composant (OCP).
     * Cette méthode override le comportement de sa super-classe.
     * \@readonly
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.onPositiveAction = function () {
        this.validateAndEmitActionAndValidationEvent(ActionEnum.positive);
    };
    /**
     * Cette méthode est interne et ne doit **PAS** être redéfinie dans les sous-classes pour ne pas risquer de casser la responsabilité
     * de ce composant (OCP).
     * Cette méthode override le comportement de sa super-classe.
     * \@readonly
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.onOtherAction = function () {
        this.validateAndEmitActionAndValidationEvent(ActionEnum.other);
    };
    /**
     * Cette méthode est interne et ne doit **PAS** être redéfinie dans les sous-classes pour ne pas risquer de casser la responsabilité
     * de ce composant (OCP).
     * Cette méthode override le comportement de sa super-classe.
     *
     * \@readonly
     * @param {?} transition donnée.
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.onStateAction = function (transition) {
        this.validateAndEmitActionAndValidationEvent(ActionEnum.state, transition);
    };
    /**
     * Méthode finale appelée pour traiter un évènement portant une ActionEnum
     * implémentant le coeur de la responsabilité de ce composant.
     * <ul>
     *     <li>Si les FormGroup valident et que la méthode this.validate valide alors si this.onValidFormActionPanel n'est pas false
     *          alors émission d'un évnènement FormActionPanelEvent valide.
     *     <li>Si les FormGroup sont **invalide** alors si this.onInvalidFormActionPanel n'est pas false
     *          alors émission d'un évènement FormActionPanelEvent invalide et mise du focus sur le premier FromControl en erreur.
     * <p/>
     * Cette méthode est interne et ne doit **PAS** être redéfinie dans les sous-classes pour ne pas risquer de casser la responsabilité
     * de ce composant (OCP).
     *
     * \@readonly
     * \@event FormActionPanelEvent
     * @param {?} action recue.
     * @param {?=} transition éventuelle.
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.validateAndEmitActionAndValidationEvent = function (action, transition) {
        var /** @type {?} */ actionEvent = { action: action, isValid: false };
        if (transition) {
            actionEvent.transition = transition;
        }
        if (this.isFormActionPanelValid() && this.validate(action) !== false) {
            actionEvent.isValid = true;
            if (this.onValidFormActionPanel(action, true) !== false) {
                this.formActionEvent.emit(actionEvent);
            }
        }
        else {
            if (this.onInvalidFormActionPanel(action, false) !== false) {
                actionEvent.isValid = false;
                this.highlightFirstError();
                this.formActionEvent.emit(actionEvent);
            }
        }
    };
    /**
     * Méthode (fournie vide) appelée par this.validateAndEmitActionAndValidationEvent à redéfinir dans les
     * éventuelles sous-classes pour vérifier de la validation supplémentaire a celle exprimées dans les FormGroup.
     * @param {?} action donnée.
     * @return {?} true ou void pour valider, false pour invalider.
     */
    ZiaFormActionPanelComponent.prototype.validate = function (action) {
        // to be overrided if needed
    };
    /**
     * Méthode (fournie vide) appelée par this.validateAndEmitActionAndValidationEvent à redéfinir dans les
     * éventuelles sous-classes pour étendre ou modifier le comportement standard si la validation est OK.
     * @param {?} action donnée.
     * @param {?} isValid de la vérification de la validation.
     * @return {?} true ou vide pour conserver le comportement normal (emission d'un FormActionPanelEvent {action: action,isValid: true}).
     * false pour invalider le comportement normal.
     */
    ZiaFormActionPanelComponent.prototype.onValidFormActionPanel = function (action, isValid) {
        // to be overrided if needed
    };
    /**
     * Méthode (fournie vide) appelée par this.validateAndEmitActionAndValidationEvent à redéfinir dans les
     * éventuelles sous-classes pour étendre ou modifier le comportement standard si la validation est **KO**.
     * @param {?} action donnée.
     * @param {?} isValid de la vérification de la validation.
     * @return {?} true ou vide pour conserver le comportement normal (emission d'un FormActionPanelEvent {action: action,isValid: false}).
     * false pour invalider le comportement normal.
     */
    ZiaFormActionPanelComponent.prototype.onInvalidFormActionPanel = function (action, isValid) {
        // to be overrided if needed
    };
    /**
     * Methode privée appelée par this.validateAndEmitActionAndValidationEvent pour vérifier la validité des
     * FormGroup fournis en \@Input.
     * <p/>
     * Cette méthode est interne et ne doit **PAS** être redéfinie dans les sous-classes pour ne pas risquer de casser la responsabilité
     * de ce composant (OCP).
     * \@readonly
     * @return {?} true si tous les FormGroup valident.
     */
    ZiaFormActionPanelComponent.prototype.isFormActionPanelValid = function () {
        if (this.internalFormGroups) {
            try {
                for (var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.internalFormGroups), _b = _a.next(); !_b.done; _b = _a.next()) {
                    var formGroup = _b.value;
                    if (!formGroup.valid) {
                        return false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return true;
        var e_1, _c;
    };
    /**
     * Méthode appelée par this.isFormActionPanelValid pour mettre en évidence le premier champ en erreur.
     * TODO : externaliser cette fonctionnalité
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.highlightFirstError = function () {
        var _this = this;
        var /** @type {?} */ invalidInput = this.container.element.nativeElement.querySelector('input.ng-invalid,[tabindex].ng-invalid,.focusgroup.ng-invalid');
        if (invalidInput) {
            if (invalidInput.classList.contains('focusgroup')) {
                setTimeout(function () {
                    var /** @type {?} */ input = invalidInput.querySelector('input');
                    _this.highlightErrorOn(input);
                }, 0);
            }
            else {
                setTimeout(function () { return _this.highlightErrorOn(invalidInput); }, 0);
            }
        }
        else {
            if (console && console.warn) {
                console.warn('Attention des erreurs de validation sont présente mais non affichées...');
            }
        }
    };
    /**
     * Met en évidence l'erreur de l'élément donné.
     * @param {?} el donné.
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.highlightErrorOn = function (el) {
        this.putFocusOn(el);
        this.triggerValidationOn(el);
        this.putFocusOn(el);
    };
    /**
     * Met le focus sur l'élément donné.
     * @param {?} el donné.
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.putFocusOn = function (el) {
        if (el && el.focus) {
            el.focus();
        }
    };
    /**
     * Déclenche la validation de l'élément donné.
     * @param {?} el donné.
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.triggerValidationOn = function (el) {
        this.fireEvent(el, 'blur');
        this.fireEvent(el, 'focusout');
        this.fireEvent(el, 'focusin');
    };
    /**
     * @param {?} el
     * @param {?} evtName
     * @return {?}
     */
    ZiaFormActionPanelComponent.prototype.fireEvent = function (el, evtName) {
        var /** @type {?} */ event = el.ownerDocument.createEvent('Event');
        event.initEvent(evtName, true, true);
        el.dispatchEvent(event);
    };
    return ZiaFormActionPanelComponent;
}(ZiaActionPanelComponent));
ZiaFormActionPanelComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'zia-form-action-panel',
                template: "<ng-content></ng-content>\n\n<nav class=\"navbar action-panel-nav\" aria-label=\"barre d'action\">\n  <zia-action-bar [actionBarConfig]=\"actionBarConfig\" (action)=\"onActionEmitted($event)\"></zia-action-bar>\n</nav>\n\n",
                styles: [""]
            },] },
];
/** @nocollapse */
ZiaFormActionPanelComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] },] },
]; };
ZiaFormActionPanelComponent.propDecorators = {
    "formGroups": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "formActionEvent": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "cssClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.class',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * NgModule de feature exposant juste les 2 composants ZiaActionPanelComponent et ZiaFormActionPanelComponent (utilisant un
 * ZiaActionBarModule) permettant de réaliser des "panneaux" de contenu disposant d'une barre d'action standardisée.
 */
var ZiaActionPanelModule = /** @class */ (function () {
    function ZiaActionPanelModule() {
    }
    return ZiaActionPanelModule;
}());
ZiaActionPanelModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    ZiaActionBarModule
                ],
                declarations: [ZiaActionPanelComponent, ZiaFormActionPanelComponent],
                exports: [ZiaActionPanelComponent, ZiaFormActionPanelComponent, ZiaActionBarModule]
            },] },
];
/** @nocollapse */
ZiaActionPanelModule.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive déclarant un conteneur pour un template de label complexe au sein d'une state-bar, qui l'utilisera
 * dans un ngTemplateOutlet.
 */
var ZiaStateBarLabelDirective = /** @class */ (function () {
    /**
     * ctor
     */
    function ZiaStateBarLabelDirective() {
    }
    return ZiaStateBarLabelDirective;
}());
ZiaStateBarLabelDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[ziaStateBarLabel]'
            },] },
];
/** @nocollapse */
ZiaStateBarLabelDirective.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Composant affichant une barre de navigation correspondant à la machine a état fournie, selon l'ordre
 * d'index des états.
 * <p/>
 * Ce composant peut être paramètré de façon à <b>déclencher</b> une transition vers un état (autoChangeState=true)
 * ou a seulement <b>émettre un demande</b> de transition (autoChangeState=false) à traiter pour la conditionner par
 * exemple à la validité d'un formulaire.
 * <p/>
 * Ce composant peut aussi bien être configuré pour avoir le comportement d'une barre d'étape d'un
 * assistant ou wizard que pour se comporter comme une barre de sélection d'onglet sans aucune contrainte.
 * <p/>
 * Chaque état comporte un lien potentiellement cliquable qui déclenche une transition ou une demande d'une transition vers cet état au sein
 * de la machine à état.
 * <p/>
 * Un état peut être clickable (ou actionnable) ou non selon les paramètres donnés au compoosant et l'étatd e parcours
 * de la collection d'états:
 *
 * <ul>
 *     <li>reachedStateOnly à true (défaut) indique que seul les états déjà atteint une fois sont clickables.
 *     <li>untiCurrentOnly à true (défaut) indique que les états au delà de l'état courant ne sont plus clickables.
 *
 * <p/>
 * Un template de type zia-state-bar-label.directive peut être fournis en tant que content d'une instance pour
 * overrider le template par défaut du label.
 *
 * \@example
 * <zia-state-bar [id]="id+'-state-bar'" [states]="states" [autoChangeState]="autoChangeState">
 *              <ng-container *ziaStateBarLabel="let state=state">
 *                  <span>{{state?.value?.prenom}}</span>
 *                  <span>{{state?.value?.nom}}</span>
 *              </ng-container>
 * </zia-state-bar>
 */
var ZiaStateBarComponent = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function ZiaStateBarComponent(elementRef) {
        this.elementRef = elementRef;
        this._autoChangeState = false;
        this._reachedStateOnly = true;
        this._untilCurrentOnly = true;
    }
    Object.defineProperty(ZiaStateBarComponent.prototype, "autoChangeState", {
        /**
         * Retourne true si un évènement de déclenchement effectif de la transition est tiré lors du click sur
         * un état.
         * @return {?} true si un évènement de déclenchement effectif de la transition est tiré lors du click sur
         * un état.
         */
        get: function () {
            return this._autoChangeState;
        },
        /**
         * Détermine le type de l'évènement envoyé à la machine à état liée lorsqu'un utilisateur
         * clique sur un état :
         * <ul>
         *     <li>true => un évènement de déclenchement effectif de la transition est tiré
         *     <li>false => un évènement de demande de déclenchement de la transition est tiré, qu'il appartient ensuite
         *     au code métier de transformer en évènement de déclenchement effectif si les conditions métier sont satisfaites.
         *
         * @param {?} value à donner
         * @return {?}
         */
        set: function (value) {
            this._autoChangeState = this.getBooleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaStateBarComponent.prototype, "reachedStateOnly", {
        /**
         * Retourne true si seul un état déjà 'reached' peut être activé/clické.
         * @return {?} true si seul un état déjà 'reached' peut être activé.
         */
        get: function () {
            return this._reachedStateOnly;
        },
        /**
         * Détermine si seul un état déjà 'reached' peut être activé.
         * @param {?} value a donner.
         * @return {?}
         */
        set: function (value) {
            this._reachedStateOnly = this.getBooleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaStateBarComponent.prototype, "untilCurrentOnly", {
        /**
         * Retourne true si seul les états jusqu'à l'état courant inclu peuvent être activé/clické.
         * @return {?} true si seul les états jusqu'à l'état courant inclu peuvent être activé/clické.
         */
        get: function () {
            return this._untilCurrentOnly;
        },
        /**
         * Détermine si seul les états jusqu'à l'état courant inclu peuvent être activé/clické.
         * @param {?} value à donner.
         * @return {?}
         */
        set: function (value) {
            this._untilCurrentOnly = this.getBooleanValue(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaStateBarComponent.prototype, "templateRef", {
        /**
         * Retourne le TemplateRef a utiliser pour le label.
         * <ul>
         *  <li>En priorité celui passé en \@Input
         *  <li>Ensuite on cherche dans le content de l'instance.
         *  <li>Enfin si on se rabat sur le default inclu dans le template du composant.
         * @return {?} le TemplateRef a utiliser pour le label.
         */
        get: function () {
            return this.inputTemplateRef || this.contentTemplateRef || this.defaultTemplateRef;
        },
        /**
         * Override du templateRef a utiliser comme template du label d'un State.
         * <p/>
         * Facultatif, si non fourni le composant essaie d'abord de trouver une ZiaStateBarLabelDirective dans le
         * content qui lui est fourni, et si non trouvé utilise le defaultTemplateRef.
         *
         * @param {?} templateRef
         * @return {?}
         */
        set: function (templateRef) {
            this.inputTemplateRef = templateRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaStateBarComponent.prototype, "cssClass", {
        /**
         * @return {?}
         */
        get: function () {
            return 'state-bar';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialisation du composant.
     * <ul>
     *     <li>on colle la classe css 'focusgroup' pour pouvoir styler correstement ce composant.
     *     <li>on colle aussi la classe css 'multiple-zia-choice' correspondant au nom du composant sans code evt pour styler.
     * @return {?}
     */
    ZiaStateBarComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.classList.add('state-bar');
    };
    /**
     * EventHandler du click sur un état donné.
     * @param {?} state donné.
     * @return {?} false pour interrompre le traitement de l'événement natif
     */
    ZiaStateBarComponent.prototype.onClick = function (state) {
        this.currentState = state;
        return false;
    };
    /**
     * Retourne true si l'état donné est l'état courant.
     * @param {?} state donné.
     * @return {?} true si l'état donné est l'état courant.
     */
    ZiaStateBarComponent.prototype.isCurrent = function (state) {
        return this.states.currentState === state;
    };
    /**
     * Retourne true si l'état donné a été reached.
     * @param {?} state donné.
     * @return {?} true si l'état donné a été reached.
     */
    ZiaStateBarComponent.prototype.isReached = function (state) {
        return state && state.reached;
    };
    /**
     * Retourne true si l'état donné est avant l'état courant.
     * @param {?} state donné.
     * @return {?} true si l'état donné est avant l'état courant.
     */
    ZiaStateBarComponent.prototype.isBeforeCurrent = function (state) {
        return state && this.states.getIndexOf(state) <= this.currentIndex;
    };
    /**
     * Retourne true si l'état donné est "actionable", peut être activé.
     * @param {?} state donné
     * @return {?} si l'état donné est "actionable", peut être activé.
     */
    ZiaStateBarComponent.prototype.isActionable = function (state) {
        return (!this.reachedStateOnly || this.isReached(state))
            && (!this.untilCurrentOnly || this.isBeforeCurrent(state));
    };
    Object.defineProperty(ZiaStateBarComponent.prototype, "currentState", {
        /**
         * Utilisé par le template pour récupérer l'état courant.
         * @return {?} etat courant.
         */
        get: function () {
            return this.states && this.states.currentState;
        },
        /**
         * Appelé par le template lorsque l'utilisateur choisi l'état vers lequel il veut aller.
         *
         * Selon this.autoChangeState on tire un évènement de transition ou de demande de transition.
         *
         * @param {?} state cible.
         * @return {?}
         */
        set: function (state) {
            var /** @type {?} */ delta = this.states.computeDelta(this.states.currentState, state);
            if (this.autoChangeState) {
                this.states.doTransition({ value: delta });
            }
            else {
                this.states.requestTransition({ value: delta });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaStateBarComponent.prototype, "currentIndex", {
        /**
         * Utilisé par le template pour récupérer l'index courant.
         * @return {?} index courant.
         */
        get: function () {
            return this.states && this.states.currentStateIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZiaStateBarComponent.prototype, "label", {
        /**
         * Retourne le label d'un état.
         * @return {?} le label d'un état.
         */
        get: function () {
            return this.states && (this.states.currentState.label || this.states.currentState.id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Retourne le label ou si absent l'id du state en paramètre.
     * @param {?} state
     * @return {?} le label ou si absent l'id du state en paramètre.
     */
    ZiaStateBarComponent.prototype.toLabel = function (state) {
        return (state && (state.label || state.id)) || '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ZiaStateBarComponent.prototype.getBooleanValue = function (value) {
        if (true === value) {
            return true;
        }
        else {
            return 'true' === value;
        }
    };
    return ZiaStateBarComponent;
}());
ZiaStateBarComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'zia-state-bar',
                template: "<div *ngIf=\"states\">\n  <ul [attr.current-index]=\"currentIndex\">\n    <li *ngFor=\"let state of states.collection;\" [ngClass]=\"{'current': isCurrent(state), 'reached': isReached(state), 'actionable': isActionable(state)}\">\n      <a href=\"#\" class=\"state-bar-label\" *ngIf=\"isActionable(state)\" (click)=\"onClick(state)\">\n        <!-- State clickable -->\n        <ng-container *ngTemplateOutlet=\"templateRef; context: {$implicit: state, state: state}\"></ng-container>\n      </a>\n      <div class=\"state-bar-label\" *ngIf=\"!isActionable(state)\">\n        <!-- State non clickable -->\n        <ng-container *ngTemplateOutlet=\"templateRef; context: {$implicit: state, state: state}\"></ng-container>\n      </div>\n    </li>\n  </ul>\n\n  <p aria-live=\"polite\" aria-relevant=\"all\" *ngIf=\"states\" class=\"state-bar-label\">Etape {{states.currentStateIndex+1}} sur {{states.collection.length}}</p>\n</div>\n\n<!-- Template par d\u00E9faut du label d'un state -->\n<ng-container *ziaStateBarLabel=\"let state=state\"><span class=\"state-id\">{{toLabel(state)}}</span></ng-container>\n",
                styles: ["@media (max-width:656px){.state-bar{display:none}}"]
            },] },
];
/** @nocollapse */
ZiaStateBarComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
ZiaStateBarComponent.propDecorators = {
    "states": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autoChangeState": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "reachedStateOnly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "untilCurrentOnly": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "templateRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "contentTemplateRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [ZiaStateBarLabelDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "defaultTemplateRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: [ZiaStateBarLabelDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "cssClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.class',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * NgModule de feature exposant juste un composant ZiaStateBarComponent permettant de réaliser est une barre d'état-transition
 * customisable, émettant un Observable des transitions déclenché, concue pour servie de base à l'implémentation
 * d'une *barre d'étape* d'un TLS extranet.
 */
var ZiaStateBarModule = /** @class */ (function () {
    function ZiaStateBarModule() {
    }
    return ZiaStateBarModule;
}());
ZiaStateBarModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                exports: [
                    ZiaStateBarComponent,
                    ZiaStateBarLabelDirective
                ],
                declarations: [
                    ZiaStateBarComponent,
                    ZiaStateBarLabelDirective
                ]
            },] },
];
/** @nocollapse */
ZiaStateBarModule.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Composant lié a une machine à état de type States dont la value (payload) est censée être un type
 * (classe, fonction constructeur) de composant Angular.
 * <p/>
 * Ce composant permet :
 * <ul>
 *     <li>d'afficher la barre d'état associé à la machine à état liée
 *     <li>d'afficher automatiquement le composant correspondant a l'état courant de la machine à état.
 * <p/>
 * La configuration de la machine à état, c.a.d. l'initialisation des états et de leur value sous forme
 * de type Angular doit **obligatoirement** être réalisée dans un Component et non dans un \@Injectable.
 * <p/>
 * Par ailleurs il est nécessaire de rajouter le type  des composants angular dans la propriété
 * entryComponent d'un ngModule.
 * <p/>
 * Un template de type zia-state-bar-label.directive peut être fournis en tant que content d'une instance
 * pour overrider le template par défaut du label.
 *
 * \@example
 * // template :
 * <zia-state-wizard [states]="states" [autoChangeState]="false">
 *                 <ng-container *ziaStateBarLabel="let state=state">
 *                   <span class="prenom">{{state?.value?.prenom}}</span>
 *                   <span class="nom">{{state?.value?.nom}}</span>
 *                 </ng-container>
 * </zia-state-wizard>
 *
 * \@example
 * // configuration :
 * export class StateWizardFormExampleComponent implements OnInit {
 *
 * states: States<Type<any>>;
 *
 * constructor(private _stateWizardService: StateWizardService, public navigationStateService: NavigationStateService) {
 * }
 *
 * ngOnInit() {
 *   this.states = new States<Type<any>>([
 *     new State<Type<any>>({id: 'form1', value: Form1Component}),
 *     new State<Type<any>>({id: 'form2', value: Form2Component}),
 *     new State<Type<any>>({id: 'form3', value: Form3Component}),
 *   ]);
 *   this._stateWizardService.states = this.states;
 * }}
 *
 * \@example
 * // ngModule :
 * entryComponents: [Form1Component, Form2Component, Form3Component],
 */
var ZiaStateWizardComponent = /** @class */ (function () {
    /**
     * @param {?} elementRef
     */
    function ZiaStateWizardComponent(elementRef) {
        this.elementRef = elementRef;
        /**
         * Relaie le paramètre eponyme sur la barre d'état permettant de déterminer lorque l'utilisateur
         * choisi un état s'il faut tirer un évènement de transition ou de demande de transition (après validation métier).
         *
         */
        this.autoChangeState = false;
        /**
         * Titre facultatif du composant (accessibilité)
         * Valeur par défaut : `barre d'étape`
         */
        this.title = "barre d'\u00E9tape";
    }
    Object.defineProperty(ZiaStateWizardComponent.prototype, "cssClass", {
        /**
         * @return {?}
         */
        get: function () {
            return 'state-wizard step-wizard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ZiaStateWizardComponent.prototype.ngOnInit = function () {
        this.id = this.elementRef.nativeElement.id;
    };
    return ZiaStateWizardComponent;
}());
ZiaStateWizardComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'zia-state-wizard',
                template: "\n<!-- Si un templateRef a \u00E9t\u00E9 fourni au sein du content de l'instance, on l'utilise -->\n<zia-state-bar class=\"step-bar\" role=\"navigation\" [attr.aria-label]=\"title\"\n               *ngIf=\"templateRef\" [id]=\"id+'-state-bar'\" [states]=\"states\" [autoChangeState]=\"autoChangeState\" [templateRef]=\"templateRef\">\n</zia-state-bar>\n\n<!-- Si pas de templateRef en input -->\n<zia-state-bar class=\"step-bar\" role=\"navigation\" [attr.aria-label]=\"title\"\n               *ngIf=\"!templateRef\" [id]=\"id+'-state-bar'\" [states]=\"states\" [autoChangeState]=\"autoChangeState\">\n</zia-state-bar>\n\n<!-- Insertion du composant de type port\u00E9 par le payload de l'\u00E9tat courant -->\n<ng-container *ngComponentOutlet=\"states?.currentState?.value\"></ng-container>\n",
                styles: [""]
            },] },
];
/** @nocollapse */
ZiaStateWizardComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
]; };
ZiaStateWizardComponent.propDecorators = {
    "states": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "autoChangeState": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "templateRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [ZiaStateBarLabelDirective, { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },] },],
    "cssClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"], args: ['attr.class',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * NgModule de feature exposant le composant ZiaStateWizardComponent qui est la composition d'une *zia-state-bar*
 * avec une *zia-form-action-panel* conçue pour pouvoir servir de base à l'implémentation d'un wizard/assistant
 * de navigation au sein des étapes d'un TLS.
 */
var ZiaStateWizardModule = /** @class */ (function () {
    function ZiaStateWizardModule() {
    }
    return ZiaStateWizardModule;
}());
ZiaStateWizardModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ZiaStateBarModule
                ],
                exports: [
                    ZiaStateWizardComponent, ZiaStateBarModule
                ],
                declarations: [ZiaStateWizardComponent]
            },] },
];
/** @nocollapse */
ZiaStateWizardModule.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service utilitaire sur les Form, en particulier pour faire des actions sur tous les FormControl d'un
 * FormGroup.
 *
 * @author c82plac
 */
var FormUtilsService = /** @class */ (function () {
    function FormUtilsService() {
    }
    /**
     * Appelle updateValueAndValidity sur tous les formControl d'un formGroup donné.
     * @param {?} formGroup donné
     * @param {?=} opts du updateValueAndValidity
     * @return {?}
     */
    FormUtilsService.prototype.updateValueAndValidity = function (formGroup, opts) {
        if (opts === void 0) { opts = {}; }
        this.eachFormControlDo(function (control, opt) { return control.updateValueAndValidity(opt); }, formGroup, opts);
    };
    /**
     * Appelle markAsUntouched sur tous les formControl d'un formGroup donné.
     * @param {?} formGroup
     * @param {?=} opts
     * @return {?}
     */
    FormUtilsService.prototype.markAsUntouched = function (formGroup, opts) {
        if (opts === void 0) { opts = {}; }
        this.eachFormControlDo(function (control, opt) { return control.markAsUntouched(opt); }, formGroup, opts);
    };
    /**
     * Appelle FormControlFn donné sur tous les formControl d'un formGroup donné.
     *
     * @param {?} fn donnée
     * @param {?} formGroup donné
     * @param {?=} opts donnés
     * @return {?}
     */
    FormUtilsService.prototype.eachFormControlDo = function (fn, formGroup, opts) {
        var _this = this;
        if (opts === void 0) { opts = {}; }
        Object.keys(formGroup.controls).forEach(function (field) {
            var /** @type {?} */ control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]) {
                fn(control, opts);
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]) {
                _this.eachFormControlDo(fn, control, opts);
            }
        });
    };
    return FormUtilsService;
}());
FormUtilsService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
FormUtilsService.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service de positionnement du focus.
 */
var FocusService = /** @class */ (function () {
    /**
     * @param {?} document
     */
    function FocusService(document) {
        this.document = document;
    }
    /**
     * Positionne le focus sur l'élément d'id donné si possible.
     * @param {?} elementId donné.
     * @return {?}
     */
    FocusService.prototype.putFocusOn = function (elementId) {
        var /** @type {?} */ element = this.document.getElementById(elementId);
        if (element && element.focus) {
            element.focus();
        }
        else {
            if (console && console.warn) {
                console.warn('FocusService.putFocusOn ne peut pas metrre le focus sur l element d id', elementId);
            }
        }
    };
    return FocusService;
}());
FocusService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"] },
];
/** @nocollapse */
FocusService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] },] },
]; };

/**
 * Liste des modules à importer et exporter.
 */
var /** @type {?} */ importExport = [
    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
    ZiaActionBarModule,
    ZiaActionPanelModule,
    ZiaStateBarModule,
    ZiaStateWizardModule
];
/**
 * zia-composants est un package facultatif offrant des services et composants additionnels :
 * <p/>
 * Services et composants liés à la navigation (chacun exposé individuellement dans un NgModule de feature dédiés).
 * <ul>
 *  <li>*zia-action-bar* est une barre d'action de 1 à 4 boutons d'action génériques, émettant un Observable des actions
 *  déclanchées.
 *  <li>zia-form-action-panel* est un panel composé d'une barre d'action et d'un ou plusieurs formulaire, émettant un
 *  Observable des actions déclenchés  combiné au status valide/invalide des formulaires
 *  <li>zia-state-bar* est une barre d'état-transition customisable, émettant un Observable des transitions déclenché,
 *  concue pour servie de base à l'implémentation d'une *barre d'étape* d'un TLS extranet.
 *  <li>zia-state-wizard* est la composition d'une *zia-state-bar* avec une *zia-form-action-panel* conçue pour pouvoir
 *  servir de base à l'implémentation d'un wizard/assistant de navigation au sein des étapes d'un TLS.
 * </ul>
 *
 * Super classes de base *utilitaires* permettant d'intégrer a angular de nouveaux composants custom de formulaire
 * *pleinement* reconnus par le framework
 * <ul>
 *  <li>*value-accessor-base* est une implémentation de base d'un ControlValueAccessor typé basé sur une propriété innerValue.
 *  <li>*focus-group-accessore-base* est une extension de ValueAccessorBase pour les composants custom comme par exemple
 *  les listes de choix qui génèrent des inputs radio ou checkbox et "composent" c.a.d.synthétisent les saisies dans leur propre value.
 * </ul>
 */
var ZiaComposantsModule = /** @class */ (function () {
    function ZiaComposantsModule() {
    }
    return ZiaComposantsModule;
}());
ZiaComposantsModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: importExport,
                exports: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(importExport),
            },] },
];
/** @nocollapse */
ZiaComposantsModule.ctorParameters = function () { return []; };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=zia-composants.js.map


/***/ }),

/***/ "./src/app/commander/commander-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/commander/commander-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CommanderRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanderRoutingModule", function() { return CommanderRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_service_menu_config_resolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/service/menu-config-resolver.service */ "./src/app/shared/service/menu-config-resolver.service.ts");
/* harmony import */ var _page_accueil_commander_accueil_commander_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/accueil-commander/accueil-commander.component */ "./src/app/commander/page/accueil-commander/accueil-commander.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/commander/layout/layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
        children: [
            {
                path: '',
                redirectTo: 'commanderAccueil',
                pathMatch: 'full'
            },
            {
                path: 'commanderAccueil',
                component: _page_accueil_commander_accueil_commander_component__WEBPACK_IMPORTED_MODULE_3__["AccueilCommanderComponent"],
                resolve: {
                    MenuConfigModel: _shared_service_menu_config_resolver_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfigResolverService"]
                }
            }
        ]
    }
];
var CommanderRoutingModule = /** @class */ (function () {
    function CommanderRoutingModule() {
    }
    CommanderRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CommanderRoutingModule);
    return CommanderRoutingModule;
}());



/***/ }),

/***/ "./src/app/commander/commander.module.ts":
/*!***********************************************!*\
  !*** ./src/app/commander/commander.module.ts ***!
  \***********************************************/
/*! exports provided: CommanderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanderModule", function() { return CommanderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _commander_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commander-routing.module */ "./src/app/commander/commander-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_widget_commander_commander_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/widget/commander/commander.component */ "./src/app/commander/shared/widget/commander/commander.component.ts");
/* harmony import */ var _page_accueil_commander_accueil_commander_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/accueil-commander/accueil-commander.component */ "./src/app/commander/page/accueil-commander/accueil-commander.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/commander/layout/layout.component.ts");
/* harmony import */ var _shared_widget_choix_simple_choix_simple_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/widget/choix-simple/choix-simple.component */ "./src/app/commander/shared/widget/choix-simple/choix-simple.component.ts");
/* harmony import */ var _shared_widget_choix_multiple_choix_multiple_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/widget/choix-multiple/choix-multiple.component */ "./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/esm5/material-moment-adapter.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var CommanderModule = /** @class */ (function () {
    function CommanderModule() {
    }
    CommanderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _commander_routing_module__WEBPACK_IMPORTED_MODULE_2__["CommanderRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [
                _page_accueil_commander_accueil_commander_component__WEBPACK_IMPORTED_MODULE_5__["AccueilCommanderComponent"],
                _shared_widget_commander_commander_component__WEBPACK_IMPORTED_MODULE_4__["CommanderComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"],
                _shared_widget_choix_simple_choix_simple_component__WEBPACK_IMPORTED_MODULE_7__["ChoixSimpleComponent"],
                _shared_widget_choix_multiple_choix_multiple_component__WEBPACK_IMPORTED_MODULE_8__["ChoixMultipleComponent"]
            ],
            providers: [
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"], useValue: 'fr' },
                { provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"], useValue: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MAT_MOMENT_DATE_FORMATS"] },
            ],
        })
    ], CommanderModule);
    return CommanderModule;
}());



/***/ }),

/***/ "./src/app/commander/layout/layout.component.html":
/*!********************************************************!*\
  !*** ./src/app/commander/layout/layout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/commander/layout/layout.component.scss":
/*!********************************************************!*\
  !*** ./src/app/commander/layout/layout.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmRlci9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/commander/layout/layout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/commander/layout/layout.component.ts ***!
  \******************************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/commander/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/commander/layout/layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/commander/page/accueil-commander/accueil-commander.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/commander/page/accueil-commander/accueil-commander.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-commander *ngIf=\"commande\" [commande]=\"commande\" [listeMenuConfig]=\"listeMenuConfig\"></app-commander>\n\n\n"

/***/ }),

/***/ "./src/app/commander/page/accueil-commander/accueil-commander.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/commander/page/accueil-commander/accueil-commander.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmRlci9wYWdlL2FjY3VlaWwtY29tbWFuZGVyL2FjY3VlaWwtY29tbWFuZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/commander/page/accueil-commander/accueil-commander.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/commander/page/accueil-commander/accueil-commander.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AccueilCommanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilCommanderComponent", function() { return AccueilCommanderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_model_commande_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/model/commande-model */ "./src/app/shared/model/commande-model.ts");
/* harmony import */ var _shared_widget_abstract_smart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/widget/abstract-smart-component */ "./src/app/commander/shared/widget/abstract-smart-component.ts");
/* harmony import */ var _shared_service_application_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/service/application.service */ "./src/app/shared/service/application.service.ts");
/* harmony import */ var _shared_service_commande_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/service/commande.service */ "./src/app/shared/service/commande.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccueilCommanderComponent = /** @class */ (function (_super) {
    __extends(AccueilCommanderComponent, _super);
    function AccueilCommanderComponent(activatedRoute, application, commandeService) {
        var _this = _super.call(this, activatedRoute) || this;
        _this.application = application;
        _this.commandeService = commandeService;
        _this.listeMenuConfig = _this.entity;
        return _this;
    }
    Object.defineProperty(AccueilCommanderComponent.prototype, "entityName", {
        get: function () {
            return 'MenuConfigModel';
        },
        enumerable: true,
        configurable: true
    });
    AccueilCommanderComponent.prototype.ngOnInit = function () {
        this.commande = new _shared_model_commande_model__WEBPACK_IMPORTED_MODULE_2__["CommandeModel"]();
    };
    AccueilCommanderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accueil',
            template: __webpack_require__(/*! ./accueil-commander.component.html */ "./src/app/commander/page/accueil-commander/accueil-commander.component.html"),
            styles: [__webpack_require__(/*! ./accueil-commander.component.scss */ "./src/app/commander/page/accueil-commander/accueil-commander.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_service_application_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"],
            _shared_service_commande_service__WEBPACK_IMPORTED_MODULE_5__["CommandeService"]])
    ], AccueilCommanderComponent);
    return AccueilCommanderComponent;
}(_shared_widget_abstract_smart_component__WEBPACK_IMPORTED_MODULE_3__["AbstractSmartEntityComponent"]));



/***/ }),

/***/ "./src/app/commander/shared/widget/abstract-smart-component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/commander/shared/widget/abstract-smart-component.ts ***!
  \*********************************************************************/
/*! exports provided: AbstractSmartEntityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSmartEntityComponent", function() { return AbstractSmartEntityComponent; });
var AbstractSmartEntityComponent = /** @class */ (function () {
    function AbstractSmartEntityComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.fetchEntity();
    }
    AbstractSmartEntityComponent.prototype.fetchEntity = function () {
        this.entity = this.activatedRoute.snapshot.data[this.entityName];
    };
    return AbstractSmartEntityComponent;
}());



/***/ }),

/***/ "./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template [ngIf]=\"values && internalObject\">\n  <ul *ngFor=\"let oneValue of values\">\n    <mat-checkbox [(ngModel)]=\"internalObject[oneValue]\" (ngModelChange)=\"onChange()\"> {{oneValue}}</mat-checkbox>\n  </ul>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmRlci9zaGFyZWQvd2lkZ2V0L2Nob2l4LW11bHRpcGxlL2Nob2l4LW11bHRpcGxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChoixMultipleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixMultipleComponent", function() { return ChoixMultipleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var zia_composants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zia-composants */ "./node_modules/zia-composants/fesm5/zia-composants.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChoixMultipleComponent = /** @class */ (function (_super) {
    __extends(ChoixMultipleComponent, _super);
    function ChoixMultipleComponent(elementRef) {
        var _this = _super.call(this, elementRef) || this;
        _this.internalObject = {};
        _this.toto = 'toto';
        return _this;
    }
    ChoixMultipleComponent_1 = ChoixMultipleComponent;
    Object.defineProperty(ChoixMultipleComponent.prototype, "value", {
        get: function () {
            return ChoixMultipleComponent_1.toList(this.internalObject);
        },
        set: function (liste) {
            this['innerValue'] = liste;
            this.internalObject = ChoixMultipleComponent_1.toObject(liste);
        },
        enumerable: true,
        configurable: true
    });
    ChoixMultipleComponent.toObject = function (list) {
        if (!list) {
            return list;
        }
        var object = {};
        if (list && list.length > 0) {
            for (var i = 0; i < list.length; i++) {
                object[list[i]] = true;
            }
        }
        return object;
    };
    ChoixMultipleComponent.toList = function (object) {
        if (!object) {
            return object;
        }
        var list = [];
        if (object) {
            var properties = Object['entries'](object);
            for (var i = 0; i < properties.length; i++) {
                if (!!properties[i][1]) {
                    list.push(properties[i][0]);
                }
            }
        }
        return list;
    };
    ChoixMultipleComponent.prototype.ngOnInit = function () {
    };
    ChoixMultipleComponent.prototype.writeValue = function (value) {
        _super.prototype.writeValue.call(this, value);
        this.internalObject = ChoixMultipleComponent_1.toObject(value);
    };
    ChoixMultipleComponent.prototype.onChange = function () {
        this.fireValueChanged(this.value);
    };
    var ChoixMultipleComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChoixMultipleComponent.prototype, "values", void 0);
    ChoixMultipleComponent = ChoixMultipleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choix-multiple',
            template: __webpack_require__(/*! ./choix-multiple.component.html */ "./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.html"),
            styles: [__webpack_require__(/*! ./choix-multiple.component.scss */ "./src/app/commander/shared/widget/choix-multiple/choix-multiple.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ChoixMultipleComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ChoixMultipleComponent);
    return ChoixMultipleComponent;
}(zia_composants__WEBPACK_IMPORTED_MODULE_1__["FocusgroupAccessorBase"]));



/***/ }),

/***/ "./src/app/commander/shared/widget/choix-simple/choix-simple.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/commander/shared/widget/choix-simple/choix-simple.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-radio-group [(ngModel)]=\"value\">\n  <mat-radio-button *ngFor=\"let oneValue of values\" [value]=\"oneValue\">\n    {{oneValue}}\n  </mat-radio-button>\n</mat-radio-group>\n"

/***/ }),

/***/ "./src/app/commander/shared/widget/choix-simple/choix-simple.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/commander/shared/widget/choix-simple/choix-simple.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmRlci9zaGFyZWQvd2lkZ2V0L2Nob2l4LXNpbXBsZS9jaG9peC1zaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/commander/shared/widget/choix-simple/choix-simple.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/commander/shared/widget/choix-simple/choix-simple.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChoixSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChoixSimpleComponent", function() { return ChoixSimpleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var zia_composants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zia-composants */ "./node_modules/zia-composants/fesm5/zia-composants.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChoixSimpleComponent = /** @class */ (function (_super) {
    __extends(ChoixSimpleComponent, _super);
    function ChoixSimpleComponent(elementRef) {
        return _super.call(this, elementRef) || this;
    }
    ChoixSimpleComponent_1 = ChoixSimpleComponent;
    ChoixSimpleComponent.prototype.ngOnInit = function () {
    };
    var ChoixSimpleComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ChoixSimpleComponent.prototype, "values", void 0);
    ChoixSimpleComponent = ChoixSimpleComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-choix-simple',
            template: __webpack_require__(/*! ./choix-simple.component.html */ "./src/app/commander/shared/widget/choix-simple/choix-simple.component.html"),
            styles: [__webpack_require__(/*! ./choix-simple.component.scss */ "./src/app/commander/shared/widget/choix-simple/choix-simple.component.scss")],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return ChoixSimpleComponent_1; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ChoixSimpleComponent);
    return ChoixSimpleComponent;
}(zia_composants__WEBPACK_IMPORTED_MODULE_1__["FocusgroupAccessorBase"]));



/***/ }),

/***/ "./src/app/commander/shared/widget/commander/commander.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/commander/shared/widget/commander/commander.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\">\n  <mat-card>\n    <mat-card-header>\n      <i mat-card-avatar class=\"material-icons md-36\">assignment</i>\n      <mat-card-title-group *ngIf=\"commande && !commande.traitee\">\n        <mat-card-title>{{newCommande ? 'Créer' : 'Vous pouvez encore modifier'}} votre commande</mat-card-title>\n        <mat-card-subtitle>Sélectionner les ingrédients étape par étape</mat-card-subtitle>\n      </mat-card-title-group>\n      <mat-card-title-group *ngIf=\"commande && commande.traitee\">\n        <mat-card-title>Vous ne pouvez plus modifier votre commande, désolé</mat-card-title>\n      </mat-card-title-group>\n    </mat-card-header>\n    <mat-card-content>\n\n      <mat-vertical-stepper *ngIf=\"commande && !commande.traitee\" #stepper>\n        <mat-step>\n          <ng-template matStepLabel>Je choisis le menu {{commande.menu}}</ng-template>\n          <app-choix-simple class=\"choix-menu\" [values]=\"listeMenus\" [(ngModel)]=\"commande.menu\" required\n                            #ngMenu=\"ngModel\"\n                            name=\"menu\" (ngModelChange)=\"onChangeMenu($event); stepper.next()\"></app-choix-simple>\n          <mat-error *ngIf=\"hasError(ngMenu)\">Champ requis</mat-error>\n        </mat-step>\n\n        <ng-template [ngIf]=\"commande && commande.menu && listePlats && listePlats.length > 1\">\n          <mat-step>\n            <ng-template matStepLabel>Je choisis comme plat {{commande.plat}}</ng-template>\n            <app-choix-simple [values]=\"listePlats\" [(ngModel)]=\"commande.plat\" name=\"plat\" required\n                              #ngPlat=\"ngModel\"\n                              (ngModelChange)=\"onChangePlat(); stepper.next()\" #plat></app-choix-simple>\n            <mat-error *ngIf=\"hasError(ngPlat)\">Champ requis</mat-error>\n          </mat-step>\n        </ng-template>\n\n        <ng-template [ngIf]=\"commande.plat && plusieurPains\">\n          <mat-step [stepControl]=\"f.control.pain\">\n            <ng-template matStepLabel>Je choisis comme pain {{commande.pain}}</ng-template>\n            <app-choix-simple [values]=\"listePains\" [(ngModel)]=\"commande.pain\" name=\"pain\" required\n                              #ngPain=\"ngModel\"\n                              (ngModelChange)=\"stepper.next()\">\n            </app-choix-simple>\n            <mat-error *ngIf=\"hasError(ngPain)\">Champ requis</mat-error>\n          </mat-step>\n        </ng-template>\n\n        <ng-template [ngIf]=\"commande.plat && listeIngredients\">\n          <mat-step>\n            <ng-template matStepLabel>Je choisis comme ingrédient principal {{commande.ingredient}}</ng-template>\n            <app-choix-simple [values]=\"listeIngredients\" [(ngModel)]=\"commande.ingredient\" name=\"ingredient\"\n                              required #ngIng=\"ngModel\"\n                              (ngModelChange)=\"stepper.next()\"></app-choix-simple>\n          </mat-step>\n          <mat-error *ngIf=\"hasError(ngIng)\">Champ requis</mat-error>\n        </ng-template>\n\n        <ng-template [ngIf]=\"commande.plat && listeAccompagenents\">\n          <mat-step>\n            <ng-template matStepLabel>Je choisis comme accompagnements {{commande.accompagnements.join(', ')}}\n            </ng-template>\n            <app-choix-multiple [values]=\"listeAccompagenents\" [(ngModel)]=\"commande.accompagnements\"\n                                (ngModelChange)=\"onAccompagnementChange()\" name=\"accompagnements\"\n            ></app-choix-multiple>\n          </mat-step>\n        </ng-template>\n\n        <ng-template [ngIf]=\"commande.plat && listeDesserts && listeDesserts.length > 0\">\n          <mat-step>\n            <ng-template matStepLabel>Je choisis comme dessert {{commande.dessert}}</ng-template>\n            <app-choix-simple [values]=\"listeDesserts\" [(ngModel)]=\"commande.dessert\" name=\"dessert\"\n                              (ngModelChange)=\"stepper.next()\"></app-choix-simple>\n          </mat-step>\n        </ng-template>\n\n        <ng-template [ngIf]=\"commande.plat && listeComplements && listeComplements.length > 0\">\n          <mat-step>\n            <ng-template matStepLabel>Je choisis comme complément {{commande.complement}}</ng-template>\n            <app-choix-simple [values]=\"listeComplements\" [(ngModel)]=\"commande.complement\" name=\"complement\"\n                              (ngModelChange)=\"stepper.next()\"></app-choix-simple>\n          </mat-step>\n        </ng-template>\n\n        <ng-template [ngIf]=\"commande.plat && listeBoissons && listeBoissons.length > 0\">\n          <mat-step>\n            <ng-template matStepLabel>Je choisis comme boisson {{commande.boisson}}</ng-template>\n            <app-choix-simple [values]=\"listeBoissons\" [(ngModel)]=\"commande.boisson\" name=\"boisson\"\n                              (ngModelChange)=\"stepper.next()\"></app-choix-simple>\n          </mat-step>\n        </ng-template>\n\n        <mat-step>\n          <ng-template matStepLabel>Terminé</ng-template>\n        </mat-step>\n      </mat-vertical-stepper>\n\n    </mat-card-content>\n  </mat-card>\n\n  <mat-divider><br></mat-divider>\n\n  <mat-card *ngIf=\"commande\">\n    <mat-card-header>\n      <i mat-card-avatar class=\"material-icons md-36\">send</i>\n      <mat-card-title-group>\n        <mat-card-title>{{getTitleCommander()}}\n        </mat-card-title>\n        <mat-card-subtitle>\n          <label *ngIf=\"commande?.menu\">Status: <span>{{ getStatus()}}</span></label>\n        </mat-card-subtitle>\n      </mat-card-title-group>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field>\n        <input name=\"nomPrenom\" matInput placeholder=\"Prenom Nom\" [(ngModel)]=\"commande.client\" required\n               (change)=\"onChangeClientOrDate()\" #ngNomPrenom>\n        <mat-error>Champ réquis pour passer commande</mat-error>\n      </mat-form-field>&nbsp;\n      <mat-form-field>\n        <input name=\"dateCommande\" matInput placeholder=\"Date commande\" [(ngModel)]=\"commande.dateCommande\"\n               (change)=\"onChangeClientOrDate()\">\n        <mat-error>Champ réquis pour passer commande</mat-error>\n      </mat-form-field>\n\n    </mat-card-content>\n    <mat-card-content *ngIf=\"commande && commande.menu && !commande.traitee\">\n      <app-commande [commande]=\"commande\"></app-commande>\n      <button  class=\"commander\" mat-raised-button mat-button color=\"primary\" (click)=\"onCommander()\">Commander</button>\n    </mat-card-content>\n  </mat-card>\n</form>\n"

/***/ }),

/***/ "./src/app/commander/shared/widget/commander/commander.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/commander/shared/widget/commander/commander.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choix-menu .mat-radio-group {\n  flex-direction: row; }\n\napp-commander .mat-divider {\n  margin: 1em 0; }\n\nbutton.commander {\n  margin-left: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbWFuZGVyL3NoYXJlZC93aWRnZXQvY29tbWFuZGVyL0M6XFxwbGF0Zm9ybXNnMl9SXzY0XFx3b3Jrc3BhY2VcXGNhbnRpbmUtY2xpZW50L3NyY1xcYXBwXFxjb21tYW5kZXJcXHNoYXJlZFxcd2lkZ2V0XFxjb21tYW5kZXJcXGNvbW1hbmRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLG9CQUFtQixFQUNwQjs7QUFFSDtFQUNFLGNBQWEsRUFDZDs7QUFDRDtFQUNFLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1hbmRlci9zaGFyZWQvd2lkZ2V0L2NvbW1hbmRlci9jb21tYW5kZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hvaXgtbWVudSB7XHJcbiAgLm1hdC1yYWRpby1ncm91cCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxufVxyXG5hcHAtY29tbWFuZGVyIC5tYXQtZGl2aWRlciB7XHJcbiAgbWFyZ2luOiAxZW0gMDtcclxufVxyXG5idXR0b24uY29tbWFuZGVyIHtcclxuICBtYXJnaW4tbGVmdDogMmVtO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/commander/shared/widget/commander/commander.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/commander/shared/widget/commander/commander.component.ts ***!
  \**************************************************************************/
/*! exports provided: CommanderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommanderComponent", function() { return CommanderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_commande_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/model/commande-model */ "./src/app/shared/model/commande-model.ts");
/* harmony import */ var _shared_service_commande_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/service/commande.service */ "./src/app/shared/service/commande.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CommanderComponent = /** @class */ (function () {
    function CommanderComponent(commandeService, snackBar) {
        this.commandeService = commandeService;
        this.snackBar = snackBar;
        this.newCommande = true;
        this.newCommande = true;
    }
    Object.defineProperty(CommanderComponent.prototype, "commande", {
        get: function () {
            return this._commande;
        },
        set: function (commande) {
            if (this.stepper) {
                this.stepper.selectedIndex = 0;
            }
            this._commande = commande;
            if (commande && commande.menu) {
                this.initilalizeMenuConfigFromMenu();
                this.newCommande = false;
            }
            if (commande && commande.plat) {
                this.initializePlatConfigFromPlat();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CommanderComponent.prototype, "plusieurPains", {
        get: function () {
            return this.listePains && this.listePains.length > 1;
        },
        enumerable: true,
        configurable: true
    });
    CommanderComponent.prototype.ngOnInit = function () {
        this.listeMenus = this.listeMenuConfig.map(function (v) { return v.id; });
    };
    CommanderComponent.prototype.onChangeMenu = function (theMenu) {
        var menu = theMenu || this.commande.menu;
        if (menu) {
            this.commande.menu = menu;
            this.initilalizeMenuConfigFromMenu();
            this.commande.plat = null;
            if (this.listePlats.length === 1) {
                this.commande.plat = this.listePlats[0];
                this.onChangePlat();
            }
            else {
                this.resetCommande();
            }
        }
    };
    CommanderComponent.prototype.initilalizeMenuConfigFromMenu = function () {
        var _this = this;
        this.menuConfig = this.listeMenuConfig.find(function (m) { return m.id === _this.commande.menu; });
        this.listePlats = this.menuConfig.plats.map(function (plat) { return plat.nom; });
    };
    CommanderComponent.prototype.onChangePlat = function () {
        this.resetCommande();
        this.initializePlatConfigFromPlat();
    };
    CommanderComponent.prototype.initializePlatConfigFromPlat = function () {
        var _this = this;
        this.platConfig = this.menuConfig.plats.find(function (plat) { return plat.nom === _this.commande.plat; });
        this.listePains = this.platConfig.pain;
        this.listeIngredients = this.platConfig.ingredient;
        this.listeAccompagenents = this.platConfig.accompagnements;
        this.listeDesserts = this.platConfig.dessert;
        this.listeComplements = this.platConfig.complement;
        this.listeBoissons = this.platConfig.boisson;
    };
    CommanderComponent.prototype.resetCommande = function () {
        this.commande.boisson = null;
        this.commande.complement = null;
        this.commande.dessert = null;
        this.commande.pain = null;
        this.commande.ingredient = null;
        this.commande.accompagnements = [];
    };
    CommanderComponent.prototype.onAccompagnementChange = function () {
    };
    CommanderComponent.prototype.onCommander = function () {
        var _this = this;
        if (this.commande && this.commande.client && this.commande.dateCommande
            && !this.form.invalid) {
            this.commande.clientDate = this.commande.client + this.commande.dateCommande.replace(/\//g, '');
            this.commande.id = this.commande.clientDate;
            this.commandeService.create(this.commande)
                .subscribe((function (commande) {
                _this.newCommande = false;
                _this.snackBar.open('Votre commande a été envoyée', 'Annuler', { duration: 3000 })
                    .onAction().subscribe(function () {
                    _this.commandeService.delete(commande).subscribe(function () {
                        _this.snackBar.open('Votre commande a été annulée', '', { duration: 3000 });
                        _this.newCommande = true;
                    });
                });
            }));
        }
        else {
            this.snackBar.open("Impossible d'envoyer la commande, il reste des champs non remplis", '', { duration: 3000 });
        }
    };
    CommanderComponent.prototype.onChangeClientOrDate = function () {
        var _this = this;
        this.commande.clientDate = this.commande.client + this.commande.dateCommande.replace(/\//g, '');
        this.commandeService.read(this.commande.clientDate)
            .subscribe(function (commande) {
            if (commande) {
                _this.commande = commande;
                _this.snackBar.open('Une commande existe pour ce nom à cette date', '', { duration: 3000 });
            }
        }, function (error) {
            _this.snackBar.open('Aucune commande pour ce nom et cette date', '', { duration: 1500 });
        });
    };
    CommanderComponent.prototype.hasError = function (control) {
        return control.invalid && (control.dirty || control.touched);
    };
    CommanderComponent.prototype.getStatus = function () {
        if (this.commande) {
            if (this.newCommande) {
                return this.form.invalid ? 'incomplète' : 'modifiable';
            }
            else {
                return this.commande.traitee ? 'traitée' : 'envoyée';
            }
        }
        return '';
    };
    CommanderComponent.prototype.getTitleCommander = function () {
        if (this.commande && !this.commande.menu) {
            return 'Consultez une commande';
        }
        else {
            return 'Votre commande';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CommanderComponent.prototype, "listeMenuConfig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_model_commande_model__WEBPACK_IMPORTED_MODULE_1__["CommandeModel"]),
        __metadata("design:paramtypes", [_shared_model_commande_model__WEBPACK_IMPORTED_MODULE_1__["CommandeModel"]])
    ], CommanderComponent.prototype, "commande", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatStepper"])
    ], CommanderComponent.prototype, "stepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], CommanderComponent.prototype, "form", void 0);
    CommanderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commander',
            template: __webpack_require__(/*! ./commander.component.html */ "./src/app/commander/shared/widget/commander/commander.component.html"),
            styles: [__webpack_require__(/*! ./commander.component.scss */ "./src/app/commander/shared/widget/commander/commander.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_service_commande_service__WEBPACK_IMPORTED_MODULE_2__["CommandeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CommanderComponent);
    return CommanderComponent;
}());



/***/ }),

/***/ "./src/app/shared/service/abstract-resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/service/abstract-resolver.ts ***!
  \*****************************************************/
/*! exports provided: AbstractResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractResolver", function() { return AbstractResolver; });
var AbstractResolver = /** @class */ (function () {
    function AbstractResolver(dao) {
        this.dao = dao;
    }
    AbstractResolver.prototype.resolve = function (route, state) {
        return this.dao.fetch();
    };
    return AbstractResolver;
}());



/***/ }),

/***/ "./src/app/shared/service/menu-config-resolver.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/service/menu-config-resolver.service.ts ***!
  \****************************************************************/
/*! exports provided: MenuConfigResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfigResolverService", function() { return MenuConfigResolverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-resolver */ "./src/app/shared/service/abstract-resolver.ts");
/* harmony import */ var _menu_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-config.service */ "./src/app/shared/service/menu-config.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuConfigResolverService = /** @class */ (function (_super) {
    __extends(MenuConfigResolverService, _super);
    function MenuConfigResolverService(service) {
        return _super.call(this, service) || this;
    }
    MenuConfigResolverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_menu_config_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfigService"]])
    ], MenuConfigResolverService);
    return MenuConfigResolverService;
}(_abstract_resolver__WEBPACK_IMPORTED_MODULE_1__["AbstractResolver"]));



/***/ })

}]);
//# sourceMappingURL=commander-commander-module.js.map