import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [SideBarComponent],
  declarations: [SideBarComponent],
  providers: [],
})
export class SharedModule { }
