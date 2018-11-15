(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/service/abstract-dao.ts":
/*!************************************************!*\
  !*** ./src/app/shared/service/abstract-dao.ts ***!
  \************************************************/
/*! exports provided: AbstractDao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractDao", function() { return AbstractDao; });
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__);

var AbstractDao = /** @class */ (function () {
    function AbstractDao(httpClient) {
        this.httpClient = httpClient;
        this.base = '/api';
    }
    AbstractDao.prototype.read = function (id) {
        return this.httpClient.get(this.base + this.url + '/' + id)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) { return console.log('read ', data); }, function (error) { return console.error('read error ', error); }));
    };
    AbstractDao.prototype.fetch = function () {
        return this.httpClient.get(this.base + this.url)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) { return console.log('fetch ', data); }, function (error) { return console.error('fetch error ', error); }));
    };
    AbstractDao.prototype.create = function (entity) {
        return this.httpClient.post(this.base + this.url, entity)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) { return console.log('post ', data); }, function (error) { return console.error('post error ', error); }));
    };
    AbstractDao.prototype.update = function (entity) {
        return this.httpClient.put(this.base + this.url, entity)
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) { return console.log('update ', data); }, function (error) { return console.error('update error ', error); }));
    };
    AbstractDao.prototype.delete = function (entity) {
        return this.httpClient.delete(this.base + this.url + '/' + entity['id'])
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(function (data) { return console.log('delete ', data); }, function (error) { return console.error('delete error ', error); }));
    };
    return AbstractDao;
}());



/***/ }),

/***/ "./src/app/shared/service/commande.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/service/commande.service.ts ***!
  \****************************************************/
/*! exports provided: CommandeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandeService", function() { return CommandeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_dao__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract-dao */ "./src/app/shared/service/abstract-dao.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__);
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





var CommandeService = /** @class */ (function (_super) {
    __extends(CommandeService, _super);
    function CommandeService(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        // this.url =  '/commande';
        _this.base = '';
        _this.url = 'https://serene-forest-85695.herokuapp.com/api/commande';
        return _this;
    }
    CommandeService.prototype.fetchMessage = function () {
        var _this = this;
        console.log('CommandeService.fetchMessage');
        return rxjs_index__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(function (observer) {
            var eventSource = new EventSource(_this.url + '/message');
            eventSource.onmessage = function (x) {
                console.log('onmessage x=', x);
                observer.next(JSON.parse(x.data));
            };
            eventSource.onerror = function (x) {
                console.error('onerror x=', x);
                observer.error(x);
            };
            return function () {
                eventSource.close();
            };
        }).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (event) {
            console.log('event ', event);
        }, function (error) { return console.log('error ', error); }));
    };
    CommandeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CommandeService);
    return CommandeService;
}(_abstract_dao__WEBPACK_IMPORTED_MODULE_1__["AbstractDao"]));



/***/ }),

/***/ "./src/app/shared/service/menu-config.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/menu-config.service.ts ***!
  \*******************************************************/
/*! exports provided: MenuConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfigService", function() { return MenuConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _abstract_dao__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./abstract-dao */ "./src/app/shared/service/abstract-dao.ts");
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



var MenuConfigService = /** @class */ (function (_super) {
    __extends(MenuConfigService, _super);
    function MenuConfigService(httpClient) {
        var _this = _super.call(this, httpClient) || this;
        _this.url = '/menuconfig';
        return _this;
    }
    MenuConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MenuConfigService);
    return MenuConfigService;
}(_abstract_dao__WEBPACK_IMPORTED_MODULE_2__["AbstractDao"]));



/***/ })

}]);
//# sourceMappingURL=common.js.map