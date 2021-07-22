import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/shared.module';
import {ChartsModule} from 'ng2-charts';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyDetailComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
