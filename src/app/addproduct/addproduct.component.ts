import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProduct:any;
  constructor(
    private fb:FormBuilder
  ) { }


  fname;
  lname;
  price1;
  address1;
  mobile1;
  date;
  array=[];
  //array1=[];
  ngOnInit() {
    this.addProduct = this.fb.group({
      first_name:['', Validators.required],
      last_name:['',Validators.required],
      price:['',Validators.required],
      address:['', Validators.required],
      mobile:['', Validators.required],
      date:['']
    });
  }

  proSubmit(){
   
    this.fname = this.addProduct.value.first_name;
    this.lname = this.addProduct.value.last_name;
    this.price1 = this.addProduct.value.price;
    this.address1 = this.addProduct.value.address;
    this.mobile1 = this.addProduct.value.mobile;
    this.date = this.addProduct.value.date;
  
   this.array = [this.fname,this.lname,this.price1,this.address1,this.mobile1];

  var array1=[];
 
        for(var i=0; i<this.array.length;i++){
          array1[this.array[i]] = this.array[i];
        }
        let ggg:any =array1;
        console.log(ggg);
        //console.log(this.array);
        //localStorage.setItem("names", JSON.stringify(this.array));
        localStorage.setItem("names", ggg);
        var got = localStorage.getItem("names");
        var storedNames = JSON.parse(got);
        //localStorage.setItem('sesion', ggg);
        console.log(storedNames.test);
         let fff:any = JSON.stringify(localStorage.getItem('sesion'));
         let bbb:any = JSON.parse(fff);
        // console.log(bbb);

        // console.log(array1);
        // console.log(JSON.stringify(array1));
        var data = {'A': 9,'B':10};

localStorage['screenshots'] = JSON.stringify(data);



var data1 = JSON.parse(localStorage['screenshots']);


console.log(data1.B);


  }

}
