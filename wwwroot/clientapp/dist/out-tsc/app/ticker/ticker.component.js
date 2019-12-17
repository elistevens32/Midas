import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TickerComponent = class TickerComponent {
    constructor(data, route) {
        this.data = data;
        this.route = route;
        this.title = 'Ticker';
    }
    ;
    ngOnInit() {
        this.route.params
            .subscribe((params) => {
            this.id = +params['id'];
        });
        this.data.getTicker(this.id)
            .subscribe(success => {
            if (success) {
                this.ticker = this.data.ticker;
            }
        });
    }
};
TickerComponent = __decorate([
    Component({
        selector: 'ticker',
        templateUrl: './ticker.component.html'
    })
], TickerComponent);
export { TickerComponent };
//# sourceMappingURL=ticker.component.js.map