import { GeneralComponent } from './ticker/general/general.component';
import { RawDataComponent } from './ticker/raw-data/raw-data.component';
export const tickerTabRoutes = [
    { path: 'dashboard/ticker/:id/general', component: GeneralComponent },
    { path: 'dashboard/ticker/:id/raw-data', component: RawDataComponent },
];
//# sourceMappingURL=ticker-tab-route.js.map