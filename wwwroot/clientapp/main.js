(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./ClientApp/app/app.component.ts":
/*!****************************************!*\
  !*** ./ClientApp/app/app.component.ts ***!
  \****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/app.component.html")
    })
], AppComponent);



/***/ }),

/***/ "./ClientApp/app/app.module.ts":
/*!*************************************!*\
  !*** ./ClientApp/app/app.module.ts ***!
  \*************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./ClientApp/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./ClientApp/app/home/home.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./ClientApp/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./head/head.component */ "./ClientApp/app/head/head.component.ts");
/* harmony import */ var _sidebar_nav_sidebar_nav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar-nav/sidebar-nav */ "./ClientApp/app/sidebar-nav/sidebar-nav.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./counter/counter.component */ "./ClientApp/app/counter/counter.component.ts");
/* harmony import */ var _dashboard_widgets_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/widgets/stock-list/stock-list.component */ "./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./ClientApp/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./ClientApp/app/login/login.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _time_export_time_export_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./time-export/time-export.component */ "./ClientApp/app/time-export/time-export.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./ClientApp/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./route */ "./ClientApp/app/route.ts");
/* harmony import */ var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ticker/ticker.component */ "./ClientApp/app/ticker/ticker.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ticker-list/ticker-list.component */ "./ClientApp/app/ticker-list/ticker-list.component.ts");
/* harmony import */ var _shared_DataService__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/DataService */ "./ClientApp/app/shared/DataService.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./settings/settings.component */ "./ClientApp/app/settings/settings.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./profile/profile.component */ "./ClientApp/app/profile/profile.component.ts");


























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _head_head_component__WEBPACK_IMPORTED_MODULE_10__["HeadComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_12__["CounterComponent"],
            _time_export_time_export_component__WEBPACK_IMPORTED_MODULE_17__["TimeExportComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_18__["BreadCrumbComponent"],
            _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_20__["TickerComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _dashboard_widgets_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_13__["StockListWidget"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_14__["DashboardComponent"],
            _sidebar_nav_sidebar_nav__WEBPACK_IMPORTED_MODULE_11__["SideBarNav"],
            _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_22__["TickerListComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_24__["SettingsComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_21__["BsDropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_route__WEBPACK_IMPORTED_MODULE_19__["appRoutes"])
        ],
        providers: [
            _shared_DataService__WEBPACK_IMPORTED_MODULE_23__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./ClientApp/app/breadcrumb/breadcrumb.component.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************/
/*! exports provided: BreadCrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadCrumbComponent", function() { return BreadCrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BreadCrumbComponent = class BreadCrumbComponent {
    constructor() {
        this.title = 'breadcrumb';
    }
};
BreadCrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'breadcrumb',
        template: __webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/breadcrumb/breadcrumb.component.html")
    })
], BreadCrumbComponent);



/***/ }),

/***/ "./ClientApp/app/counter/counter.component.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/counter/counter.component.ts ***!
  \****************************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-counter-component',
        template: __webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/counter/counter.component.html")
    })
], CounterComponent);



/***/ }),

/***/ "./ClientApp/app/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./ClientApp/app/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/dashboard/dashboard.component.html"),
    })
], DashboardComponent);



/***/ }),

/***/ "./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.ts":
/*!****************************************************************************!*\
  !*** ./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: StockListWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListWidget", function() { return StockListWidget; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StockListWidget = class StockListWidget {
    constructor() {
        this.title = 'stock-list-widget';
    }
};
StockListWidget = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stock-list-widget',
        template: __webpack_require__(/*! raw-loader!./stock-list.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.html")
    })
], StockListWidget);



/***/ }),

/***/ "./ClientApp/app/fetch-data/fetch-data.component.ts":
/*!**********************************************************!*\
  !*** ./ClientApp/app/fetch-data/fetch-data.component.ts ***!
  \**********************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fetch-data',
        template: __webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/fetch-data/fetch-data.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_URL'))
], FetchDataComponent);



/***/ }),

/***/ "./ClientApp/app/head/head.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/head/head.component.ts ***!
  \**********************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeadComponent = class HeadComponent {
    constructor() {
        this.title = 'head';
    }
};
HeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'head-component',
        template: __webpack_require__(/*! raw-loader!./head.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/head/head.component.html")
    })
], HeadComponent);



/***/ }),

/***/ "./ClientApp/app/home/home.component.ts":
/*!**********************************************!*\
  !*** ./ClientApp/app/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/home/home.component.html"),
    })
], HomeComponent);



/***/ }),

/***/ "./ClientApp/app/login/login.component.css":
/*!*************************************************!*\
  !*** ./ClientApp/app/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-bg {\n  background-color: #212325;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.card {\n  border: 1px solid #999999;\n}\n\n.card-login {\n  margin-top: 130px;\n  padding: 18px;\n  max-width: 30rem;\n}\n\n.card-header {\n  color: #fff;\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: 600 !important;\n  margin-top: 10px;\n  border-bottom: 0;\n}\n\n.input-group-prepend span {\n  width: 50px;\n  background-color: #2d2d2d;\n  color: #fff;\n  border: 0 !important;\n}\n\ninput:focus {\n  outline: 0 0 0 0 !important;\n  box-shadow: 0 0 0 0 !important;\n}\n\n.login_btn {\n  width: 130px;\n}\n\n.login_btn:hover {\n    color: #fff;\n    background-color: #ff0000;\n  }\n\n.btn-outline-danger {\n  color: #fff;\n  font-size: 18px;\n  background-color: #2d2d2d;\n  background-image: none;\n  border-color: #2d2d2d;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  font-size: 1.2rem;\n  line-height: 1.6;\n  color: #ffffff;\n  background-color: transparent;\n  background-clip: padding-box;\n  border: 1px solid #666666;\n  border-radius: 0;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.input-group-text {\n  display: flex;\n  align-items: center;\n  padding: 0 0 0 1rem;\n  margin-bottom: 0;\n  font-size: 1.5rem;\n  font-weight: 700;\n  line-height: 1.6;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0;\n}\n\n/*LOGO*/\n\n.logo-font {\n  margin-top: 10px;\n  font-size: 2em;\n  font-family: Futura, \"Trebuchet MS\", Arial, sans-serif;\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztBQUVGO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsd0VBQXdFO0FBQzFFOztBQUVBO0VBRUUsYUFBYTtFQUViLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBLE9BQU87O0FBRVA7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHNEQUFzRDtBQUN4RCIsImZpbGUiOiJDbGllbnRBcHAvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XG59XG5cbi5jYXJkLWxvZ2luIHtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIG1heC13aWR0aDogMzByZW07XG59XG5cbi5jYXJkLWhlYWRlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xuICB3aWR0aDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkMmQyZDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG5pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IDAgMCAwIDAgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xufVxuXG4ubG9naW5fYnRuIHtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4gIC5sb2dpbl9idG46aG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XG4gIH1cblxuLmJ0bi1vdXRsaW5lLWRhbmdlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogIzJkMmQyZDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgMC4xNXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMCAwIDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMS42O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4vKkxPR08qL1xuXG4ubG9nby1mb250IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGZvbnQtZmFtaWx5OiBGdXR1cmEsIFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xufVxyXG4iXX0= */"

/***/ }),

/***/ "./ClientApp/app/login/login.component.ts":
/*!************************************************!*\
  !*** ./ClientApp/app/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





let LoginComponent = class LoginComponent {
    constructor() {
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
        this.faKey = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faKey"];
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSignInAlt"];
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login-root',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./ClientApp/app/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./ClientApp/app/nav-menu/nav-menu.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/nav-menu/nav-menu.component.ts ***!
  \******************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: __webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/nav-menu/nav-menu.component.html")
    })
], NavMenuComponent);



/***/ }),

/***/ "./ClientApp/app/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./ClientApp/app/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileComponent = class ProfileComponent {
    constructor() {
        this.title = 'Profile';
    }
};
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'profile',
        template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/profile/profile.component.html")
    })
], ProfileComponent);



/***/ }),

/***/ "./ClientApp/app/route.ts":
/*!********************************!*\
  !*** ./ClientApp/app/route.ts ***!
  \********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./ClientApp/app/home/home.component.ts");
/* harmony import */ var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticker/ticker.component */ "./ClientApp/app/ticker/ticker.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./ClientApp/app/settings/settings.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./ClientApp/app/profile/profile.component.ts");
/* harmony import */ var _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ticker-list/ticker-list.component */ "./ClientApp/app/ticker-list/ticker-list.component.ts");





const appRoutes = [
    { path: 'dashboard/ticker/:id', component: _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_1__["TickerComponent"] },
    { path: 'dashboard/tickerlist', component: _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_4__["TickerListComponent"] },
    { path: 'dashboard/settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"] },
    { path: 'dashboard/profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
];


/***/ }),

/***/ "./ClientApp/app/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./ClientApp/app/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SettingsComponent = class SettingsComponent {
    constructor() {
        this.title = 'Settings';
    }
};
SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'settings',
        template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/settings/settings.component.html")
    })
], SettingsComponent);



/***/ }),

/***/ "./ClientApp/app/shared/DataService.ts":
/*!*********************************************!*\
  !*** ./ClientApp/app/shared/DataService.ts ***!
  \*********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.tickers = [];
    }
    loadTickers() {
        return this.http.get("/api/tickers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.tickers = data;
            return true;
        }));
    }
    getTicker(id) {
        return this.http.get("/api/tickers/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.ticker = data;
            return true;
        }));
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], DataService);



/***/ }),

/***/ "./ClientApp/app/sidebar-nav/sidebar-nav.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/sidebar-nav/sidebar-nav.ts ***!
  \**************************************************/
/*! exports provided: SideBarNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarNav", function() { return SideBarNav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");






let SideBarNav = class SideBarNav {
    constructor() {
        this.faTachometerAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTachometerAlt"];
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faList"];
        this.faCogs = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCogs"];
        this.faUser = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"];
    }
};
SideBarNav = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sidebar-nav',
        template: __webpack_require__(/*! raw-loader!./sidebar-nav.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/sidebar-nav/sidebar-nav.html"),
    })
], SideBarNav);



/***/ }),

/***/ "./ClientApp/app/ticker-list/ticker-list.component.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/ticker-list/ticker-list.component.ts ***!
  \************************************************************/
/*! exports provided: TickerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickerListComponent", function() { return TickerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_DataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/DataService */ "./ClientApp/app/shared/DataService.ts");



let TickerListComponent = class TickerListComponent {
    constructor(data) {
        this.data = data;
        this.title = 'Stock List Title';
        this.tickers = [];
    }
    ngOnInit() {
        this.data.loadTickers()
            .subscribe(success => {
            if (success) {
                this.tickers = this.data.tickers;
            }
        });
    }
};
TickerListComponent.ctorParameters = () => [
    { type: _shared_DataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
TickerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ticker-list',
        template: __webpack_require__(/*! raw-loader!./ticker-list.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/ticker-list/ticker-list.component.html")
    })
], TickerListComponent);



/***/ }),

/***/ "./ClientApp/app/ticker/ticker.component.ts":
/*!**************************************************!*\
  !*** ./ClientApp/app/ticker/ticker.component.ts ***!
  \**************************************************/
/*! exports provided: TickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickerComponent", function() { return TickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_DataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/DataService */ "./ClientApp/app/shared/DataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let TickerComponent = class TickerComponent {
    constructor(data, route) {
        this.data = data;
        this.route = route;
        this.title = 'Ticker';
        this.companyExists = false;
    }
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
        });
        this.data.getTicker(this.id)
            .subscribe(success => {
            if (success) {
                this.ticker = this.data.ticker;
                if (this.data.ticker.company.companyName !== null) {
                    this.companyExists = true;
                }
            }
        });
    }
};
TickerComponent.ctorParameters = () => [
    { type: _shared_DataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
TickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ticker',
        template: __webpack_require__(/*! raw-loader!./ticker.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/ticker/ticker.component.html")
    })
], TickerComponent);



/***/ }),

/***/ "./ClientApp/app/time-export/time-export.component.ts":
/*!************************************************************!*\
  !*** ./ClientApp/app/time-export/time-export.component.ts ***!
  \************************************************************/
/*! exports provided: TimeExportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeExportComponent", function() { return TimeExportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let TimeExportComponent = class TimeExportComponent {
    constructor() {
        this.faCalendar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCalendar"];
    }
};
TimeExportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'time-export',
        template: __webpack_require__(/*! raw-loader!./time-export.component.html */ "./node_modules/raw-loader/index.js!./ClientApp/app/time-export/time-export.component.html")
    })
], TimeExportComponent);



/***/ }),

/***/ "./ClientApp/environments/environment.ts":
/*!***********************************************!*\
  !*** ./ClientApp/environments/environment.ts ***!
  \***********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./ClientApp/main.ts":
/*!***************************!*\
  !*** ./ClientApp/main.ts ***!
  \***************************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/app.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/app.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head-component></head-component>\r\n<body>\r\n  <router-outlet></router-outlet>\r\n</body>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/breadcrumb/breadcrumb.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\">\r\n  <li><a href=\"#\">Home</a> <span class=\"divider\">/</span></li>\r\n  <li><a href=\"#\">Library</a> <span class=\"divider\">/</span></li>\r\n  <li class=\"active\">Data</li>\r\n</ul>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/counter/counter.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/counter/counter.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/dashboard/dashboard.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/dashboard/dashboard.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n    <div class=\"pb-2 mb-3 border-bottom\">\r\n        <h2 class=\"h2\">Dashboard</h2>\r\n        <breadcrumb></breadcrumb>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <stock-list-widget></stock-list-widget>\r\n        </div>\r\n    </div>\r\n\r\n</main>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <h5>Overview</h5>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-body\">\r\n\r\n    <div class=\"table-responsive\">\r\n      <table class=\"table table-hover table-striped table-sm\">\r\n        <thead>\r\n          <tr>\r\n            <th>Quality Score</th>\r\n            <th>Name</th>\r\n            <th>Symbol</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n            <tr>\r\n                <td><span class=\"badge badge-success\">1.82</span></td>\r\n                <td><a class=\"font-weight-bold\" href=\"stock\">Apple Inc.</a></td>\r\n                <td>AAPL</td>\r\n            </tr>\r\n\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/fetch-data/fetch-data.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/fetch-data/fetch-data.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/head/head.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/head/head.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n  <meta name=\"description\" content=\"\">\r\n  <meta name=\"author\" content=\"\">\r\n  <link rel=\"icon\" href=\"../../../../favicon.ico\">\r\n\r\n</head>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/home/home.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/home/home.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n  <sidebar-nav></sidebar-nav>\r\n  <app-dashboard></app-dashboard>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-bg\">\r\n  <div class=\"bg-general\">\r\n    <div class=\"container\">\r\n      <div class=\"card card-login mx-auto text-center bg-dark\">\r\n        <div class=\"card-header mx-auto bg-dark\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-lg-offset-3\">\r\n              <img src=\"./assets/images/midas-logo-trans.png\" class=\"img-responsive w-100\" alt=\"Midas Systems Logo\">\r\n            </div>\r\n            <div class=\"col-lg-9\">\r\n              <p class=\"logo-font\">MIDAS SYSTEMS</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\">\r\n            <div class=\"input-group form-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><fa-icon [icon]=\"faUser\" size=\"xs\"></fa-icon></span>\r\n              </div>\r\n              <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n            </div>\r\n\r\n            <div class=\"input-group form-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><fa-icon [icon]=\"faKey\" size=\"xs\"></fa-icon></span>\r\n              </div>\r\n              <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n            </div>\r\n            <br />\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 offset-lg-4 justify-content-md-center\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-light\"><fa-icon [icon]=\"faSignInAlt\"></fa-icon> Login</button>\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/nav-menu/nav-menu.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/nav-menu/nav-menu.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\r\n  <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">MIDAS</a>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <!--Notifications Here-->\r\n    </div>\r\n    <div class=\"col-lg-12\">\r\n\r\n      <div class=\"dropdown\">\r\n        <a class=\"btn btn-light btn-sm dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          \r\n        </a>\r\n\r\n        <div class=\"dropdown-menu\">\r\n          <a class=\"dropdown-item\" href=\"dashboard/settings\">Settings</a>\r\n          <a class=\"dropdown-item\" href=\"dashboard/profile\">Profile</a>\r\n            <hr/>\r\n          <a class=\"dropdown-item\" href=\"#\">Logout</a>\r\n        </div>\r\n      </div>\r\n     \r\n    </div>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/profile/profile.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/profile/profile.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n    <sidebar-nav></sidebar-nav>\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <div class=\"pb-2 mb-3 border-bottom\">\r\n            <h1>Profile</h1>\r\n            <breadcrumb></breadcrumb>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <!--TODO INSERT PROFILE-->\r\n        </div>\r\n\r\n    </main>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/settings/settings.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/settings/settings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n    <sidebar-nav></sidebar-nav>\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <div class=\"pb-2 mb-3 border-bottom\">\r\n            <h1>Settings</h1>\r\n            <breadcrumb></breadcrumb>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <!--TODO INSERT SETTINGS-->\r\n        </div>\r\n\r\n    </main>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/sidebar-nav/sidebar-nav.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/sidebar-nav/sidebar-nav.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n  <div class=\"sidebar-sticky\">\r\n    <br />\r\n    <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" href=\"\">\r\n          <fa-icon [icon]=\"faTachometerAlt\"></fa-icon> Dashboard <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"dashboard/tickerlist\">\r\n          <fa-icon [icon]=\"faList\"></fa-icon> Ticker List\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"dashboard/settings\">\r\n          <fa-icon [icon]=\"faCogs\"></fa-icon> Settings\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"dashboard/profile\">\r\n          <fa-icon [icon]=\"faUser\"></fa-icon> Profile\r\n        </a>\r\n      </li>\r\n      <hr />\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"Account/Login\">\r\n          <span data-feather=\"file\"></span>\r\n          Login\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/ticker-list/ticker-list.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/ticker-list/ticker-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n    <sidebar-nav></sidebar-nav>\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <div class=\"pb-2 mb-3 border-bottom\">\r\n            <h1>Ticker List</h1>\r\n            <breadcrumb></breadcrumb>\r\n        </div>\r\n\r\n        <time-export></time-export>\r\n        <br/>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-striped table-sm\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>ID</th>\r\n                        <th>Ticker</th>\r\n                        <th>Price Currency</th>\r\n                        <th>Exchange</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let t of tickers\" >\r\n                        <td>{{t.id}}</td>\r\n                        <td><a href=\"dashboard/ticker/{{t.id}}\"><span class=\"badge badge-success\">{{t.ticker}}</span></a></td>\r\n                        <td>{{t.priceCurrency}}</td>\r\n                        <td>{{t.exchange}}</td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </main>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/ticker/ticker.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/ticker/ticker.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n    <sidebar-nav></sidebar-nav>\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <div class=\"pb-2 mb-3 border-bottom\">\r\n\r\n            <!--TICKER NAME-->\r\n            <div *ngIf=\"this.companyExists; then thenBlock else elseBlock\"></div>\r\n            <ng-template #thenBlock><h1>{{ticker.company.companyName}}</h1></ng-template>\r\n            <ng-template #elseBlock><h1>[No Name]</h1></ng-template>\r\n\r\n            <!--TICKER SYMBOL-->\r\n            <h5>({{ticker.ticker}})</h5>\r\n            <p>Type: {{ticker.assetType}}</p>\r\n            <br />\r\n            <breadcrumb></breadcrumb>\r\n        </div>\r\n\r\n\r\n        <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">General</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Chart</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">S&R</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Trade Plan</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Journal</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">RAW Data</a>\r\n            </li>\r\n        </ul>\r\n        <div class=\"tab-content\" id=\"myTabContent\">\r\n            <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n                <br />\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-12\">\r\n                                        <h5>Stats</h5>\r\n                                        <hr />\r\n                                        <table class=\"table table-striped\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td><h5 style=\"margin-top: 6px;\">Quality Score</h5></td>\r\n                                                    <td><h3><span class=\"badge badge-success\">1.75</span></h3></td>\r\n                                                </tr>\r\n                                                <tr>\r\n                                                    <td><h5 style=\"margin-top: 6px;\">Current Price</h5></td>\r\n                                                    <td><h5 style=\"margin-top: 6px;\">$278.94</h5></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-4\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-12\">\r\n                                        <h5>20 Day Standard Devs</h5>\r\n                                        <hr />\r\n                                        <table class=\"table table-striped\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td></td>\r\n                                                    <td></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-4\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-12\">\r\n                                        <h5>Time Frame Analysis</h5>\r\n                                        <hr />\r\n                                        <table class=\"table table-striped\">\r\n                                            <tbody>\r\n                                                <tr>\r\n                                                    <td></td>\r\n                                                    <td></td>\r\n                                                </tr>\r\n                                            </tbody>\r\n                                        </table>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">...</div>\r\n            <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">...</div>\r\n            <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">...</div>\r\n            <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">...</div>\r\n            <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">...</div>\r\n        </div>\r\n\r\n    </main>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./ClientApp/app/time-export/time-export.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./ClientApp/app/time-export/time-export.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-toolbar mb-2 mb-md-0 float-right\">\r\n  <div class=\"btn-group mr-2\">\r\n    <button class=\"btn btn-sm btn-outline-secondary\">Export</button>\r\n  </div>\r\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <fa-icon [icon]=\"faCalendar\"></fa-icon>\r\n      This Week\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n"

/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\elist\Projects\Midas\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map