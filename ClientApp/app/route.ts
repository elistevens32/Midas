import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { TickerComponent } from './ticker/ticker.component'
import { SettingsComponent } from './settings/settings.component'
import { TickerListComponent } from './ticker-list/ticker-list.component'


export const appRoutes: Routes = [
    { path: 'dashboard/ticker/:id', component: TickerComponent },
    { path: 'dashboard/tickerlist', component: TickerListComponent },
    { path: 'dashboard/settings', component: SettingsComponent },
    { path: 'account/login', component: LoginComponent },

    // TICKER TABS
    { path: 'dashboard/ticker/:id/raw-data', component: TickerComponent },

    { path: '', component: HomeComponent },
    //{ path: '', redirectTo: '/events', pathMatch: 'full' }
]
