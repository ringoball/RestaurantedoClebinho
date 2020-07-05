import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/Home/home.component';
import { ItemComponent } from './views/item/item.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'item', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
