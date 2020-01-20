import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'favorite-tickers',
    templateUrl: './favorite-tickers.component.html'
})
export class FavoriteTickers {
    faStar = faStar;
    faTimesCircle = faTimesCircle;
}
