import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from '../../shared/dataService';

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
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TimeExportComponent } from './time-export/time-export.component';
import { BreadCrumbComponent } from './breadcrumb/breadcrumb.component';
import { TickerComponent } from './ticker/ticker.component';

// ROUTES
import { appRoutes } from './route';


@NgModule({
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
        FormsModule,
        RouterModule.forRoot(appRoutes, {
            enableTracing: true // for Debugging of the Routes
        })
    ],
    providers: [
          DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
