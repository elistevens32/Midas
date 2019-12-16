import { Component } from '@angular/core';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'sidebar-nav',
    templateUrl: './sidebar-nav.html',
})
export class SideBarNav {
    faTachometerAlt = faTachometerAlt;
    faList = faList;
    faCogs = faCogs;
    faUser = faUser;
}
