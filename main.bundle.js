webpackJsonp([1,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".ngx-header {\n  height: 70px;\n  z-index: 3; }\n  .ngx-header .ngx-col-1 {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .ngx-header .ngx-auto {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n    height: 70px; }\n\n.sidebar {\n  margin-top: 70px;\n  background-color: #d7c9aa;\n  height: 100%;\n  overflow-y: auto;\n  padding: 0 0 70px 0; }\n  .sidebar i.side-handler {\n    display: none;\n    z-index: 1;\n    position: relative; }\n  .sidebar .logo {\n    z-index: 0;\n    position: relative;\n    margin-bottom: 25px; }\n  .sidebar .sidebar-nav ul li {\n    border-bottom: 1px solid #7b673a;\n    border-top: 1px solid #7b673a;\n    transition: background-color 0.2s ease-out;\n    display: block;\n    padding: 0; }\n    .sidebar .sidebar-nav ul li .menu {\n      width: 100%;\n      font-weight: 500;\n      font-size: 16px;\n      padding-left: 20px;\n      min-height: 50px;\n      line-height: 3;\n      display: inline-block;\n      cursor: default;\n      transition: text-shadow 0.3s ease-in; }\n      .sidebar .sidebar-nav ul li .menu i {\n        padding-right: 10px;\n        color: inherit;\n        transition: text-shadow 0.1s ease-in; }\n        .sidebar .sidebar-nav ul li .menu i.icon {\n          font-size: 23px;\n          float: left;\n          line-height: 2.3;\n          margin-right: 5px; }\n      .sidebar .sidebar-nav ul li .menu.sub {\n        font-weight: 300;\n        font-size: 14px;\n        padding-left: 0;\n        min-height: 25px;\n        border-bottom: none; }\n        .sidebar .sidebar-nav ul li .menu.sub i {\n          font-size: 10px;\n          line-height: 4;\n          float: left; }\n      .sidebar .sidebar-nav ul li .menu.selected {\n        border-bottom: none;\n        color: #eceff6;\n        text-shadow: 1px 1px 1px #7b673a, 2px 2px 1px #7b673a, 3px 3px 1px #7b673a, 3px 4px 1px #7b673a, 3px 5px 1px #7b673a; }\n        .sidebar .sidebar-nav ul li .menu.selected i {\n          text-shadow: -0.5px 1px 1px #7b673a, 1px 1px 1px #7b673a, 2px 2px 1px #7b673a, 3px 3px 1px #7b673a, 3px 4px 1px #7b673a, 3px 5px 1px #7b673a; }\n        .sidebar .sidebar-nav ul li .menu.selected:hover {\n          background-color: transparent; }\n      .sidebar .sidebar-nav ul li .menu:hover {\n        background-color: #b69d65; }\n    .sidebar .sidebar-nav ul li .sub-menu {\n      overflow: hidden;\n      max-height: 0px;\n      transition: max-height 0.3s cubic-bezier(0.86, 0, 0.07, 1); }\n      .sidebar .sidebar-nav ul li .sub-menu li {\n        padding: 0 0 0 15px;\n        border: none; }\n        .sidebar .sidebar-nav ul li .sub-menu li:hover {\n          background-color: transparent; }\n        .sidebar .sidebar-nav ul li .sub-menu li a {\n          border-radius: 5px;\n          padding: 0 0 0 10px; }\n      .sidebar .sidebar-nav ul li .sub-menu.on-show {\n        max-height: 500px;\n        transition: max-height 0.3s cubic-bezier(0.86, 0, 0.07, 1); }\n    .sidebar .sidebar-nav ul li:first-child {\n      border: none; }\n    .sidebar .sidebar-nav ul li:last-child {\n      border: none; }\n    .sidebar .sidebar-nav ul li.open {\n      padding-bottom: 15px; }\n\n.ngx-content {\n  margin: 70px 0 100px 300px;\n  overflow: hidden;\n  background-color: white; }\n\n.ngx-footer {\n  height: 100px;\n  margin-left: 300px; }\n  .ngx-footer .ngx-row {\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: reverse;\n        -ms-flex-direction: row-reverse;\n            flex-direction: row-reverse; }\n    .ngx-footer .ngx-row .ngx-auto {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .ngx-footer .ngx-row .ngx-auto i {\n        margin: auto;\n        float: right;\n        color: white;\n        font-size: 35px; }\n        .ngx-footer .ngx-row .ngx-auto i:hover {\n          text-shadow: 1px 1px 1px black, 0px 0px 8px white; }\n    .ngx-footer .ngx-row .ngx-col-10 {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .ngx-footer .ngx-row .ngx-col-10 p {\n        color: lightgrey;\n        font-family: 'Roboto';\n        font-weight: 100;\n        font-size: 15px;\n        margin: auto 0; }\n        .ngx-footer .ngx-row .ngx-col-10 p a {\n          color: white;\n          font-family: 'Roboto';\n          font-weight: 200; }\n          .ngx-footer .ngx-row .ngx-col-10 p a:hover {\n            text-decoration: underline; }\n\n/* * * * * * * * * * * *\n*       MOBILE         *\n* * * * * * * * * * * */\n@media screen and (min-width: 0px) and (max-width: 700px) {\n  .ngx-header {\n    z-index: 0; }\n  .sidebar {\n    margin-top: 0; }\n    .sidebar i.fa-bars {\n      display: block;\n      margin: 0;\n      margin-left: 25px;\n      margin-top: 20px;\n      z-index: 1; }\n    .sidebar .logo {\n      margin-top: -52px; } }\n\nnav {\n  float: right;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  nav a {\n    color: rgba(255, 255, 255, 0.6);\n    margin: auto;\n    padding: 20px;\n    transition: all 0.3s ease; }\n    nav a.divider {\n      border-right: 2px solid rgba(255, 255, 255, 0.5); }\n    nav a:hover {\n      color: white;\n      text-shadow: 1px 2px 1px black, 0px 0px 3px white; }\n\ni.fa {\n  margin-left: 10px;\n  margin: auto 0;\n  color: rgba(255, 255, 255, 0.6);\n  transition: all 0.3s ease; }\n\n.fa-bars:hover {\n  cursor: pointer;\n  color: white;\n  text-shadow: 1px 2px 1px black, 0px 0px 3px white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".logo-container {\n  width: 100%;\n  height: 230px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  padding-top: 20px; }\n  .logo-container .logo {\n    width: 130px;\n    height: 130px;\n    margin: 0 auto;\n    background-color: #283655;\n    border-radius: 50%;\n    position: relative;\n    -webkit-animation: logo-init linear infinite 2s;\n            animation: logo-init linear infinite 2s; }\n    .logo-container .logo [class*=\"sub-\"] {\n      width: 70%;\n      height: 70%;\n      border-radius: 50%;\n      margin: auto;\n      -webkit-animation: logo-init linear infinite 2s;\n              animation: logo-init linear infinite 2s; }\n    .logo-container .logo .sub-1 {\n      background-color: #4d648d; }\n    .logo-container .logo .sub-2 {\n      background-color: #d0e1f9; }\n    .logo-container .logo .sub-3 {\n      background-color: #ffffff; }\n  .logo-container h1 {\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    font-size: 58px;\n    bottom: 15px;\n    left: 0;\n    font-weight: 300;\n    color: #584a2a;\n    text-shadow: 2px 2px 0px #d7c9aa; }\n    .logo-container h1 p {\n      text-shadow: none;\n      margin-top: -15px; }\n      .logo-container h1 p:hover {\n        text-decoration: underline;\n        cursor: pointer; }\n\n@-webkit-keyframes logo-init {\n  from {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n\n@keyframes logo-init {\n  from {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  to {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".main-content {\n  color: ligten(black, 15%);\n  border-radius: 5px; }\n  .main-content .banner {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 300px;\n    margin-bottom: 30px;\n    background-image: url(" + __webpack_require__(167) + ");\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position-y: 35%;\n    will-change: transform, opacity;\n    overflow: hidden;\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n    -webkit-animation: banner_in 1s ease-in-out;\n            animation: banner_in 1s ease-in-out;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n    .main-content .banner h1 {\n      margin: 0 auto 23px auto;\n      padding-bottom: 13px;\n      -ms-flex-item-align: end;\n          align-self: flex-end;\n      color: white;\n      font-size: 50px;\n      font-family: 'Roboto';\n      text-shadow: 2px 3px 3px black, 3px 4px 5px black;\n      text-decoration: none;\n      will-change: transform, opacity;\n      overflow: hidden;\n      -webkit-transform: translateX(-100%);\n              transform: translateX(-100%);\n      -webkit-animation: banner_in 1.3s ease-in-out;\n              animation: banner_in 1.3s ease-in-out;\n      -webkit-animation-fill-mode: forwards;\n              animation-fill-mode: forwards; }\n      .main-content .banner h1:after {\n        content: '';\n        background-color: white;\n        box-shadow: 2px 3px 3px black, 3px 4px 5px black;\n        width: 100%;\n        height: 3px;\n        position: absolute;\n        bottom: 5px;\n        left: 0; }\n    .main-content .banner button {\n      position: absolute;\n      right: 10%;\n      top: 15%;\n      height: 45px;\n      width: 150px;\n      background-color: #895812;\n      border-radius: 8px;\n      color: #eebd79;\n      font-weight: 600;\n      font-size: 15px;\n      border: none;\n      outline: none; }\n      .main-content .banner button:active {\n        background-color: #5c3b0c; }\n  .main-content .content {\n    will-change: opacity;\n    opacity: 0;\n    -webkit-animation: fade-in 1.7s ease-in;\n            animation: fade-in 1.7s ease-in;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards; }\n    .main-content .content .desc {\n      position: relative; }\n      .main-content .content .desc .description {\n        padding-top: 30px;\n        z-index: 2;\n        margin: auto;\n        line-height: 1.6;\n        text-align: justify;\n        display: inline-block;\n        text-align: justify;\n        word-break: break-word;\n        font-size: 17px; }\n\n/* * * * * * * * * * * *\n*       MOBILE         *\n* * * * * * * * * * * */\n@media screen and (min-width: 0px) and (max-width: 700px) {\n  .main-content .banner {\n    background-size: 160%; }\n    .main-content .banner h1 {\n      font-size: 40px;\n      text-align: center;\n      word-break: break-word;\n      text-decoration: underline;\n      padding: 0 20px 0 20px; }\n      .main-content .banner h1:after {\n        content: '';\n        background-color: transparent;\n        box-shadow: 0px 0px 0px transparent; } }\n\n/* * * * * * * * * * * *\n*      ANIMATIONS      *\n* * * * * * * * * * * */\n@-webkit-keyframes banner_in {\n  from {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  to {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n@keyframes banner_in {\n  from {\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%); }\n  to {\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%); } }\n\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-wrapper\">\n  <header class=\"ngx-header\">\n    <div class=\"ngx-row ngx-no-pad\">\n      <div class=\"main ngx-col-1\">\n        <i\n          *ngIf=\"status.ismobile\"\n          (click)=\"status.isopen = !status.isopen\"\n          class=\"fa fa-bars fa-2x\"\n          aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"menu ngx-auto ngx-no-pad\">\n        <nav>\n          <a *ngIf=\"!status.ismobile\" class=\"divider\" href=\"\">GET STARTED</a>\n          <a href=\"\">COMPONENTS</a>\n          <a href=\"\">DIRECTIVES</a>\n          <a href=\"\">STYLES</a>\n        </nav>\n      </div>\n    </div>\n  </header>\n  <ngx-sidebar [toggle]=\"status.isopen\" (isMobile)=\"handleMobile($event)\">\n  <div class=\"sidebar ngx-col-12\">\n    <i\n      *ngIf=\"status.ismobile\"\n      (click)=\"status.isopen = !status.isopen\"\n      class=\"side-handler fa fa-bars fa-2x\"\n      aria-hidden=\"true\"></i>\n      <div class=\"logo ngx-col-12 ngx-no-pad\">\n        <app-logo class=\"ngx-col-12\"></app-logo>\n      </div>\n      <div class=\"sidebar-nav ngx-col-12 ngx-no-pad\">\n        <ul class=\"ngx-col-12 ngx-no-pad\">\n          <li class=\"ngx-col-12\" [class.open]=\"menu_handler[i]\" *ngFor=\"let side_bar of sidebar; let i = index;\">\n            <p (click)=\"onHanleSideMenu(i)\" [class.selected]=\"menu_handler[i]\" class=\"menu ngx-col-12\">\n              <i [ngClass]=\"side_bar.icon\" class=\"icon\" aria-hidden=\"true\"></i>\n              {{side_bar.menu}}\n            </p>\n            <ul class=\"sub-menu ngx-col-12\" [ngClass]=\"menu_handler[i] ? 'on-show' : ''\">\n              <li class=\"ngx-col-12\" *ngFor=\"let sub_side of side_bar.sub_menu\">\n                <a href=\"\" class=\"menu sub\">\n                  <i class=\"fa fa-circle\" aria-hidden=\"true\"></i>\n                  {{sub_side}}\n                </a>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </ngx-sidebar>\n  <div class=\"ngx-content ngx-row ngx-no-pad\">\n   <app-main-content [isMobile]=\"status.ismobile\" class=\"ngx-col-12 ngx-no-pad\"></app-main-content>\n  </div>\n  <footer class=\"ngx-footer\">\n    <div class=\"footer-content ngx-row ngx-no-pad\">\n      <div class=\"ngx-auto ngx-sd-3\">\n        <i title=\"GitHub\" class=\"fa fa-github-alt\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"ngx-col-10 ngx-sd-9\">\n        <p><a href=\"\">Daniel Torres</a>, Copyright © 2017</p>\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-container\">\n  <div class=\"logo\" [style.width.px]=\"size\" [style.height.px]=\"size\">\n    <div class=\"sub-1\">\n      <div class=\"sub-2\">\n        <div class=\"sub-3\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <h1 *ngIf=\"!text\">Duality <p>by Daniel Torres</p></h1>\n</div>\n"

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"ngx-row ngx-no-pad\">\n  <div class=\"ngx-col-12 main-content ngx-no-pad\">\n    <div class=\"banner ngx-col-12 ngx-no-pad\">\n      <h1>{{main_page.slogan}}</h1>\n      <button *ngIf=\"isMobile\">GET STARTED</button>\n    </div>\n    <div class=\"content ngx-col-12\">\n      <div class=\"desc ngx-col-12\">\n      <h1 class=\"ngx-col-10 ngx-sd-12\">\n        {{main_page.title}}\n      </h1>\n      <p class=\"description ngx-col-10 ngx-sd-12\" [innerHtml]=\"main_page.description\"></p>\n      </div>\n      <!--<ul class=\"nx-col-12\">\n        <li class=\"nx-col-4\">\n          <h2>Directives:</h2>\n          <h1 class=\"text-list direc\">&#60;/&#62;</h1>\n        </li>\n         <li class=\"nx-col-4\">\n          <h2>Components:</h2>\n          <div class=\"square-content\">\n            <div class=\"square\"></div>\n            <div class=\"square\"></div>\n            <div class=\"square\"></div>\n            <div class=\"square\"></div>\n          </div>\n        </li>\n        <li class=\"nx-col-4\">\n          <h2>Styles:</h2>\n          <h1 class=\"text-list style\">&#123; &#125;</h1>\n        </li>\n      </ul>-->\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "duality_cover.4d218716182e3ad235a9.jpg";

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return main_page; });
var sidebar = [
    {
        menu: 'COMPONENTS',
        sub_menu: ['Sidebar'],
        link: [''],
        icon: 'fa fa-th-large',
    },
    {
        menu: 'DIRECTIVES',
        sub_menu: ['OverStyle'],
        link: [''],
        icon: 'fa fa-sitemap'
    },
    {
        menu: 'STYLES',
        sub_menu: ['Grid Layout', 'Wrapper Layout', 'Header', 'Footer'],
        link: [''],
        icon: 'fa fa-paint-brush'
    }
];
var main_page = {
    slogan: 'The Coolest UI Lib for Angular',
    title: "What's Duality",
    description: "\n    Duality it's a library for Angular, this library contains a bundle of features\n    most common used on web pages.<br>\n    The purpose of Duality it's reduce development time, making the web content creation easier and faster."
};
//# sourceMappingURL=app-values.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_mock_app_values__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(cdr) {
        this.cdr = cdr;
        this.status = {
            ismobile: false,
            isopen: false
        };
        this.sidebar = __WEBPACK_IMPORTED_MODULE_1__assets_mock_app_values__["b" /* sidebar */];
        this.menu_handler = new Array(this.sidebar.length).fill(false);
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.handleMobile = function (mobile) {
        this.status.ismobile = mobile;
        this.cdr.detectChanges();
    };
    AppComponent.prototype.onHanleSideMenu = function (index) {
        var i = 0;
        for (var _i = 0, _a = this.menu_handler; _i < _a.length; _i++) {
            var menu = _a[_i];
            if (i === index) {
                if (menu) {
                    this.menu_handler[i] = false;
                }
                else {
                    this.menu_handler[i] = true;
                }
            }
            else {
                this.menu_handler[i] = false;
            }
            i++;
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(141),
        styles: [__webpack_require__(137)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ChangeDetectorRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_duality__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_logo_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_content_main_content_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__logo_logo_component__["a" /* LogoComponent */],
            __WEBPACK_IMPORTED_MODULE_7__main_content_main_content_component__["a" /* MainContentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_duality__["a" /* NgxDualityModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = (function () {
    function LogoComponent(el) {
        this.el = el;
        this.size = 130;
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    return LogoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Object)
], LogoComponent.prototype, "size", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Boolean)
], LogoComponent.prototype, "text", void 0);
LogoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-logo',
        template: __webpack_require__(142),
        styles: [__webpack_require__(138)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ElementRef */]) === "function" && _a || Object])
], LogoComponent);

var _a;
//# sourceMappingURL=logo.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_mock_app_values__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainContentComponent = (function () {
    function MainContentComponent() {
        this.main_page = __WEBPACK_IMPORTED_MODULE_1__assets_mock_app_values__["a" /* main_page */];
    }
    MainContentComponent.prototype.ngOnInit = function () {
    };
    MainContentComponent.prototype.ngOnChanges = function () {
    };
    return MainContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Input */])(),
    __metadata("design:type", Boolean)
], MainContentComponent.prototype, "isMobile", void 0);
MainContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-main-content',
        template: __webpack_require__(143),
        styles: [__webpack_require__(139)]
    }),
    __metadata("design:paramtypes", [])
], MainContentComponent);

//# sourceMappingURL=main-content.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ })

},[169]);
//# sourceMappingURL=main.bundle.js.map