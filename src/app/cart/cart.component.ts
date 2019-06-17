import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
//import {}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
   
  private items:Item[]=[];
  private quantity:number=0;
  total;
  data;
  
  constructor(
    private route:ActivatedRoute,
    private ser:CartserviceService
  ) { }

  ngOnInit(){


    

    this.route.params.subscribe(params=>{
      var id = params['id'];
     
      if(id){

        var item: Item = {
          products: this.ser.find(id),
          quantity:1
         };
         let cart:any=[];
         if(localStorage.getItem('cart')==null){
           //let cart:any=[];
           cart.push(JSON.stringify(item));
           localStorage.setItem('cart', JSON.stringify(cart));
           this.loadData();
         }else{
           
          console.log('else');
           let cart:any = JSON.parse(JSON.stringify(localStorage.getItem('cart')));
           
           //cart = JSON.parse(JSON.stringify(cart));
           //cart = JSON.parse(cart.length);
           console.log(cart.length);
           let index:number = -1;
           
           for(var i=0; i<=cart.length; i++){
            //console.log(cart.products);
            let item:Item = JSON.parse(cart[i]);
           console.log(cart[i].products.id);
            console.log('item');
             if(item.products.id == id){
              //console.log('else1');
               index = 1;
                break;
             }
           }

           if(index == -1){
               //cart = JSON.stringify(localStorage)
               console.log("hello");
               cart.push(JSON.stringify(item));
               
              localStorage.setItem('cart', JSON.stringify(cart));
              
              this.loadData();
           }
           else{
            console.log('quantity');
             cart = localStorage.getItem('cart');
             cart = JSON.parse(JSON.parse(JSON.stringify(cart)));
            
             //console.log(cart[id].item.quantity);
            
             //cart[id].item.quantity++;

             localStorage.setItem('cart', cart);
             this.loadData();
           }

         }

      }
    });

    this.loadData();
  }


  loadData():void{
    this.total=0;
    this.items = [];
    var cart = JSON.parse(localStorage.getItem('cart'));
    for(var i=0;i<=cart.length;i++){
      let item = JSON.parse(cart[i]);

      this.items.push({
        products: item.products,
        quantity: item.quantity
      });
    }

   // console.log(this.items.length);
  console.log('hhhhfghghhghg');
      
  }


}
