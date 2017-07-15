import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {

  quantity = 1;
  productID = null;
  product: Observable<any>;
  
  constructor(private params: ActivatedRoute, private productService: ProductService, private router: Router) { }
  
  buyNow () {
    this.router.navigate([`products/${this.productID}/payment`]);
  }

  ngOnInit() {
    this.params.params.subscribe(params => {
      this.productID = params['productID'];
      this.product = this.productService.getProduct(this.productID)
    });
  }

}
