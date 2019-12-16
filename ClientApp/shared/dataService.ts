import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public tickers = [];

    //loadTickers() {
    //    return this.http.get("/api/tickers")
    //        .pipe(
    //            map((data: any[]) => {
    //                this.products = data;
    //                return true;
    //            }));
    //}

}
