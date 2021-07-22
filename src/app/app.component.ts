import { Component } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MarketEye';

  constructor(private router: Router, private activatedRoute: ActivatedRoute){

  }


  date = new Date();
  // currentDate = { day: this.date.getUTCDay(), month: this.date.getUTCMonth(), year: this.date.getUTCFullYear()};
  currentDate = new Date(2015,5,7)

  // tslint:disable-next-line:typedef
  saveDate() {

    sessionStorage.removeItem('THE_DATE');
    sessionStorage.setItem('THE_DATE', JSON.stringify(this.currentDate));
    console.log("changed");
    console.log(this.currentDate);
  }
}
