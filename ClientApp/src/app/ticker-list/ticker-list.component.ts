import { Component } from "@angular/core";
import { DataService } from "../../../shared/dataService";

@Component({
    selector: 'ticker-list',
    templateUrl: './ticker-list.component.html'
})
export class AppComponent {
    constructor(private data: DataService) {
        this.tickers = data.tickers;
    }

    public tickers = [];
}
