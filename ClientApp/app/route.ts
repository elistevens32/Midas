import { Routes } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { TickerComponent } from './ticker/ticker.component'
import { SettingsComponent } from './settings/settings.component'
import { ProfileComponent } from './profile/profile.component'
import { TickerListComponent } from './ticker-list/ticker-list.component'


export const appRoutes: Routes = [
    { path: 'dashboard/ticker/:id', component: TickerComponent },
    { path: 'dashboard/tickerlist', component: TickerListComponent },
    { path: 'dashboard/settings', component: SettingsComponent },
    { path: 'dashboard/profile', component: ProfileComponent },
    { path: 'account/login', component: LoginComponent },
    { path: '', component: HomeComponent },
    //{ path: '', redirectTo: '/events', pathMatch: 'full' }
]
