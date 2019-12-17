import { __decorate } from "tslib";
import { Component } from "@angular/core";
let TickerListComponent = class TickerListComponent {
    constructor(data) {
        this.data = data;
        this.title = 'Stock List Title';
        this.tickers = [];
    }
    ngOnInit() {
        this.data.loadTickers()
            .subscribe(success => {
            if (success) {
                this.tickers = this.data.tickers;
            }
        });
    }
};
TickerListComponent = __decorate([
    Component({
        selector: 'ticker-list',
        templateUrl: './ticker-list.component.html'
    })
], TickerListComponent);
export { TickerListComponent };
//# sourceMappingURL=ticker-list.component.js.map