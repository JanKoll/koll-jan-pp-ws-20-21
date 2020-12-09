(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide-guide-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppGuideGuidePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      Digitaler Guide\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"solid-primary\">\n\n  <!-- {{ data }} -->\n\n  <ion-scroll\n   scrollX=\"true\"\n   scrollY=\"true\"\n   zoom=\"true\"\n   maxZoom=\"3\"\n    >\n      <img src=\"../assets/map.png\" />\n</ion-scroll>\n\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/guide/guide-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/guide/guide-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: GuidePageRoutingModule */

    /***/
    function srcAppGuideGuideRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuidePageRoutingModule", function () {
        return GuidePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _guide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./guide.page */
      "./src/app/guide/guide.page.ts");

      var routes = [{
        path: '',
        component: _guide_page__WEBPACK_IMPORTED_MODULE_3__["GuidePage"]
      }];

      var GuidePageRoutingModule = function GuidePageRoutingModule() {
        _classCallCheck(this, GuidePageRoutingModule);
      };

      GuidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GuidePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/guide/guide.module.ts":
    /*!***************************************!*\
      !*** ./src/app/guide/guide.module.ts ***!
      \***************************************/

    /*! exports provided: GuidePageModule */

    /***/
    function srcAppGuideGuideModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuidePageModule", function () {
        return GuidePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _guide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./guide-routing.module */
      "./src/app/guide/guide-routing.module.ts");
      /* harmony import */


      var _guide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./guide.page */
      "./src/app/guide/guide.page.ts");

      var GuidePageModule = function GuidePageModule() {
        _classCallCheck(this, GuidePageModule);
      };

      GuidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _guide_routing_module__WEBPACK_IMPORTED_MODULE_5__["GuidePageRoutingModule"]],
        declarations: [_guide_page__WEBPACK_IMPORTED_MODULE_6__["GuidePage"]]
      })], GuidePageModule);
      /***/
    },

    /***/
    "./src/app/guide/guide.page.scss":
    /*!***************************************!*\
      !*** ./src/app/guide/guide.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppGuideGuidePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2d1aWRlL2d1aWRlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/guide/guide.page.ts":
    /*!*************************************!*\
      !*** ./src/app/guide/guide.page.ts ***!
      \*************************************/

    /*! exports provided: GuidePage */

    /***/
    function srcAppGuideGuidePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GuidePage", function () {
        return GuidePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var GuidePage = /*#__PURE__*/function () {
        function GuidePage() {
          _classCallCheck(this, GuidePage);
        }

        _createClass(GuidePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            fetch('./assets/data/guide.json').then(function (res) {
              return res.json();
            }).then(function (json) {
              _this.data = json;
            });
          }
        }]);

        return GuidePage;
      }();

      GuidePage.ctorParameters = function () {
        return [];
      };

      GuidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-guide',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./guide.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/guide/guide.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./guide.page.scss */
        "./src/app/guide/guide.page.scss"))["default"]]
      })], GuidePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=guide-guide-module-es5.js.map