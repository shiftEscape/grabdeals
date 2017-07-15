import { Routes } from '@angular/router';
import { DashboardPageComponent } from 'app/pages/dashboard-page/dashboard-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductViewPageComponent } from './pages/product-view-page/product-view-page.component';
import { PaymentPageComponent } from "./pages/payment-page/payment-page.component";

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent
  },
  {
    path: 'products',
    component: ProductsPageComponent
  },
  {
    path: 'products/:productID',
    component: ProductViewPageComponent
  },
  {
    path: 'products/:productID/payment',
    component: PaymentPageComponent
  },
  {
    path: 'account',
    component: AccountPageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];