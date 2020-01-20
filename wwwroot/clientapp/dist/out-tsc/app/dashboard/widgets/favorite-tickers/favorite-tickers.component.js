import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
let FavoriteTickers = class FavoriteTickers {
    constructor() {
        this.faStar = faStar;
        this.faTimesCircle = faTimesCircle;
    }
};
FavoriteTickers = __decorate([
    Component({
        selector: 'favorite-tickers',
        templateUrl: './favorite-tickers.component.html'
    })
], FavoriteTickers);
export { FavoriteTickers };
//# sourceMappingURL=favorite-tickers.component.js.map