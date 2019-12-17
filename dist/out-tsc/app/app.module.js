import { __decorate } from "tslib";
import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { NgModule } from '../../node_modules/@angular/core';
import { FormsModule } from '../../node_modules/@angular/forms';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { RouterModule } from '../../node_modules/@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { HeadComponent } from './head/head.component';
import { SideBarNav } from './sidebar-nav/sidebar-nav';
import { CounterComponent } from './counter/counter.component';
import { StockListWidget } from './dashboard/widgets/stock-list/stock-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '../../node_modules/@fortawesome/angular-fontawesome';
import { TimeExportComponent } from './time-export/time-export.component';
import { BreadCrumbComponent } from './breadcrumb/breadcrumb.component';
import { appRoutes } from './route';
import { TickerComponent } from './ticker/ticker.component';
import { BsDropdownModule } from '../../node_modules/ngx-bootstrap/dropdown';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            HeadComponent,
            AppComponent,
            NavMenuComponent,
            HomeComponent,
            CounterComponent,
            TimeExportComponent,
            BreadCrumbComponent,
            TickerComponent,
            LoginComponent,
            StockListWidget,
            DashboardComponent,
            SideBarNav,
            FetchDataComponent
        ],
        imports: [
            BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
            HttpClientModule,
            FontAwesomeModule,
            BsDropdownModule,
            FormsModule,
            RouterModule.forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map