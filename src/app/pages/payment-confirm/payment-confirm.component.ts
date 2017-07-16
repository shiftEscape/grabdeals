import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.css']
})
export class PaymentConfirmComponent implements OnInit {

  source: any = '101999356329';
  productID: any;
  isPaid = false;
  constructor(private params: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.params.params.subscribe(params => {
      this.productID = params['productID'];
    });
  }

  confirm () {
    this.productService.payThruBank(this.productID, this.source).subscribe((response:any) => {
      console.log(response)
      this.productService.rebate = response.rebate;
      this.isPaid = true;
    });
  }

}
