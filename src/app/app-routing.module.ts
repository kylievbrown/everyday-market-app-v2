/*
Kylie Brown
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './modules/core/register-page/register-page.component';
import { ProductsPageComponent } from './market/products-page/products-page.component';

//setup routing
const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { 
    path: 'register', 
    loadChildren: () => 
      import('./modules/core/core.module').then(m => m.CoreModule) 
  },
  { path: 'products', component: ProductsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
