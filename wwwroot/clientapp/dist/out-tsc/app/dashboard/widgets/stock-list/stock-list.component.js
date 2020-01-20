import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { faList } from '@fortawesome/free-solid-svg-icons';
let StockListWidget = class StockListWidget {
    constructor(data) {
        this.data = data;
        this.title = 'stock-list-widget';
        this.faList = faList;
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
StockListWidget = __decorate([
    Component({
        selector: 'stock-list-widget',
        templateUrl: './stock-list.component.html'
    })
], StockListWidget);
export { StockListWidget };
//# sourceMappingURL=stock-list.component.js.map