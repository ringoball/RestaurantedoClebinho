import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/Home/home.component';
import { ItemComponent } from './views/Item/item.component';
import { CartComponent } from './views/Cart/cart.component';
import { AdminComponent } from './views/Admin/admin.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: ItemComponent },
  { path: 'cart', component: CartComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
