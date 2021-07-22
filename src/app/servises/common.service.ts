import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CompanyDetail} from '../app-models';
import {COMPANY_CHART_DATA_URL, COMPANY_DETAIL_URL, COMPANY_PROFIT_CALC_URL} from '../app-urls';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class CommonService {

    constructor(private httpClient: HttpClient) {
    }

    loadChartData(id: string): Observable<any> {
        return this.httpClient.get<CompanyDetail>(COMPANY_CHART_DATA_URL.replace('{{COMPANY}}', id), {
            params: {id}
        });
    }

    calculateProfit(companyCode: string, fromDate: string, toDate: string, investedAmount: number): any {
        const params = new HttpParams()
            .set('companyCode', companyCode)
            .set('fromDate', fromDate)
            .set('toDate', toDate)
            .set('investedAmount', String(investedAmount));
        return this.httpClient.get(COMPANY_PROFIT_CALC_URL.replace('{{COMPANY}}', companyCode), {params});
    }
}
