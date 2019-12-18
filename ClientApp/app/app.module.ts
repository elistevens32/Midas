import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

// ROUTES
import { appRoutes } from './route';
import { tickerTabRoutes } from './ticker-tab-route';

// COMPONENTS
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
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TickerListComponent } from './ticker-list/ticker-list.component';
import { DataService } from './shared/DataService';
import { SettingsComponent } from './settings/settings.component';
import { RawDataComponent } from './ticker/raw-data/raw-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FavoriteTickers } from './dashboard/widgets/favorite-tickers/favorite-tickers.component';
import { TimeFrameAnalysis } from './ticker/general/time-frame-analysis/time-frame-analysis.component';
import { StatsComponent } from './ticker/general/stats/stats.component';
import { GeneralComponent } from './ticker/general/general.component';
import { DayStandardDev } from './ticker/general/day-standard-dev/day-standard-dev.component';


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
        TickerListComponent,
        SettingsComponent,
        RawDataComponent,
        FavoriteTickers,
        DayStandardDev,
        GeneralComponent,
        StatsComponent,
        TimeFrameAnalysis,
        FetchDataComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        BrowserAnimationsModule,
        MaterialModule,
        HttpClientModule,
        FontAwesomeModule,
        BsDropdownModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        RouterModule.forChild(tickerTabRoutes)
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
