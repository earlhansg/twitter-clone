import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SideBarComponent } from './components/side-bar/side-bar.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';


@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    SideBarComponent,
    RightSideBarComponent,
    FontAwesomeModule
  ],
  declarations: [
    SideBarComponent,
    RightSideBarComponent
  ],
  providers: [],
})
export class SharedModule { }
