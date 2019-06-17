import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { AddproductComponent } from './addproduct/addproduct.component';
const routes: Routes = [
{path:'',component:ProductsComponent},
{path:'products',component:ProductsComponent},
{path:'cart',component:CartComponent},
{path:'addproduct',component:AddproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
