import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class AccountService {
  
  transactionID: any;
  token = 'b4671bcf0cf59844f45d96bc05f3d0a4077ec785';
  orderUrl = `https://www.sellax.net/api/v1/orders/?transaction=`;

  constructor(private http: HttpClient) { }

  getOrders (transID) {
    return this.http.get(this.orderUrl+transID, {
      headers: new HttpHeaders().set('Authorization', `Token ${this.token}`)
    });
  }

}
