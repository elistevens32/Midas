import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        // TICKERS - START
        this.tickers = [];
        // TICKERS - END
        // EODs - START
        this.eods = [];
    }
    loadTickers() {
        return this.http.get("/api/tickers")
            .pipe(map((data) => {
            this.tickers = data;
            return true;
        }));
    }
    getTicker(id) {
        return this.http.get("/api/tickers/" + id)
            .pipe(map((data) => {
            this.ticker = data;
            return true;
        }));
    }
    getEODByTickerId(id) {
        return this.http.get("/api/eod/" + id)
            .pipe(map((data) => {
            this.eods = data;
            return true;
        }));
    }
    getAaplTicker(ticker) {
        return this.http.get("/api/tickers/" + ticker)
            .pipe(map((data) => {
            this.ticker = data;
            return true;
        }));
    }
};
DataService = __decorate([
    Injectable()
], DataService);
export { DataService };
//# sourceMappingURL=DataService.js.map