import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SideBarComponent } from './components/side-bar/side-bar.component';


@NgModule({
  imports: [CommonModule],
  exports: [SideBarComponent],
  declarations: [SideBarComponent],
  providers: [],
})
export class SharedModule { }
