import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TickerComponent = class TickerComponent {
    constructor(data, route) {
        this.data = data;
        this.route = route;
        this.title = 'Ticker';
        this.selected = 'option2';
        this.companyExists = false;
    }
    ngOnInit() {
        //GET ID FROM URL
        this.route.params
            .subscribe((params) => {
            this.tickerId = +params['id'];
        });
        //GET TICKER BY ID
        this.data.getTicker(this.tickerId)
            .subscribe(success => {
            if (success) {
                this.ticker = this.data.ticker;
                if (this.data.ticker.company.companyName !== null) {
                    this.companyExists = true;
                }
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