import { Routes } from '@angular/router';
import { RegisterPageComponent } from './modules/core/register-page/register-page.component';
import { ProductsPageComponent } from './market/products-page/products-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    {
        path: 'register',
        component: RegisterPageComponent
    },
    { path: 'products', component: ProductsPageComponent }
];