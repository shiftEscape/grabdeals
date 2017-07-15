import { Component, ElementRef } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elementRef: ElementRef;

  constructor(private route: Router, private el: ElementRef) {
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
