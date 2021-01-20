import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './containers/home/home.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    PostFormComponent,
    PostListComponent
  ],
  providers: [],
})
export class DashboardModule { }
