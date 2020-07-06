import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/Home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemComponent } from './views/Item/item.component';
import { CartComponent } from './views/Cart/cart.component';
import { Api } from './helpers/ApiHelper';
import { AdminComponent } from './views/Admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemComponent,
    CartComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule,
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
