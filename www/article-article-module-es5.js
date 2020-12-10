(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["article-article-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppArticleArticlePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n        <ion-back-button defaultHref=\"guide\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ articleId }}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"ion-padding\">\n    <ion-text color=\"light\" *ngIf=\"result\">\n      <p>{{ result.intro }}</p>\n    </ion-text>\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/article/article-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/article/article-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ArticlePageRoutingModule */

    /***/
    function srcAppArticleArticleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePageRoutingModule", function () {
        return ArticlePageRoutingModule;
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


      var _article_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./article.page */
      "./src/app/article/article.page.ts");

      var routes = [{
        path: '',
        component: _article_page__WEBPACK_IMPORTED_MODULE_3__["ArticlePage"]
      }];

      var ArticlePageRoutingModule = function ArticlePageRoutingModule() {
        _classCallCheck(this, ArticlePageRoutingModule);
      };

      ArticlePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ArticlePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/article/article.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/article/article.module.ts ***!
      \*******************************************/

    /*! exports provided: ArticlePageModule */

    /***/
    function srcAppArticleArticleModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePageModule", function () {
        return ArticlePageModule;
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


      var _article_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./article-routing.module */
      "./src/app/article/article-routing.module.ts");
      /* harmony import */


      var _article_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./article.page */
      "./src/app/article/article.page.ts");

      var ArticlePageModule = function ArticlePageModule() {
        _classCallCheck(this, ArticlePageModule);
      };

      ArticlePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _article_routing_module__WEBPACK_IMPORTED_MODULE_5__["ArticlePageRoutingModule"]],
        declarations: [_article_page__WEBPACK_IMPORTED_MODULE_6__["ArticlePage"]]
      })], ArticlePageModule);
      /***/
    },

    /***/
    "./src/app/article/article.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/article/article.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppArticleArticlePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/article/article.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/article/article.page.ts ***!
      \*****************************************/

    /*! exports provided: ArticlePage */

    /***/
    function srcAppArticleArticlePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePage", function () {
        return ArticlePage;
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

      var ArticlePage = /*#__PURE__*/function () {
        function ArticlePage(route) {
          _classCallCheck(this, ArticlePage);

          this.route = route;
        }

        _createClass(ArticlePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.params.subscribe(function (params) {
              _this.articleId = params['articleId'];
            });
            fetch('./assets/data/guide.json').then(function (res) {
              return res.json();
            }).then(function (json) {
              var data = json;
              _this.result = data.find(function (data) {
                return data.name === _this.articleId;
              });
            });
          }
        }]);

        return ArticlePage;
      }();

      ArticlePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      };

      ArticlePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./article.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/article/article.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./article.page.scss */
        "./src/app/article/article.page.scss"))["default"]]
      })], ArticlePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=article-article-module-es5.js.map