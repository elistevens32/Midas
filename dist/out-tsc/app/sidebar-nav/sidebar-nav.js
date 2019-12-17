import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
let SideBarNav = class SideBarNav {
    constructor() {
        this.faTachometerAlt = faTachometerAlt;
        this.faList = faList;
        this.faCogs = faCogs;
        this.faUser = faUser;
    }
};
SideBarNav = __decorate([
    Component({
        selector: 'sidebar-nav',
        templateUrl: './sidebar-nav.html',
    })
], SideBarNav);
export { SideBarNav };
//# sourceMappingURL=sidebar-nav.js.map