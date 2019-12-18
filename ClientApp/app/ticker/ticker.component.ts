import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/DataService';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'ticker',
    templateUrl: './ticker.component.html'
})
export class TickerComponent implements OnInit {

    title = 'Ticker';
    selected = 'option2';

    constructor(private data: DataService, private route: ActivatedRoute) {
    }

    public ticker;
    public tickerId;
    public companyExists = false;

    ngOnInit(): void {

        //GET ID FROM URL
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.tickerId = + params['id'];
                }
            )

        //GET TICKER BY ID
        this.data.getTicker(this.tickerId)
            .subscribe(success => {
                if (success) {
                    this.ticker = this.data.ticker;
                    if (this.data.ticker.company.companyName !== null) {
                        this.companyExists = true;
                    }
                }
            })

    }
}
