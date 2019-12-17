import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/DataService";

@Component({
    selector: 'ticker-list',
    templateUrl: './ticker-list.component.html'
})
export class TickerListComponent implements OnInit {

    title = 'Stock List Title';

    constructor(private data: DataService) {
    }

    public tickers = [];

    ngOnInit(): void {
        this.data.loadTickers()
            .subscribe(success => {
                if (success) {
                    this.tickers = this.data.tickers;
                }
            })
    }
}