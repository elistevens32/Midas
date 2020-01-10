import { __decorate } from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
let RawDataComponent = class RawDataComponent {
    constructor(data, route) {
        this.data = data;
        this.route = route;
        this.eodData = [];
        this.displayedColumns = ['id', 'date', 'open', 'high', 'low', 'close', 'volume'];
    }
    ngOnInit() {
        //GET ID FROM URL
        this.route.params
            .subscribe((params) => {
            this.tickerId = +params['id'];
        });
        // GET EOD BY TICKER ID
        this.data.getEODByTickerId(this.tickerId)
            .subscribe(success => {
            if (success) {
                console.log("Test: " + this.eodData);
                this.eodData = this.data.eods;
                this.dataSource = new MatTableDataSource(this.eodData);
                this.dataSource.sort = this.sort;
                this.dataSource.paginator = this.paginator;
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
__decorate([
    Input()
], RawDataComponent.prototype, "eods", void 0);
__decorate([
    ViewChild(MatSort, { static: true })
], RawDataComponent.prototype, "sort", void 0);
__decorate([
    ViewChild(MatPaginator, { static: true })
], RawDataComponent.prototype, "paginator", void 0);
RawDataComponent = __decorate([
    Component({
        selector: 'raw-data',
        templateUrl: './raw-data.component.html',
        styleUrls: ['./raw-data.component.scss']
    })
], RawDataComponent);
export { RawDataComponent };
//# sourceMappingURL=raw-data.component.js.map