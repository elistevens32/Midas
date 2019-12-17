import { __decorate } from "tslib";
import { NgModule } from '../../node_modules/@angular/core';
import { ServerModule } from '../../node_modules/@angular/platform-server';
import { ModuleMapLoaderModule } from '../../node_modules/@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
let AppServerModule = class AppServerModule {
};
AppServerModule = __decorate([
    NgModule({
        imports: [AppModule, ServerModule, ModuleMapLoaderModule],
        bootstrap: [AppComponent]
    })
], AppServerModule);
export { AppServerModule };
//# sourceMappingURL=app.server.module.js.map