import { Injectable } from '@angular/core';
import { RequestOptions, RequestOptionsArgs } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { NgLocalStorage } from "ng-localstorage";
import { Headers } from '@angular/http'
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/observable/of";

@Injectable()
export class ProductService {

  version = 'v1';
  productUrl = `https://www.sellax.net/api/${this.version}/products/`;
  orderUrl = `https://www.sellax.net/api/${this.version}/order/`;
  token = 'b4671bcf0cf59844f45d96bc05f3d0a4077ec785';
  headers: any;
  rebate = 0;

  constructor(private http: HttpClient, private storage: NgLocalStorage) {
  }

  getAllProducts () {
    return Observable.of([
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]},
    ])
  }

  getProduct (code) {
    // return this.http.get(this.productUrl+code, {
    //   headers: new HttpHeaders().set('Authorization', `Token ${this.token}`)
    // });
    return Observable.of(
      {"name":"Long Sleeve","description":"Long Sleeve for formal attire","quantity":10,"code":"XYZSSWAF","owner":3,"price":1200.0,"colors":[{"name":"blue","tag":"blue"},{"name":"black","tag":"black"},{"name":"white","tag":"white"}],"sizes":[{"name":"medium","tag":"medium","measurement":"medium"},{"name":"small","tag":"small","measurement":"small"},{"name":"large","tag":"large","measurement":"large"}],"categories":[{"name":"fashion","tag":"fashion"},{"name":"men","tag":"men"}],"images":[{"src":"http://n.nordstrommedia.com/id/92c5fcd0-6d7e-4d22-ac95-cb047845266b.jpeg?w=390&h=421"},{"src":"http://n.nordstrommedia.com/id/fe670a9e-9c3d-4345-9b82-fcd237e1411f.jpeg?w=388&h=421"},{"src":"http://ecx.images-amazon.com/images/I/51ESFpmADLL._AC_UL260_SR200,260_.jpg"}]}
    );
  }

  payThruBank (code, source) {
    let data = {
      product: code,
      source: source,
      quantity: 1,
      color: 'black',
      size: 'small' 
    };
    console.log(data);
    return this.http.post(this.orderUrl, data, {
      headers: new HttpHeaders().set('Authorization', `Token ${this.token}`)
    });
  }

}