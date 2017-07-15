import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from "app/material.module";
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';

import { appRoutes } from './app.routes';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    PaymentPageComponent,
    AccountPageComponent,
    ProductsPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
