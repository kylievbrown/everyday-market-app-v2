/*
Kylie Brown
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  //exporting
  exports: [HeaderComponent]
})
export class SharedModule { }
