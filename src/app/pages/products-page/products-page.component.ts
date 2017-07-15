import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/services/product.service";
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {

  products: Observable<any>;

  constructor(private router: Router, private productService: ProductService) { }

  viewProduct (product) {
    this.router.navigate([`products/view/${product.code}`])
  }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

}
