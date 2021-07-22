import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';
import {CompanyDetailComponent} from './company-detail/company-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'companies',
    pathMatch: 'full'
  },
  {
    path: 'companies', children: [

      {path: '', component: CompanyListComponent},
      {path: ':id', component: CompanyDetailComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
