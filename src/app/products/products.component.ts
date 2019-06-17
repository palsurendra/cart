import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { CartserviceService } from '../cartservice.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products;
  constructor( private cart: CartserviceService ) {

   }
  
  ngOnInit() {
    return this.products = this.cart.findAll();
  }

}
