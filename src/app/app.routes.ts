import { Routes } from "@angular/router";
import { DashboardPageComponent } from "app/pages/dashboard-page/dashboard-page.component";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { AccountPageComponent } from "./pages/account-page/account-page.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";

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
    path: 'account',
    component: AccountPageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];