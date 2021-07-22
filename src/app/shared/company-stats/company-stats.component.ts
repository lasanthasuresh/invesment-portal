import {Component, Input, OnInit} from '@angular/core';
// import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts/highstock';
import {CompanyDetail} from '../../app-models';
import {ActivatedRoute} from '@angular/router';
import {CommonService} from '../../servises/common.service';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

function prepareData(decisions: any): any[] {
    const data = [];

    for (const entry of decisions) {
        data.push({
            x: entry[0],
            title: entry[1],
            text: entry[1] + ' at ' + entry[2]
        });
    }

    return data;
}

@Component({
    selector: 'app-company-stats',
    templateUrl: './company-stats.component.html',
    styleUrls: ['./company-stats.component.scss']
})
export class CompanyStatsComponent implements OnInit {
    title = 'High Charts Working';
    TITLE_TE;

    public options: any = {
        chart: {
            events: {
                selection: event => this.handleEvent(event)
                // selection: function(event) {
                //     console.log(event);
                // if (event.xAxis) {
                //     let min = Highcharts.numberFormat(event.xAxis[0].min, 2),
                //         max = Highcharts.numberFormat(event.xAxis[0].max, 2)
                //     this.setSubtitle({
                //         text: `From ${min} to ${max}`
                //     })
                // } else {
                //     this.setSubtitle({
                //         text: "From 0 to 15"
                //     })
                // }
                // }
            },
            zoomType: 'x'
        },
        rangeSelector: {
            selected: 1
        },
        title: {
            text: 'AAPL Stock Price'
        },

        // yAxis: {
        //     title: {
        //         text: 'Exchange rate'
        //     }
        // },

        series: []
    };
    private TITLE_TEMPLATE = 'Decisions of {{company.name}}';
    private companyCode: string;

    constructor(private route: ActivatedRoute, private commonService: CommonService
    ) {
    }


    ngOnInit(): void {
        // Highcharts.chart('container', this.options);
        this.route.params.subscribe(
            val => {
                this.companyCode = val.id;
                this.commonService.loadChartData(val.id).subscribe(
                    data => {
                        this.options.title.text = this.TITLE_TEMPLATE.replace('{{company.name}}', data.companyName);
                        this.options.series.push({
                            name: val.id,
                            data: data.prices,
                            id: 'dataseries',
                            tooltip: {valueDecimals: 2},
                            selection: event => this.handleEvent(event),
                            suresh: 'suresh'
                        });

                        this.options.series.push({
                            type: 'flags',
                            data: prepareData(data.decisions),
                            onSeries: 'dataseries',
                            shape: 'squrepin',
                            width: 16
                        });
                        console.log(this.options);
                        Highcharts.stockChart('container', this.options);

                    }
                );
            }
        );
    }

    private handleEvent(event) {
        // console.log(event);
        if (event.xAxis) {
            let min = Highcharts.numberFormat(event.xAxis[0].min, 2);
            let max = Highcharts.numberFormat(event.xAxis[0].max, 2);
            console.log(`From ${min} to ${max}`);
        }
    }
}
