import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {COMPANY_DETAIL_URL} from '../app-urls';
import {CompanyDetail} from '../app-models';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss']
})
export class CompanyDetailComponent implements OnInit {

  public companyDetail$: Observable<CompanyDetail>;
  public active: number = 1;

  constructor(private httpClient: HttpClient, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.companyDetail$ = this.getCompanyDetail(params.id);
    });
  }

  public goBack(): void {
    this.router.navigate(['companies']);
  }

  private getCompanyDetail(id: string): Observable<CompanyDetail> {
    return this.httpClient.get<CompanyDetail>(COMPANY_DETAIL_URL.replace('{{COMPANY}}', id) , {
      params: {id}
    });
  }
}
