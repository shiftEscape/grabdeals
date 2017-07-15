import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  quantity = 1;
  product: Observable<any>;
  
  constructor(private params: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.params.params.subscribe(params => {
      console.log(params);
      this.product = this.productService.getProduct(params['productID'])
    });
  }

}
