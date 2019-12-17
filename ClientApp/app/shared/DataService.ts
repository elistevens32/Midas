import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public tickers = [];

    loadTickers() {
        return this.http.get("/api/tickers")
            .pipe(
                map((data: any[]) => {
                    this.tickers = data;
                    return true;
                }));
    }

}