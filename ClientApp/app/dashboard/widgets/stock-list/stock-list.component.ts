import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/DataService';
import { faList } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'stock-list-widget',
    templateUrl: './stock-list.component.html'
})
export class StockListWidget implements OnInit{
    title = 'stock-list-widget';
    faList = faList;

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
