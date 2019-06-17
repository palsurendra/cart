import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  products:Product[];
  constructor() { 
    this.products =[
      {id:1,name:'wranggler1',price:'650',image:'sure1.jpg'},
      {id:2,name:'wranggler2',price:'450',image:'sure2.jpg'},
      {id:3,name:'wranggler3',price:'750',image:'sure3.jpg'},
      {id:4,name:'wranggler4',price:'950',image:'sure4.jpg'},
    ]; 
  }


  findAll(){
    return this.products;
  }

  find(id:number): Product {

    return this.products[this.selectIndex(id)];

  }

  selectIndex(id){
    for(var i=0;i<=this.products.length; i++){
      if(id==this.products[i].id){
        return i
      }
    }
    return -1;
  }
}
