import { Component, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from "app/services/product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  elementRef: ElementRef;
  rebate: any;

  constructor(private route: Router, private el: ElementRef, private productService: ProductService) {
    this.elementRef = el;
  }
  
  navigate(e, route) {
    this.assignActive(e);
    this.route.navigate([route]);
  }

  assignActive (e) {
    let links = this.elementRef.nativeElement.querySelectorAll('#subwrapper .link'); 
    links.forEach(link => {
      link.classList.remove('active');
    }); e.currentTarget.classList.add('active');
  }
}
