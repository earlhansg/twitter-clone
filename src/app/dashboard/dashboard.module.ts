import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './containers/home/home.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class DashboardModule { }
