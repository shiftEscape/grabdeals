import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Router } from "@angular/router";
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {

  productID: any;
  quantity = 1;
  product: Observable<any>;
  
  constructor(private params: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.params.params.subscribe(params => {
      this.productID = params['productID'];
      this.product = this.productService.getProduct(this.productID)
    });
  }

  payConfirm () {
    this.router.navigate([`products/${this.productID}/payment/confirm`])
  }

}
