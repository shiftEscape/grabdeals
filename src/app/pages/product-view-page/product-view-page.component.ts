import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {

  product: Observable<any>;
  
  constructor(private params: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.params.params.subscribe(params => {
      console.log(params);
      this.product = this.productService.getProduct(params['productID'])
    });
  }

}
