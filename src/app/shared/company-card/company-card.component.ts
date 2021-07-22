import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Company} from '../../app-models';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';


export const CHART_CONF = {
  responsive: true,
  tooltips: {
    enabled: false
  },
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        labels: undefined,
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    ],
    yAxes: [
      {
        gridLines: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    ]
  }
};
export const RED_BORDER = 'rgb(255,127,127)';
export const RED_FILL = 'rgba(255,0,0,0.3)';
export const RED_TEXT = 'rgb(227,31,31)';
export const GREEN_BORDER = 'rgb(79,145,79)';
export const GREEN_FILL = 'rgba(0,131,0,0.2)';
export const GREEN_TEXT = 'rgba(0,131,0,1)';

@Component({
  selector: 'app-company-card',
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss']
})
export class CompanyCardComponent implements OnInit, OnChanges {
  @Input() company: Company;

  @HostBinding('class.card') @HostBinding('class.mb-2') true;
  @HostBinding('class')
  get isGrowth(): string {
    return this.company.diff > 0 ? 'growth' : 'decline';
  }

  public chartData: ChartDataSets[];
  public chartLabels: Label[];
  public chartColors: Color[];
  public chartOptions: (ChartOptions) = CHART_CONF;
  public colorCode: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.company) {
      this.chartLabels = Object.keys(this.company.data);
      this.chartData = [
        {data: Object.values(this.company.data) as any[]}
      ];
      this.chartColors = [
        {
          borderColor: this.company.diff > 0 ? GREEN_BORDER : RED_BORDER,
          backgroundColor: this.company.diff > 0 ? GREEN_FILL : RED_FILL
        }
      ];
      this.colorCode = this.company.diff > 0 ? GREEN_TEXT : RED_TEXT;
    }
  }

}
