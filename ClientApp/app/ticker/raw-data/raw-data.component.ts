import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { DataService } from '../../shared/DataService';
import { EOD } from '../../models/EOD';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'raw-data',
    templateUrl: './raw-data.component.html',
    styleUrls: ['./raw-data.component.scss']
})
export class RawDataComponent implements OnInit {

    public tickerId;
    public eodData = [];

    @Input() eods: EOD[];

    displayedColumns: string[] = ['id','date','open','high','low','close','volume'];
    dataSource: MatTableDataSource<EOD>;

    @ViewChild(MatSort, { static: true }) sort: MatSort;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    constructor(private data: DataService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {

        //GET ID FROM URL
        this.route.params
            .subscribe(
                (params: Params) => {
                    this.tickerId = + params['id'];
                }
            )

        // GET EOD BY TICKER ID
        this.data.getEODByTickerId(this.tickerId)
            .subscribe(success => {
                if (success) {
                    this.eodData = this.data.eods;
                    this.dataSource = new MatTableDataSource<EOD>(this.eodData);
                    this.dataSource.sort = this.sort;
                    this.dataSource.paginator = this.paginator;
                }
            })
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
