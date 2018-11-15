(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preparer-preparer-module"],{

/***/ "./src/app/preparer/page/accueil-preparer/accueil-preparer.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/preparer/page/accueil-preparer/accueil-preparer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"preparer-commande\">\n  <mat-card-header>\n    <i mat-card-avatar class=\"material-icons md-36\">assignment</i>\n    <mat-card-title-group>\n      <mat-card-title>Commandes</mat-card-title>\n    </mat-card-title-group>\n  </mat-card-header>\n\n  <mat-card class=\"commande\" *ngFor=\"let commande of commandes\"> <!--matBadge=\"!\" matBadgePosition=\"after above\">-->\n    <mat-card-content>\n      <app-commande-apreparer class=\"commande-content\" [commande]=\"commande\"></app-commande-apreparer>\n      <mat-slide-toggle class=\"action\"\n                        [checked]=\"commande.traitee\"\n                        (change)=\"onChange($event,commande)\"\n      >OK</mat-slide-toggle>\n    </mat-card-content>\n  </mat-card>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/preparer/page/accueil-preparer/accueil-preparer.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/preparer/page/accueil-preparer/accueil-preparer.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".preparer-commande .commande {\n  display: inline-block;\n  width: 95%;\n  padding: 8px;\n  margin: 1em 0; }\n\n.preparer-commande .action {\n  display: inline-block;\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlcGFyZXIvcGFnZS9hY2N1ZWlsLXByZXBhcmVyL0M6XFxwbGF0Zm9ybXNnMl9SXzY0XFx3b3Jrc3BhY2VcXGNhbnRpbmUtY2xpZW50L3NyY1xcYXBwXFxwcmVwYXJlclxccGFnZVxcYWNjdWVpbC1wcmVwYXJlclxcYWNjdWVpbC1wcmVwYXJlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdJLHNCQUFxQjtFQUNyQixXQUFVO0VBQ1YsYUFBWTtFQUNaLGNBQWEsRUFDZDs7QUFQSDtFQVNJLHNCQUFxQjtFQUNyQixhQUFZLEVBQ2IiLCJmaWxlIjoic3JjL2FwcC9wcmVwYXJlci9wYWdlL2FjY3VlaWwtcHJlcGFyZXIvYWNjdWVpbC1wcmVwYXJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmVwYXJlci1jb21tYW5kZSB7XHJcblxyXG4gIC5jb21tYW5kZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luOiAxZW0gMDtcclxuICB9XHJcbiAgLmFjdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/preparer/page/accueil-preparer/accueil-preparer.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/preparer/page/accueil-preparer/accueil-preparer.component.ts ***!
  \******************************************************************************/
/*! exports provided: AccueilPreparerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccueilPreparerComponent", function() { return AccueilPreparerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_commande_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/service/commande.service */ "./src/app/shared/service/commande.service.ts");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AccueilPreparerComponent = /** @class */ (function () {
    function AccueilPreparerComponent(commandeService, changeDetector) {
        this.commandeService = commandeService;
        this.changeDetector = changeDetector;
        this.commandes = [];
    }
    AccueilPreparerComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('AccueilPreparerComponent.ngOnInit ');
        this.unsubscribeSubject = new rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.commandeService.fetchMessage()
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribeSubject))
            .subscribe(function (crudAction) {
            console.log('SSE receiving ', crudAction);
            _this.doCrudAction(crudAction);
            _this.changeDetector.detectChanges();
        }, function (error) { return console.error('Error receiving SSE ', error); }, function () { return console.log('Completing SSE'); });
    };
    AccueilPreparerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribeSubject.next();
    };
    AccueilPreparerComponent.prototype.onChange = function (change, commande) {
        commande.traitee = change.checked;
        this.commandeService.update(commande).subscribe();
    };
    AccueilPreparerComponent.prototype.doCrudAction = function (crudAction) {
        if (crudAction.action === 'READ' || crudAction.action === 'CREATE') {
            this.commandes.push(crudAction.entity);
        }
        else if (crudAction.action === 'UPDATE') {
            var index = this.commandes.findIndex(function (cmd) { return cmd.id === crudAction.entity.id; });
            if (index > -1) {
                this.commandes[index] = crudAction.entity;
            }
            else {
                this.commandes.push(crudAction.entity);
            }
        }
    };
    AccueilPreparerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accueil-preparer',
            template: __webpack_require__(/*! ./accueil-preparer.component.html */ "./src/app/preparer/page/accueil-preparer/accueil-preparer.component.html"),
            styles: [__webpack_require__(/*! ./accueil-preparer.component.scss */ "./src/app/preparer/page/accueil-preparer/accueil-preparer.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_shared_service_commande_service__WEBPACK_IMPORTED_MODULE_1__["CommandeService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AccueilPreparerComponent);
    return AccueilPreparerComponent;
}());



/***/ }),

/***/ "./src/app/preparer/preparer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/preparer/preparer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PreparerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparerRoutingModule", function() { return PreparerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_accueil_preparer_accueil_preparer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page/accueil-preparer/accueil-preparer.component */ "./src/app/preparer/page/accueil-preparer/accueil-preparer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: 'preparerAccueil',
                pathMatch: 'full'
            },
            {
                path: 'preparerAccueil',
                component: _page_accueil_preparer_accueil_preparer_component__WEBPACK_IMPORTED_MODULE_2__["AccueilPreparerComponent"]
            }
        ]
    }
];
var PreparerRoutingModule = /** @class */ (function () {
    function PreparerRoutingModule() {
    }
    PreparerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PreparerRoutingModule);
    return PreparerRoutingModule;
}());



/***/ }),

/***/ "./src/app/preparer/preparer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/preparer/preparer.module.ts ***!
  \*********************************************/
/*! exports provided: PreparerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreparerModule", function() { return PreparerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _preparer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preparer-routing.module */ "./src/app/preparer/preparer-routing.module.ts");
/* harmony import */ var _page_accueil_preparer_accueil_preparer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/accueil-preparer/accueil-preparer.component */ "./src/app/preparer/page/accueil-preparer/accueil-preparer.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_widget_commande_apreparer_commande_apreparer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/widget/commande-apreparer/commande-apreparer.component */ "./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PreparerModule = /** @class */ (function () {
    function PreparerModule() {
    }
    PreparerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_page_accueil_preparer_accueil_preparer_component__WEBPACK_IMPORTED_MODULE_3__["AccueilPreparerComponent"], _shared_widget_commande_apreparer_commande_apreparer_component__WEBPACK_IMPORTED_MODULE_5__["CommandeAPreparerComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _preparer_routing_module__WEBPACK_IMPORTED_MODULE_2__["PreparerRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]
        })
    ], PreparerModule);
    return PreparerModule;
}());



/***/ }),

/***/ "./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\r\n  <p class=\"principal\">Pour {{commande.client}}, menu {{commande.menu}} : {{commande.plat}} {{commande.pain}} avec {{commande.ingredient}}</p>\r\n  <p *ngIf=\"commande.accompagnements && commande.accompagnements.length > 0\" class=\"accompagnement\">Accompagnement : {{commande.accompagnements.join(', ')}}</p>\r\n  <p class=\"autre\">\r\n    <span>{{commande.dessert}}</span> <span>{{commande.complement}}</span> <span>{{commande.boisson}}</span>\r\n  </p>\r\n</article>\r\n"

/***/ }),

/***/ "./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article {\n  width: 100%; }\n  article .accompagnement {\n    margin-left: 5%; }\n  article .autre {\n    margin-left: 5%;\n    display: flex;\n    flex-direction: row; }\n  article .autre span {\n      flex: 1;\n      margin: 0 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlcGFyZXIvc2hhcmVkL3dpZGdldC9jb21tYW5kZS1hcHJlcGFyZXIvQzpcXHBsYXRmb3Jtc2cyX1JfNjRcXHdvcmtzcGFjZVxcY2FudGluZS1jbGllbnQvc3JjXFxhcHBcXHByZXBhcmVyXFxzaGFyZWRcXHdpZGdldFxcY29tbWFuZGUtYXByZXBhcmVyXFxjb21tYW5kZS1hcHJlcGFyZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFXLEVBYVo7RUFkRDtJQUdJLGdCQUFlLEVBQ2hCO0VBSkg7SUFNSSxnQkFBZTtJQUNmLGNBQWE7SUFDYixvQkFBbUIsRUFLcEI7RUFiSDtNQVVNLFFBQU87TUFDUCxnQkFBZSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ByZXBhcmVyL3NoYXJlZC93aWRnZXQvY29tbWFuZGUtYXByZXBhcmVyL2NvbW1hbmRlLWFwcmVwYXJlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFydGljbGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC5hY2NvbXBhZ25lbWVudCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgfVxyXG4gIC5hdXRyZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHNwYW4ge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtYXJnaW46IDAgMC41ZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CommandeAPreparerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeAPreparerComponent", function() { return CommandeAPreparerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_model_commande_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/model/commande-model */ "./src/app/shared/model/commande-model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommandeAPreparerComponent = /** @class */ (function () {
    function CommandeAPreparerComponent() {
    }
    CommandeAPreparerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _shared_model_commande_model__WEBPACK_IMPORTED_MODULE_1__["CommandeModel"])
    ], CommandeAPreparerComponent.prototype, "commande", void 0);
    CommandeAPreparerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-commande-apreparer',
            template: __webpack_require__(/*! ./commande-apreparer.component.html */ "./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.html"),
            styles: [__webpack_require__(/*! ./commande-apreparer.component.scss */ "./src/app/preparer/shared/widget/commande-apreparer/commande-apreparer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommandeAPreparerComponent);
    return CommandeAPreparerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=preparer-preparer-module.js.map