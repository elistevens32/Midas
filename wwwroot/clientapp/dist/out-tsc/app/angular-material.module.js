import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
//
// Form Controls
//
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatNativeDateModule } from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
//
// Navigation
//
const modules = [
    LayoutModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatNativeDateModule,
];
let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = __decorate([
    NgModule({
        imports: [...modules],
        exports: [...modules]
    })
], AngularMaterialModule);
export { AngularMaterialModule };
//# sourceMappingURL=angular-material.module.js.map