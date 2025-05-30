/*
Kylie Brown
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountryValidatorDirective } from './register-page/validators/country-validator.directive';

const coreRoutes: Routes = [
  { path: '', component: RegisterPageComponent }
];

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    FormsModule, 
    RegisterPageComponent,
    CountryValidatorDirective,
    RouterModule.forChild(coreRoutes)
  ],
  exports: [
    RegisterPageComponent
  ]

})
export class CoreModule { }
