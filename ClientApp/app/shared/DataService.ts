import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    // TICKERS - START
    public tickers = [];
    public ticker;

    loadTickers() {
        return this.http.get("/api/tickers")
            .pipe(
                map((data: any[]) => {
                    this.tickers = data;
                    return true;
                }));
    }
    getTicker(id) {
        return this.http.get("/api/tickers/" + id)
            .pipe(
                map((data: any[]) => {
                    this.ticker = data;
                    return true;
                }));
    }
    // TICKERS - END

    // EODs - START
    public eods = [];

    getEODByTickerId(id) {
        return this.http.get("/api/eod/" + id)
            .pipe(
                map((data: any[]) => {
                    this.eods = data;
                    return true;
                }));
    }
    // EODs - END

    // TEST - START
    public aaplTicker;

    getAaplTicker(ticker) {
        return this.http.get("/api/tickers/" + ticker)
            .pipe(
                map((data: any[]) => {
                    this.ticker = data;
                    return true;
                }));
    }
    // TEST - END

}