import {Component, Input, OnInit} from '@angular/core';
import {CompanyDetail} from '../../app-models';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {

  @Input() company: CompanyDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
