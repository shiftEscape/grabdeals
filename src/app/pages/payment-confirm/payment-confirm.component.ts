import { Component, OnInit } from '@angular/core';
import { ProductService } from "app/services/product.service";
import { ActivatedRoute } from "@angular/router";
import { NgLocalStorage } from "ng-localstorage";
import { AccountService } from "app/services/account.service";

@Component({
  selector: 'app-payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: ['./payment-confirm.component.css']
})
export class PaymentConfirmComponent implements OnInit {

  source: any = '101999356329';
  productID: any;
  orders: any;
  isPaid = false;
  constructor(private params: ActivatedRoute, private productService: ProductService, private acctService: AccountService, private storage: NgLocalStorage) { }

  ngOnInit() {
    this.params.params.subscribe(params => {
      this.productID = params['productID'];
    });
  }

  confirm () {
    this.productService.payThruBank(this.productID, this.source).subscribe((response:any) => {
      console.log(response)
      this.productService.rebate = response.rebate;
      this.acctService.getOrders(response['invoice']).subscribe((orders:any) => {
        console.log(orders);
      })
      this.isPaid = true;
    });
  }

}
