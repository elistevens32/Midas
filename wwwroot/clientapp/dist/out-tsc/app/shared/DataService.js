import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.tickers = [];
    }
    loadTickers() {
        return this.http.get("/api/tickers")
            .pipe(map((data) => {
            this.tickers = data;
            return true;
        }));
    }
};
DataService = __decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=DataService.js.map