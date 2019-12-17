import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/DataService';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'ticker',
    templateUrl: './ticker.component.html'
})
export class TickerComponent implements OnInit {

    title = 'Ticker';

    constructor(private data: DataService, private route: ActivatedRoute) {
    }

    public ticker;
    public id;
    public companyExists = false;

    ngOnInit(): void {
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.id = +params['id'];
                }
            )

        this.data.getTicker(this.id)
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
