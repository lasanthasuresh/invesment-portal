import {Injectable, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyCardComponent} from './company-card/company-card.component';
import {ChartsModule} from 'ng2-charts';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { CompanyStatsComponent } from './company-stats/company-stats.component';
import { ProfitcalcComponent } from './profitcalc/profitcalc.component';
import { ProfitCalcComponent } from './profit-calc/profit-calc.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        ChartsModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
  declarations: [
    CompanyCardComponent,
    CompanyProfileComponent,
    CompanyStatsComponent,
    ProfitcalcComponent,
    ProfitCalcComponent
  ],
  exports: [
    CompanyCardComponent,
    CompanyProfileComponent,
    CompanyStatsComponent
  ]
})
export class SharedModule {
}

