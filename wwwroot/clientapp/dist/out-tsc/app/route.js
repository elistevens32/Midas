import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TickerComponent } from './ticker/ticker.component';
export const appRoutes = [
    { path: 'login', component: LoginComponent },
    { path: 'stock', component: TickerComponent },
    { path: '', component: HomeComponent },
];
//# sourceMappingURL=route.js.map