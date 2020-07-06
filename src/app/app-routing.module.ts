import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/Home/home.component';
import { ItemComponent } from './views/Item/item.component';
import { CartComponent } from './views/Cart/cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: ItemComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
