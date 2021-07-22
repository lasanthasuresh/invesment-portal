import {Component, OnInit} from '@angular/core';
import {Company} from '../app-models';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {COMPANY_LIST_URL} from '../app-urls';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  public companies$: Observable<Company[]> = this.getCompanies();

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  public gotoDetails(company: Company): void {
    void this.router.navigate(['companies', company.id.toString()]);
  }

  private getCompanies(): Observable<Company[]> {
    const params = new HttpParams()
        .append('date', sessionStorage.getItem('THE_DATE'));
    return this.httpClient.get<Company[]>(COMPANY_LIST_URL,{'params': params});
  }

}
