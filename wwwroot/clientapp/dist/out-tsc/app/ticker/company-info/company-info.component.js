import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CompanyInfo = class CompanyInfo {
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
CompanyInfo = __decorate([
    Component({
        selector: 'company-info',
        templateUrl: './company-info.component.html'
    })
], CompanyInfo);
export { CompanyInfo };
//# sourceMappingURL=company-info.component.js.map