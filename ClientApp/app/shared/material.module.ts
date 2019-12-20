import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSortModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBadgeModule,
    MatChipsModule,
    MatTableModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatSortModule,
        MatMenuModule,
        MatCardModule,
        MatTabsModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatBadgeModule,
        MatChipsModule,
        MatTableModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        MatSortModule,
        MatMenuModule,
        MatCardModule,
        MatTabsModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatBadgeModule,
        MatChipsModule,
        MatTableModule
    ]
})
export class MaterialModule { }
