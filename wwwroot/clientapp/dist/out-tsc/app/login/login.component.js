import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
let LoginComponent = class LoginComponent {
    constructor() {
        this.faUser = faUser;
        this.faKey = faKey;
        this.faSignInAlt = faSignInAlt;
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'login-root',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map