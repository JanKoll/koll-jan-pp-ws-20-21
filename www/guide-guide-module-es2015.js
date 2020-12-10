(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide-guide-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"content\">\n    <div class=\"head\">\n      <div class=\"icon\">\n        <img src=\"../assets/icon/{{ data.icon }}\" alt=\"{{ data.name }} Icon\">\n      </div>\n\n      <h2>{{ data.name }}</h2>\n    </div>\n\n    <div class=\"text\">\n      <div class=\"close\" (click)=\"close()\">X</div>\n      <p>{{ data.intro }}</p>\n\n      <ion-img src=\"../assets/data/img/{{ data.name }}/{{ data.previmg }}\" alt=\"{{ data.name }} Vorschaubild\"></ion-img>\n\n      <div class=\"routerbtn\">\n        <ion-button (click)=\"route(data.name)\">\n          Mehr erfahren\n        </ion-button>\n      </div>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      Digitaler Guide\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"solid-primary\">\n  <div class=\"map-wrapper\">\n\n    <div class=\"coord\"\n          style=\"left: {{item.coords.x}}%; top: {{item.coords.y}}%\"\n\n          *ngFor=\"let item of data; let i = index\"\n\n          (click)=\"showModal(i)\"\n\n          >\n    </div>\n\n    <img src=\"../assets/map.png\" />\n\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/article-preview/article-preview.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/article-preview/article-preview.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1wcmV2aWV3L2FydGljbGUtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/article-preview/article-preview.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/article-preview/article-preview.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let ArticlePreviewComponent = class ArticlePreviewComponent {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    ngOnInit() { }
    route(id) {
        this.router.navigate(['/article/', id]);
        this.modalCtrl.dismiss();
    }
};
ArticlePreviewComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ArticlePreviewComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
ArticlePreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./article-preview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./article-preview.component.scss */ "./src/app/components/article-preview/article-preview.component.scss")).default]
    })
], ArticlePreviewComponent);



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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/article-preview/article-preview.component */ "./src/app/components/article-preview/article-preview.component.ts");




let GuidePage = class GuidePage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
        fetch('./assets/data/guide.json').then(res => res.json())
            .then(json => {
            this.data = json;
        });
    }
    showModal(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_3__["ArticlePreviewComponent"],
                componentProps: {
                    data: this.data[id]
                },
                // backdropDismiss:false,
                cssClass: 'articleprev'
            });
            yield modal.present();
        });
    }
};
GuidePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
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