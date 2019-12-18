import { Routes } from '@angular/router'
import { GeneralComponent } from './ticker/general/general.component'
import { RawDataComponent } from './ticker/raw-data/raw-data.component'


export const tickerTabRoutes: Routes = [
    { path: 'dashboard/ticker/:id/general', component: GeneralComponent },
    { path: 'dashboard/ticker/:id/raw-data', component: RawDataComponent },
]
