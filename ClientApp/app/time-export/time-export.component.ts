import { Component } from '@angular/core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'time-export',
    templateUrl: './time-export.component.html'
})
export class TimeExportComponent {
    faCalendar = faCalendar;
}
