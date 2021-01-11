import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { HomeComponent } from './containers/home/home.component';

@NgModule({
  imports: [DashboardRoutingModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class DashboardModule { }
