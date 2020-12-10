(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guide-guide-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppComponentsArticlePreviewArticlePreviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<div class=\"content\">\n    <div class=\"head\">\n      <div class=\"icon\">\n        <img src=\"../assets/icon/{{ data.icon }}\" alt=\"{{ data.name }} Icon\">\n      </div>\n\n      <h2>{{ data.name }}</h2>\n    </div>\n\n    <div class=\"text\">\n      <div class=\"close\" (click)=\"close()\">X</div>\n      <p>{{ data.intro }}</p>\n\n      <ion-img src=\"../assets/data/img/{{ data.name }}/{{ data.previmg }}\" alt=\"{{ data.name }} Vorschaubild\"></ion-img>\n\n      <div class=\"routerbtn\">\n        <ion-button (click)=\"route(data.name)\">\n          Mehr erfahren\n        </ion-button>\n      </div>\n    </div>\n\n</div>\n";
      /***/
    },

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


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n\n    <ion-title>\n      Digitaler Guide\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button color=\"light\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"solid-primary\">\n  <div class=\"map-wrapper\">\n\n    <div class=\"coord\"\n          style=\"left: {{item.coords.x}}%; top: {{item.coords.y}}%\"\n\n          *ngFor=\"let item of data; let i = index\"\n\n          (click)=\"showModal(i)\"\n\n          >\n    </div>\n\n    <img src=\"../assets/map.png\" />\n\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/components/article-preview/article-preview.component.scss":
    /*!***************************************************************************!*\
      !*** ./src/app/components/article-preview/article-preview.component.scss ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppComponentsArticlePreviewArticlePreviewComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aWNsZS1wcmV2aWV3L2FydGljbGUtcHJldmlldy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "./src/app/components/article-preview/article-preview.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/article-preview/article-preview.component.ts ***!
      \*************************************************************************/

    /*! exports provided: ArticlePreviewComponent */

    /***/
    function srcAppComponentsArticlePreviewArticlePreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function () {
        return ArticlePreviewComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var ArticlePreviewComponent = /*#__PURE__*/function () {
        function ArticlePreviewComponent(modalCtrl, router) {
          _classCallCheck(this, ArticlePreviewComponent);

          this.modalCtrl = modalCtrl;
          this.router = router;
        }

        _createClass(ArticlePreviewComponent, [{
          key: "close",
          value: function close() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.dismiss();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "route",
          value: function route(id) {
            this.router.navigate(['/article/', id]);
            this.modalCtrl.dismiss();
          }
        }]);

        return ArticlePreviewComponent;
      }();

      ArticlePreviewComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      ArticlePreviewComponent.propDecorators = {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      };
      ArticlePreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-article-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./article-preview.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/components/article-preview/article-preview.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./article-preview.component.scss */
        "./src/app/components/article-preview/article-preview.component.scss"))["default"]]
      })], ArticlePreviewComponent);
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
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../components/article-preview/article-preview.component */
      "./src/app/components/article-preview/article-preview.component.ts");

      var GuidePage = /*#__PURE__*/function () {
        function GuidePage(modalCtrl) {
          _classCallCheck(this, GuidePage);

          this.modalCtrl = modalCtrl;
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
        }, {
          key: "showModal",
          value: function showModal(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _components_article_preview_article_preview_component__WEBPACK_IMPORTED_MODULE_3__["ArticlePreviewComponent"],
                        componentProps: {
                          data: this.data[id]
                        },
                        // backdropDismiss:false,
                        cssClass: 'articleprev'
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return GuidePage;
      }();

      GuidePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }];
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