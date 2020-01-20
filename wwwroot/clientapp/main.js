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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html")).default
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
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./route */ "./ClientApp/app/route.ts");
/* harmony import */ var _ticker_tab_route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticker-tab-route */ "./ClientApp/app/ticker-tab-route.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./ClientApp/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./ClientApp/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./ClientApp/app/home/home.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./ClientApp/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./head/head.component */ "./ClientApp/app/head/head.component.ts");
/* harmony import */ var _sidebar_nav_sidebar_nav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar-nav/sidebar-nav */ "./ClientApp/app/sidebar-nav/sidebar-nav.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./counter/counter.component */ "./ClientApp/app/counter/counter.component.ts");
/* harmony import */ var _dashboard_widgets_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/widgets/stock-list/stock-list.component */ "./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./ClientApp/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login.component */ "./ClientApp/app/login/login.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _time_export_time_export_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./time-export/time-export.component */ "./ClientApp/app/time-export/time-export.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./ClientApp/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ticker/ticker.component */ "./ClientApp/app/ticker/ticker.component.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm2015/ngx-bootstrap-dropdown.js");
/* harmony import */ var _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ticker-list/ticker-list.component */ "./ClientApp/app/ticker-list/ticker-list.component.ts");
/* harmony import */ var _shared_DataService__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/DataService */ "./ClientApp/app/shared/DataService.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./settings/settings.component */ "./ClientApp/app/settings/settings.component.ts");
/* harmony import */ var _ticker_raw_data_raw_data_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ticker/raw-data/raw-data.component */ "./ClientApp/app/ticker/raw-data/raw-data.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/material.module */ "./ClientApp/app/shared/material.module.ts");
/* harmony import */ var _dashboard_widgets_favorite_tickers_favorite_tickers_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dashboard/widgets/favorite-tickers/favorite-tickers.component */ "./ClientApp/app/dashboard/widgets/favorite-tickers/favorite-tickers.component.ts");
/* harmony import */ var _ticker_general_time_frame_analysis_time_frame_analysis_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./ticker/general/time-frame-analysis/time-frame-analysis.component */ "./ClientApp/app/ticker/general/time-frame-analysis/time-frame-analysis.component.ts");
/* harmony import */ var _ticker_general_stats_stats_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ticker/general/stats/stats.component */ "./ClientApp/app/ticker/general/stats/stats.component.ts");
/* harmony import */ var _ticker_general_general_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ticker/general/general.component */ "./ClientApp/app/ticker/general/general.component.ts");
/* harmony import */ var _ticker_general_day_standard_dev_day_standard_dev_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ticker/general/day-standard-dev/day-standard-dev.component */ "./ClientApp/app/ticker/general/day-standard-dev/day-standard-dev.component.ts");
/* harmony import */ var _ticker_chart_chart_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ticker/chart/chart.component */ "./ClientApp/app/ticker/chart/chart.component.ts");
/* harmony import */ var _ticker_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ticker/company-info/company-info.component */ "./ClientApp/app/ticker/company-info/company-info.component.ts");






// ROUTES


// COMPONENTS




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _head_head_component__WEBPACK_IMPORTED_MODULE_12__["HeadComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_9__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_14__["CounterComponent"],
            _time_export_time_export_component__WEBPACK_IMPORTED_MODULE_19__["TimeExportComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_20__["BreadCrumbComponent"],
            _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_21__["TickerComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
            _dashboard_widgets_stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_15__["StockListWidget"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
            _sidebar_nav_sidebar_nav__WEBPACK_IMPORTED_MODULE_13__["SideBarNav"],
            _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_23__["TickerListComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_25__["SettingsComponent"],
            _ticker_raw_data_raw_data_component__WEBPACK_IMPORTED_MODULE_26__["RawDataComponent"],
            _dashboard_widgets_favorite_tickers_favorite_tickers_component__WEBPACK_IMPORTED_MODULE_29__["FavoriteTickers"],
            _ticker_general_day_standard_dev_day_standard_dev_component__WEBPACK_IMPORTED_MODULE_33__["DayStandardDev"],
            _ticker_general_general_component__WEBPACK_IMPORTED_MODULE_32__["GeneralComponent"],
            _ticker_general_stats_stats_component__WEBPACK_IMPORTED_MODULE_31__["StatsComponent"],
            _ticker_general_time_frame_analysis_time_frame_analysis_component__WEBPACK_IMPORTED_MODULE_30__["TimeFrameAnalysis"],
            _ticker_chart_chart_component__WEBPACK_IMPORTED_MODULE_34__["ChartComponent"],
            _ticker_company_info_company_info_component__WEBPACK_IMPORTED_MODULE_35__["CompanyInfo"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_11__["FetchDataComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__["BrowserAnimationsModule"],
            _shared_material_module__WEBPACK_IMPORTED_MODULE_28__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_18__["FontAwesomeModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_22__["BsDropdownModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_route__WEBPACK_IMPORTED_MODULE_6__["appRoutes"]),
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_ticker_tab_route__WEBPACK_IMPORTED_MODULE_7__["tickerTabRoutes"])
        ],
        providers: [
            _shared_DataService__WEBPACK_IMPORTED_MODULE_24__["DataService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/breadcrumb/breadcrumb.component.html")).default
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/counter/counter.component.html")).default
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/dashboard.component.html")).default,
    })
], DashboardComponent);



/***/ }),

/***/ "./ClientApp/app/dashboard/widgets/favorite-tickers/favorite-tickers.component.ts":
/*!****************************************************************************************!*\
  !*** ./ClientApp/app/dashboard/widgets/favorite-tickers/favorite-tickers.component.ts ***!
  \****************************************************************************************/
/*! exports provided: FavoriteTickers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteTickers", function() { return FavoriteTickers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let FavoriteTickers = class FavoriteTickers {
    constructor() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStar"];
        this.faTimesCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimesCircle"];
    }
};
FavoriteTickers = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'favorite-tickers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./favorite-tickers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/widgets/favorite-tickers/favorite-tickers.component.html")).default
    })
], FavoriteTickers);



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
/* harmony import */ var _shared_DataService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/DataService */ "./ClientApp/app/shared/DataService.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




let StockListWidget = class StockListWidget {
    constructor(data) {
        this.data = data;
        this.title = 'stock-list-widget';
        this.faList = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faList"];
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
StockListWidget.ctorParameters = () => [
    { type: _shared_DataService__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
StockListWidget = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stock-list-widget',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stock-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.html")).default
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/fetch-data/fetch-data.component.html")).default
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./head.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/head/head.component.html")).default
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/home/home.component.html")).default,
    })
], HomeComponent);



/***/ }),

/***/ "./ClientApp/app/login/login.component.css":
/*!*************************************************!*\
  !*** ./ClientApp/app/login/login.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-bg {\r\n  background-color: #212325;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n}\r\n\r\n.card {\r\n  border: 1px solid #999999;\r\n}\r\n\r\n.card-login {\r\n  margin-top: 130px;\r\n  padding: 18px;\r\n  max-width: 30rem;\r\n}\r\n\r\n.card-header {\r\n  color: #fff;\r\n  font-family: sans-serif;\r\n  font-size: 20px;\r\n  font-weight: 600 !important;\r\n  margin-top: 10px;\r\n  border-bottom: 0;\r\n}\r\n\r\n.input-group-prepend span {\r\n  width: 50px;\r\n  background-color: #2d2d2d;\r\n  color: #fff;\r\n  border: 0 !important;\r\n}\r\n\r\ninput:focus {\r\n  outline: 0 0 0 0 !important;\r\n  box-shadow: 0 0 0 0 !important;\r\n}\r\n\r\n.login_btn {\r\n  width: 130px;\r\n}\r\n\r\n.login_btn:hover {\r\n    color: #fff;\r\n    background-color: #ff0000;\r\n  }\r\n\r\n.btn-outline-danger {\r\n  color: #fff;\r\n  font-size: 18px;\r\n  background-color: #2d2d2d;\r\n  background-image: none;\r\n  border-color: #2d2d2d;\r\n}\r\n\r\n.form-control {\r\n  display: block;\r\n  width: 100%;\r\n  height: calc(2.25rem + 2px);\r\n  padding: 0.375rem 0.75rem;\r\n  font-size: 1.2rem;\r\n  line-height: 1.6;\r\n  color: #ffffff;\r\n  background-color: transparent;\r\n  background-clip: padding-box;\r\n  border: 1px solid #666666;\r\n  border-radius: 0;\r\n  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\r\n}\r\n\r\n.input-group-text {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 0 0 0 1rem;\r\n  margin-bottom: 0;\r\n  font-size: 1.5rem;\r\n  font-weight: 700;\r\n  line-height: 1.6;\r\n  color: #495057;\r\n  text-align: center;\r\n  white-space: nowrap;\r\n  background-color: #e9ecef;\r\n  border: 1px solid #ced4da;\r\n  border-radius: 0;\r\n}\r\n\r\n/*LOGO*/\r\n\r\n.logo-font {\r\n  margin-top: 10px;\r\n  font-size: 2em;\r\n  font-family: Futura, \"Trebuchet MS\", Arial, sans-serif;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUU7SUFDRSxXQUFXO0lBQ1gseUJBQXlCO0VBQzNCOztBQUVGO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZ0ZBQXdFO0VBQXhFLHdFQUF3RTtBQUMxRTs7QUFFQTtFQUVFLG9CQUFhO0VBQWIsYUFBYTtFQUViLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQSxPQUFPOztBQUVQO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzREFBc0Q7QUFDeEQiLCJmaWxlIjoiQ2xpZW50QXBwL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tYmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk5OTk7XHJcbn1cclxuXHJcbi5jYXJkLWxvZ2luIHtcclxuICBtYXJnaW4tdG9wOiAxMzBweDtcclxuICBwYWRkaW5nOiAxOHB4O1xyXG4gIG1heC13aWR0aDogMzByZW07XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cC1wcmVwZW5kIHNwYW4ge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW5fYnRuIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbn1cclxuXHJcbiAgLmxvZ2luX2J0bjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7XHJcbiAgfVxyXG5cclxuLmJ0bi1vdXRsaW5lLWRhbmdlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDJkMmQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICMyZDJkMmQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNjY2NjY2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAwIDAgMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBjb2xvcjogIzQ5NTA1NztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG5cclxuLypMT0dPKi9cclxuXHJcbi5sb2dvLWZvbnQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgZm9udC1mYW1pbHk6IEZ1dHVyYSwgXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbn1cclxuIl19 */");

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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./ClientApp/app/login/login.component.css")).default]
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/nav-menu/nav-menu.component.html")).default
    })
], NavMenuComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ "./ClientApp/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./ClientApp/app/home/home.component.ts");
/* harmony import */ var _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticker/ticker.component */ "./ClientApp/app/ticker/ticker.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/settings.component */ "./ClientApp/app/settings/settings.component.ts");
/* harmony import */ var _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ticker-list/ticker-list.component */ "./ClientApp/app/ticker-list/ticker-list.component.ts");






const appRoutes = [
    { path: 'dashboard/ticker/:id', component: _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_3__["TickerComponent"] },
    { path: 'dashboard/tickerlist', component: _ticker_list_ticker_list_component__WEBPACK_IMPORTED_MODULE_5__["TickerListComponent"] },
    { path: 'dashboard/settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"] },
    { path: 'account/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    // TICKER TABS
    { path: 'dashboard/ticker/:id/raw-data', component: _ticker_ticker_component__WEBPACK_IMPORTED_MODULE_3__["TickerComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/settings/settings.component.html")).default
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
        // TICKERS - START
        this.tickers = [];
        // TICKERS - END
        // EODs - START
        this.eods = [];
    }
    loadTickers() {
        return this.http.get("/api/tickers")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            console.log(data);
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
    getEODByTickerId(id) {
        return this.http.get("/api/eod/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => {
            this.eods = data;
            return true;
        }));
    }
    getAaplTicker(ticker) {
        return this.http.get("/api/tickers/" + ticker)
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

/***/ "./ClientApp/app/shared/material.module.ts":
/*!*************************************************!*\
  !*** ./ClientApp/app/shared/material.module.ts ***!
  \*************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"]
        ]
    })
], MaterialModule);



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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar-nav.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/sidebar-nav/sidebar-nav.html")).default,
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticker-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker-list/ticker-list.component.html")).default
    })
], TickerListComponent);



/***/ }),

/***/ "./ClientApp/app/ticker-tab-route.ts":
/*!*******************************************!*\
  !*** ./ClientApp/app/ticker-tab-route.ts ***!
  \*******************************************/
/*! exports provided: tickerTabRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickerTabRoutes", function() { return tickerTabRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ticker_general_general_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticker/general/general.component */ "./ClientApp/app/ticker/general/general.component.ts");
/* harmony import */ var _ticker_raw_data_raw_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ticker/raw-data/raw-data.component */ "./ClientApp/app/ticker/raw-data/raw-data.component.ts");



const tickerTabRoutes = [
    { path: 'dashboard/ticker/:id/general', component: _ticker_general_general_component__WEBPACK_IMPORTED_MODULE_1__["GeneralComponent"] },
    { path: 'dashboard/ticker/:id/raw-data', component: _ticker_raw_data_raw_data_component__WEBPACK_IMPORTED_MODULE_2__["RawDataComponent"] },
];


/***/ }),

/***/ "./ClientApp/app/ticker/chart/chart.component.ts":
/*!*******************************************************!*\
  !*** ./ClientApp/app/ticker/chart/chart.component.ts ***!
  \*******************************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChartComponent = class ChartComponent {
};
ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/chart/chart.component.html")).default
    })
], ChartComponent);



/***/ }),

/***/ "./ClientApp/app/ticker/company-info/company-info.component.ts":
/*!*********************************************************************!*\
  !*** ./ClientApp/app/ticker/company-info/company-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: CompanyInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfo", function() { return CompanyInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_DataService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/DataService */ "./ClientApp/app/shared/DataService.ts");




let CompanyInfo = class CompanyInfo {
    constructor(data, route) {
        this.data = data;
        this.route = route;
        this.title = 'Ticker';
        this.selected = 'option2';
        this.companyExists = false;
    }
    ngOnInit() {
        //GET ID FROM URL
        this.route.params
            .subscribe((params) => {
            this.tickerId = +params['id'];
        });
        //GET TICKER BY ID
        this.data.getTicker(this.tickerId)
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
CompanyInfo.ctorParameters = () => [
    { type: _shared_DataService__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CompanyInfo = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'company-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./company-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/company-info/company-info.component.html")).default
    })
], CompanyInfo);



/***/ }),

/***/ "./ClientApp/app/ticker/general/day-standard-dev/day-standard-dev.component.ts":
/*!*************************************************************************************!*\
  !*** ./ClientApp/app/ticker/general/day-standard-dev/day-standard-dev.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DayStandardDev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayStandardDev", function() { return DayStandardDev; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DayStandardDev = class DayStandardDev {
};
DayStandardDev = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'day-standard-dev',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./day-standard-dev.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/day-standard-dev/day-standard-dev.component.html")).default
    })
], DayStandardDev);



/***/ }),

/***/ "./ClientApp/app/ticker/general/general.component.ts":
/*!***********************************************************!*\
  !*** ./ClientApp/app/ticker/general/general.component.ts ***!
  \***********************************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GeneralComponent = class GeneralComponent {
    constructor() {
        this.title = 'general-component';
    }
};
GeneralComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'general',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./general.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/general.component.html")).default
    })
], GeneralComponent);



/***/ }),

/***/ "./ClientApp/app/ticker/general/stats/stats.component.ts":
/*!***************************************************************!*\
  !*** ./ClientApp/app/ticker/general/stats/stats.component.ts ***!
  \***************************************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StatsComponent = class StatsComponent {
};
StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'stats-comp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/stats/stats.component.html")).default
    })
], StatsComponent);



/***/ }),

/***/ "./ClientApp/app/ticker/general/time-frame-analysis/time-frame-analysis.component.ts":
/*!*******************************************************************************************!*\
  !*** ./ClientApp/app/ticker/general/time-frame-analysis/time-frame-analysis.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TimeFrameAnalysis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFrameAnalysis", function() { return TimeFrameAnalysis; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeFrameAnalysis = class TimeFrameAnalysis {
};
TimeFrameAnalysis = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'time-frame-analysis',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./time-frame-analysis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/time-frame-analysis/time-frame-analysis.component.html")).default
    })
], TimeFrameAnalysis);



/***/ }),

/***/ "./ClientApp/app/ticker/raw-data/raw-data.component.scss":
/*!***************************************************************!*\
  !*** ./ClientApp/app/ticker/raw-data/raw-data.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNsaWVudEFwcC9hcHAvdGlja2VyL3Jhdy1kYXRhL0Q6XFxQcm9qZWN0c1xcTWlkYXMvQ2xpZW50QXBwXFxhcHBcXHRpY2tlclxccmF3LWRhdGFcXHJhdy1kYXRhLmNvbXBvbmVudC5zY3NzIiwiQ2xpZW50QXBwL2FwcC90aWNrZXIvcmF3LWRhdGEvcmF3LWRhdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0o7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsV0FBQTtBQ0VKIiwiZmlsZSI6IkNsaWVudEFwcC9hcHAvdGlja2VyL3Jhdy1kYXRhL3Jhdy1kYXRhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./ClientApp/app/ticker/raw-data/raw-data.component.ts":
/*!*************************************************************!*\
  !*** ./ClientApp/app/ticker/raw-data/raw-data.component.ts ***!
  \*************************************************************/
/*! exports provided: RawDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RawDataComponent", function() { return RawDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _shared_DataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/DataService */ "./ClientApp/app/shared/DataService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let RawDataComponent = class RawDataComponent {
    constructor(data, route) {
        this.data = data;
        this.route = route;
        this.eodData = [];
        this.displayedColumns = ['id', 'date', 'open', 'high', 'low', 'close', 'volume'];
    }
    ngOnInit() {
        //GET ID FROM URL
        this.route.params
            .subscribe((params) => {
            this.tickerId = +params['id'];
        });
        // GET EOD BY TICKER ID
        this.data.getEODByTickerId(this.tickerId)
            .subscribe(success => {
            if (success) {
                console.log("Test: " + this.eodData);
                this.eodData = this.data.eods;
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.eodData);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
RawDataComponent.ctorParameters = () => [
    { type: _shared_DataService__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], RawDataComponent.prototype, "eods", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true })
], RawDataComponent.prototype, "sort", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], RawDataComponent.prototype, "paginator", void 0);
RawDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'raw-data',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./raw-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/raw-data/raw-data.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./raw-data.component.scss */ "./ClientApp/app/ticker/raw-data/raw-data.component.scss")).default]
    })
], RawDataComponent);



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
        this.selected = 'option2';
        this.companyExists = false;
    }
    ngOnInit() {
        //GET ID FROM URL
        this.route.params
            .subscribe((params) => {
            this.tickerId = +params['id'];
        });
        //GET TICKER BY ID
        this.data.getTicker(this.tickerId)
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ticker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/ticker.component.html")).default
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
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./time-export.component.html */ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/time-export/time-export.component.html")).default
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./ClientApp/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./ClientApp/environments/environment.ts");






function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/app.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head-component></head-component>\r\n<body>\r\n  <router-outlet></router-outlet>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/breadcrumb/breadcrumb.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"breadcrumb\">\r\n  <li><a href=\"#\">Home</a> <span class=\"divider\">/</span></li>\r\n  <li><a href=\"#\">Library</a> <span class=\"divider\">/</span></li>\r\n  <li class=\"active\">Data</li>\r\n</ul>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/counter/counter.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/counter/counter.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n    <div class=\"pb-2 mb-3 border-bottom\">\r\n        <h2 class=\"h2\">Dashboard</h2>\r\n        <breadcrumb></breadcrumb>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <stock-list-widget></stock-list-widget>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <favorite-tickers></favorite-tickers>\r\n        </div>\r\n    </div>\r\n\r\n</main>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/widgets/favorite-tickers/favorite-tickers.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/widgets/favorite-tickers/favorite-tickers.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"watch-list\">\r\n    <h2 class=\"text-lg-center\"><fa-icon style=\"color: orange;\" [icon]=\"faStar\"></fa-icon> Watch List</h2>\r\n    <hr />\r\n    <mat-card-content>\r\n        <br />\r\n        <h5 class=\"text-center\"><fa-icon style=\"color: red;\" [icon]=\"faTimesCircle\"></fa-icon> No Watched Items</h5>\r\n        <br />\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/dashboard/widgets/stock-list/stock-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"stock-list\">\r\n\r\n    <h2 class=\"text-lg-center\"><fa-icon [icon]=\"faList\"></fa-icon> Ticker List</h2>\r\n    <br/>\r\n    <mat-card-content>\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-striped table-sm\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>QS</th>\r\n                        <th>Ticker</th>\r\n                        <th>Company</th>\r\n                        <th>Exchange</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                    <tr *ngFor=\"let t of tickers\">\r\n                        <td><span class=\"badge badge-success\">1.25</span></td>\r\n                        <td><a href=\"dashboard/ticker/{{t.id}}\">{{t.ticker}}</a></td>\r\n                        <td><a href=\"dashboard/ticker/{{t.id}}\">{{t.company.companyName}}</a></td>\r\n                        <td>{{t.exchange}}</td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </mat-card-content>\r\n\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/fetch-data/fetch-data.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/fetch-data/fetch-data.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/head/head.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/head/head.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">\r\n  <meta name=\"description\" content=\"\">\r\n  <meta name=\"author\" content=\"\">\r\n  <link rel=\"icon\" href=\"../../../../favicon.ico\">\r\n\r\n</head>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n  <sidebar-nav></sidebar-nav>\r\n  <app-dashboard></app-dashboard>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-bg\">\r\n  <div class=\"bg-general\">\r\n    <div class=\"container\">\r\n      <div class=\"card card-login mx-auto text-center bg-dark\">\r\n        <div class=\"card-header mx-auto bg-dark\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-lg-offset-3\">\r\n              <img src=\"./assets/images/midas-logo-trans.png\" class=\"img-responsive w-100\" alt=\"Midas Systems Logo\">\r\n            </div>\r\n            <div class=\"col-lg-9\">\r\n              <p class=\"logo-font\">MIDAS SYSTEMS</p>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <form action=\"\" method=\"post\">\r\n            <div class=\"input-group form-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><fa-icon [icon]=\"faUser\" size=\"xs\"></fa-icon></span>\r\n              </div>\r\n              <input type=\"text\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n            </div>\r\n\r\n            <div class=\"input-group form-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\"><fa-icon [icon]=\"faKey\" size=\"xs\"></fa-icon></span>\r\n              </div>\r\n              <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n            </div>\r\n            <br />\r\n            <div class=\"row\">\r\n              <div class=\"col-lg-4 offset-lg-4 justify-content-md-center\">\r\n                <button type=\"button\" class=\"btn btn-lg btn-light\"><fa-icon [icon]=\"faSignInAlt\"></fa-icon> Login</button>\r\n              </div>\r\n            </div>\r\n\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/nav-menu/nav-menu.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/nav-menu/nav-menu.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0\">\r\n    <a class=\"navbar-brand col-sm-3 col-md-2 mr-0\" href=\"#\">MIDAS</a>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n            <a href=\"#\">\r\n                <mat-icon matBadge=\"15\" matBadgePosition=\"below after\" class=\"white-icon m-1\">error</mat-icon>\r\n            </a>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n            <mat-menu #appMenu=\"matMenu\">\r\n                <a href=\"dashboard/settings\">\r\n                    <button mat-menu-item>\r\n                        <mat-icon>settings</mat-icon>\r\n                        Settings\r\n                    </button>\r\n                </a>\r\n                <hr />\r\n                <button mat-menu-item>\r\n                    <mat-icon>logout</mat-icon>\r\n                    Logout\r\n                </button>\r\n            </mat-menu>\r\n\r\n            <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\r\n                <mat-icon style=\"color: white;\">more_vert</mat-icon>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/settings/settings.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/settings/settings.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n    <sidebar-nav></sidebar-nav>\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <div class=\"pb-2 mb-3 border-bottom\">\r\n            <h1>Settings</h1>\r\n            <breadcrumb></breadcrumb>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n                <mat-card class=\"ticker-count-card\">\r\n                    <mat-card-header>\r\n                        <div mat-card-avatar class=\"example-header-image\"></div>\r\n                        <mat-card-title>Tickers Table</mat-card-title>\r\n                        <mat-card-subtitle>Data from the \"Tickers\" table</mat-card-subtitle>\r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th scope=\"col\">Type</th>\r\n                                    <th scope=\"col\">#</th>\r\n                                    <th scope=\"col\">Last Updated</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><h5>Stock</h5></td>\r\n                                    <td>1,234</td>\r\n                                    <td>Dec. 19, 2019</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><h5>ETFs</h5></td>\r\n                                    <td>1,234</td>\r\n                                    <td>Dec. 19, 2019</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><h5>Mutual Funds</h5></td>\r\n                                    <td>1,234</td>\r\n                                    <td>Dec. 19, 2019</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n                <mat-card class=\"ticker-count-card\">\r\n                    <mat-card-header>\r\n                        <div mat-card-avatar class=\"example-header-image\"></div>\r\n                        <mat-card-title>Exchange Table</mat-card-title>\r\n                        <mat-card-subtitle>Data from \"Tickers\" by Exchange</mat-card-subtitle>\r\n                    </mat-card-header>\r\n                    <mat-card-content>\r\n                        <table class=\"table table-bordered\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th scope=\"col\">Type</th>\r\n                                    <th scope=\"col\">#</th>\r\n                                    <th scope=\"col\">Last Updated</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><h5>NASDAQ</h5></td>\r\n                                    <td>1,234</td>\r\n                                    <td>Dec. 19, 2019</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><h5>RUSSEL 500</h5></td>\r\n                                    <td>1,234</td>\r\n                                    <td>Dec. 19, 2019</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><h5>SPIDER 500</h5></td>\r\n                                    <td>1,234</td>\r\n                                    <td>Dec. 19, 2019</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </main>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/sidebar-nav/sidebar-nav.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/sidebar-nav/sidebar-nav.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\r\n  <div class=\"sidebar-sticky\">\r\n    <br />\r\n    <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" href=\"\">\r\n          <fa-icon [icon]=\"faTachometerAlt\"></fa-icon> Dashboard <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"dashboard/tickerlist\">\r\n          <fa-icon [icon]=\"faList\"></fa-icon> Ticker List\r\n        </a>\r\n      </li>\r\n      <hr />\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"account/login\">\r\n          <span data-feather=\"file\"></span>\r\n          Login\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker-list/ticker-list.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker-list/ticker-list.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n    <sidebar-nav></sidebar-nav>\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <div class=\"pb-2 mb-3 border-bottom\">\r\n            <h1>Ticker List</h1>\r\n            <breadcrumb></breadcrumb>\r\n        </div>\r\n\r\n        <time-export></time-export>\r\n        <br />\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table table-hover table-striped table-sm\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>QS</th>\r\n                        <th>Ticker</th>\r\n                        <th>Company</th>\r\n                        <th>Exchange</th>\r\n\r\n                    </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                    <tr *ngFor=\"let t of tickers\">\r\n                        <td><span class=\"badge badge-success\">1.25</span></td>\r\n                        <td><a href=\"dashboard/ticker/{{t.id}}\">{{t.ticker}}</a></td>\r\n                        <td><a href=\"dashboard/ticker/{{t.id}}\">{{t.company.companyName}}</a></td>\r\n                        <td>{{t.exchange}}</td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n\r\n    </main>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/chart/chart.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/chart/chart.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Chart Test</h1>\r\n\r\n<script>\r\n    candlestickChart();\r\n\r\n    function getDataPointsFromCSV(csv) {\r\n        var csvLines = points = [];\r\n        csvLines = csv.split(/[\\r?\\n|\\r|\\n]+/);\r\n        for (var i = 0; i < csvLines.length; i++) {\r\n            if (csvLines[i].length > 0) {\r\n                points = csvLines[i].split(\",\");\r\n                dataPoints.push({\r\n                    x: new Date(\r\n                        parseInt(points[0].split(\"-\")[0]),\r\n                        parseInt(points[0].split(\"-\")[1]),\r\n                        parseInt(points[0].split(\"-\")[2])\r\n                    ),\r\n                    y: [\r\n                        parseFloat(points[1]),\r\n                        parseFloat(points[2]),\r\n                        parseFloat(points[3]),\r\n                        parseFloat(points[4])\r\n                    ]\r\n                });\r\n            }\r\n        }\r\n        chart.render();\r\n    }\r\n\r\n    $.get(\"netflix-stock-price.csv\", getDataPointsFromCSV);\r\n</script>\r\n\r\n<div id=\"chartContainer\" style=\"height: 300px; width: 100%;\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/company-info/company-info.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/company-info/company-info.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"company-info-card\">\r\n    <mat-card-content>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <h3>{{ticker.company.companyName}}</h3>\r\n                {{ticker.company.description}}\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n\r\n                <table class=\"table table-striped\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><b>Symbol</b></td>\r\n                            <td>{{ticker.company.symbol}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Security Name</b></td>\r\n                            <td>{{ticker.company.securityName}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Exchange</b></td>\r\n                            <td>{{ticker.company.exchange}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Industry</b></td>\r\n                            <td>{{ticker.company.industry}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Sector</b></td>\r\n                            <td>{{ticker.company.sector}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Primary SIC Code</b></td>\r\n                            <td>{{ticker.company.primarySicCode}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Issue Type</b></td>\r\n                            <td>{{ticker.company.issueType}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n                <table class=\"table table-striped\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><b>CEO</b></td>\r\n                            <td>{{ticker.company.ceo}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Number of Employees</b></td>\r\n                            <td>{{ticker.company.employees | number}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Address</b></td>\r\n                            <td>\r\n                                {{ticker.company.address}}\r\n                                <br />\r\n                                {{ticker.company?.address2}}\r\n                                <br />\r\n                                {{ticker.company?.state}}\r\n                                <br />\r\n                                {{ticker.company?.city}}\r\n                                <br />\r\n                                {{ticker.company?.zip}}\r\n                                <br />\r\n                                {{ticker.company?.country}}\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Phone</b></td>\r\n                            <td>{{ticker.company.phone}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Website</b></td>\r\n                            <td><a target=\"_blank\" href=\"{{ticker.company.website}}\">{{ticker.company.website}}</a></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                \r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/day-standard-dev/day-standard-dev.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/day-standard-dev/day-standard-dev.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"general-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>20 Day Standard Devs</mat-card-title>\r\n        <!--<mat-card-subtitle>Test</mat-card-subtitle>-->\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\r\n        <table class=\"table table-striped\">\r\n            <tbody>\r\n                <tr>\r\n                    <td></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/general.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/general.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-4\">\r\n            <stats-comp></stats-comp>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <day-standard-dev></day-standard-dev>\r\n        </div>\r\n        <div class=\"col-lg-4\">\r\n            <time-frame-analysis></time-frame-analysis>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/stats/stats.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/stats/stats.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"general-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Stats</mat-card-title>\r\n        <!--<mat-card-subtitle>Test</mat-card-subtitle>-->\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\r\n        <table class=\"table table-striped\">\r\n            <tbody>\r\n                <tr>\r\n                    <td><h5 style=\"margin-top: 6px;\">Quality Score</h5></td>\r\n                    <td><h3><span class=\"badge badge-success\">1.75</span></h3></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><h5 style=\"margin-top: 6px;\">Current Price</h5></td>\r\n                    <td><h5 style=\"margin-top: 6px;\">$278.94</h5></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/time-frame-analysis/time-frame-analysis.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/general/time-frame-analysis/time-frame-analysis.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"general-card\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n        <mat-card-title>Time Frame Analysis</mat-card-title>\r\n        <!--<mat-card-subtitle>Test</mat-card-subtitle>-->\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n\r\n        <table class=\"table table-striped\">\r\n            <tbody>\r\n                <tr>\r\n                    <td></td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n\r\n    </mat-card-content>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/raw-data/raw-data.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/raw-data/raw-data.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n</mat-form-field>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"id\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\r\n        <td mat-cell *matCellDef=\"let eod\"> {{eod.id}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"date\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n        <td mat-cell *matCellDef=\"let eod\"> {{eod.date | date}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"open\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Open </th>\r\n        <td mat-cell *matCellDef=\"let eod\"> {{eod.open | currency}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"high\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> High </th>\r\n        <td mat-cell *matCellDef=\"let eod\"> {{eod.high | currency}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"low\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Low </th>\r\n        <td mat-cell *matCellDef=\"let eod\"> {{eod.low | currency}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"close\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Close </th>\r\n        <td mat-cell *matCellDef=\"let eod\"> {{eod.close | currency}} </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"volume\">\r\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Volume </th>\r\n        <td mat-cell *matCellDef=\"let eod\"> {{eod.volume | number}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<mat-paginator [pageSizeOptions]=\"[30, 60, 90]\" showFirstLastButtons></mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/ticker.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/ticker/ticker.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav-menu></app-nav-menu>\r\n<div class=\"container-fluid\">\r\n    <sidebar-nav></sidebar-nav>\r\n    <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\">\r\n        <div class=\"pb-2 mb-3 border-bottom\">\r\n\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-9\">\r\n                        <!--TICKER NAME-->\r\n                        <div *ngIf=\"this.companyExists; then thenBlock else elseBlock\"></div>\r\n                        <ng-template #thenBlock><h1>{{ticker.company?.companyName}}</h1></ng-template>\r\n                        <ng-template #elseBlock><h1>[No Name]</h1></ng-template>\r\n\r\n                        <!--TICKER SYMBOL-->\r\n                        <h5>({{ticker?.ticker}})</h5>\r\n                    </div>\r\n\r\n                    <div class=\"col-lg-3\">\r\n                        <mat-form-field>\r\n                            <mat-label>Timeframe</mat-label>\r\n                            <mat-select [(value)]=\"selected\">\r\n                                <mat-option>None</mat-option>\r\n                                <mat-option value=\"30days\">30 Days</mat-option>\r\n                                <mat-option value=\"60days\">60 Days</mat-option>\r\n                                <mat-option value=\"90days\">90 Days</mat-option>\r\n                                <mat-option value=\"120days\">120 Days</mat-option>\r\n                                <mat-option value=\"150days\">150 Days</mat-option>\r\n                                <mat-option value=\"180days\">180 Days</mat-option>\r\n                            </mat-select>\r\n                        </mat-form-field>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <breadcrumb></breadcrumb>\r\n        </div>\r\n\r\n        <mat-tab-group>\r\n\r\n            <!--GENERAL-->\r\n            <mat-tab label=\"General\">\r\n                <br />\r\n                <general></general>\r\n            </mat-tab>\r\n\r\n            <mat-tab label=\"Chart\"> <chart></chart> </mat-tab>\r\n            <mat-tab label=\"S&R\"> S&R </mat-tab>\r\n            <mat-tab label=\"Trade Plan\"> Trade Plan </mat-tab>\r\n            <mat-tab label=\"Company Info\">\r\n                <br />\r\n                <company-info></company-info>\r\n            </mat-tab>\r\n\r\n            <!--RAW DATA-->\r\n            <mat-tab label=\"Raw Data\">\r\n                <br />\r\n                <raw-data></raw-data>\r\n            </mat-tab>\r\n\r\n        </mat-tab-group>\r\n\r\n    </main>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/time-export/time-export.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ClientApp/app/time-export/time-export.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"btn-toolbar mb-2 mb-md-0 float-right\">\r\n  <div class=\"btn-group mr-2\">\r\n    <button class=\"btn btn-sm btn-outline-secondary\">Export</button>\r\n  </div>\r\n  <div class=\"dropdown\">\r\n    <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n      <fa-icon [icon]=\"faCalendar\"></fa-icon>\r\n      This Week\r\n    </button>\r\n    <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n      <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n      <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n      <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ 0:
/*!*********************************!*\
  !*** multi ./ClientApp/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Midas\ClientApp\main.ts */"./ClientApp/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map