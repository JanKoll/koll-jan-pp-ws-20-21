(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide-guide-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      Digitaler Guide\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"solid-primary\">\n\n  <!-- {{ data }} -->\n\n  <ion-scroll\n   scrollX=\"true\"\n   scrollY=\"true\"\n   zoom=\"true\"\n   maxZoom=\"3\"\n    >\n      <img src=\"../assets/map.png\" />\n</ion-scroll>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/guide/guide-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/guide/guide-routing.module.ts ***!
  \***********************************************/
/*! exports provided: GuidePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidePageRoutingModule", function() { return GuidePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _guide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guide.page */ "./src/app/guide/guide.page.ts");




const routes = [
    {
        path: '',
        component: _guide_page__WEBPACK_IMPORTED_MODULE_3__["GuidePage"]
    }
];
let GuidePageRoutingModule = class GuidePageRoutingModule {
};
GuidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GuidePageRoutingModule);



/***/ }),

/***/ "./src/app/guide/guide.module.ts":
/*!***************************************!*\
  !*** ./src/app/guide/guide.module.ts ***!
  \***************************************/
/*! exports provided: GuidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidePageModule", function() { return GuidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _guide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guide-routing.module */ "./src/app/guide/guide-routing.module.ts");
/* harmony import */ var _guide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guide.page */ "./src/app/guide/guide.page.ts");







let GuidePageModule = class GuidePageModule {
};
GuidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _guide_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuidePageRoutingModule"]
        ],
        declarations: [_guide_page__WEBPACK_IMPORTED_MODULE_6__["GuidePage"]]
    })
], GuidePageModule);



/***/ }),

/***/ "./src/app/guide/guide.page.scss":
/*!***************************************!*\
  !*** ./src/app/guide/guide.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlL2d1aWRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/guide/guide.page.ts":
/*!*************************************!*\
  !*** ./src/app/guide/guide.page.ts ***!
  \*************************************/
/*! exports provided: GuidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidePage", function() { return GuidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GuidePage = class GuidePage {
    constructor() { }
    ngOnInit() {
        fetch('./assets/data/guide.json').then(res => res.json())
            .then(json => {
            this.data = json;
        });
    }
};
GuidePage.ctorParameters = () => [];
GuidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guide',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./guide.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./guide.page.scss */ "./src/app/guide/guide.page.scss")).default]
    })
], GuidePage);



/***/ })

}]);
//# sourceMappingURL=guide-guide-module-es2015.js.map