import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Storage from '../../helpers/LocalStorage';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart;
  totalPrice = 0;
  constructor(private router: Router) {
    this.cart = this.unifyCart(Storage.getCart());
    this.totalPrice = this.cart.reduce((acc, curr) => acc + +curr.price * curr.quantity, 0);
  }

  ngOnInit(): void {
  }

  goBack = async () => {
    await this.router.navigate(['']);
  }

  addOne = (item) => {
    this.cart = this.cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        cartItem.quantity++;
        this.totalPrice += +cartItem.price;
      }
      return cartItem;
    })
  }

  removeOne = (item) => {
    this.cart = this.cart.map((cartItem) => {
      if (cartItem.id === item.id) {
        if (cartItem.quantity > 1) {
          cartItem.quantity--;
          this.totalPrice -= +cartItem.price;
        }
      }
      return cartItem;
    });
    Storage.setCart(this.cart);
  }

  removeItem = (item) => {
    this.cart = this.cart.filter((cartItem) => {
      if (cartItem.id === item.id) {
        this.totalPrice -= +cartItem.price * cartItem.quantity;
        return false;
      }
      return true;
    });
    Storage.deleteItem(item.id);
  }


  buy = () => {

  }

  unifyCart = (cart) => {
    const unyfiedCart = [];

    for (let i = 0; i < cart.length; i++) {
      let doesItAppear = false;
      for (let j = 0; j < unyfiedCart.length; j++) {
        if (unyfiedCart[j].name === cart[i].name) {
          unyfiedCart[j].quantity++;
          doesItAppear = true;
        }
      }
      if (!doesItAppear) {
        unyfiedCart.push(cart[i]);
      }
    }
    return unyfiedCart;
  }
}
