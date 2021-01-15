import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './containers/home/home.component';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    PostFormComponent
  ],
  providers: [],
})
export class DashboardModule { }
