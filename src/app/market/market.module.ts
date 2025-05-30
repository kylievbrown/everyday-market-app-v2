/* 
Kylie Brown 
May 11th 2025
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { CategoryMenuComponent } from './category-menu/category-menu.component';
import { CategoryMenuItemComponent } from './category-menu-item/category-menu-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent }
];

@NgModule({
  declarations: [
    ProductsPageComponent,
    CategoryMenuComponent,
    CategoryMenuItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ProductsPageComponent,
    RouterModule
  ]
})
export class MarketModule { }
