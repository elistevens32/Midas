import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

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

}