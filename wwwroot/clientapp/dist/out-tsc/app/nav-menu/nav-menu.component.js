import { __decorate } from "tslib";
import { Component } from '@angular/core';
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
NavMenuComponent = __decorate([
    Component({
        selector: 'app-nav-menu',
        templateUrl: './nav-menu.component.html'
    })
], NavMenuComponent);
export { NavMenuComponent };
//# sourceMappingURL=nav-menu.component.js.map