import {Component, Injectable, OnInit} from '@angular/core';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../servises/common.service';
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-profit-calc',
    templateUrl: './profit-calc.component.html',
    styleUrls: ['./profit-calc.component.scss']
})
export class ProfitCalcComponent implements OnInit {


    fromDate = '2011-05-26';
    toDate = '2011-08-26';
    investedAmount = 50000;
    finalWorth: number;
    profitPercentage: number;
    profit: number;
    companyCode: string;

    constructor(private route: ActivatedRoute, private commonService: CommonService) {

    }


    ngOnInit(): void {
        this.route.params.subscribe(
            val => {
                this.companyCode = val.id;
            });
    }

    // tslint:disable-next-line:typedef


    submitThis() {
        this.commonService.calculateProfit(this.companyCode, this.fromDate, this.toDate, this.investedAmount).subscribe(
            data => {
                this.finalWorth = data.final_worth;
                this.profitPercentage = data.profit_percentage;
                this.profit = data.profit;
            }
        );
    }
}
