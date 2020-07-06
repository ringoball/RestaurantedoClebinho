import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Storage from '../../helpers/LocalStorage';
import { Api } from 'src/app/helpers/ApiHelper';
import { formatPedido } from 'src/app/helpers/formatter';

@Component({
  selector: 'cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart = [];
  totalPrice = 0;
  constructor(private router: Router, private api: Api) {
    this.cart = this.unifyCart(Storage.cart.get());
    this.totalPrice = this.cart.reduce((acc, curr) => acc + +curr.price * curr.quantity, 0);
    console.log(this.cart);
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
    Storage.cart.setCart(this.cart);
  }

  removeItem = (item) => {
    this.cart = this.cart.filter((cartItem) => {
      if (cartItem.id === item.id) {
        this.totalPrice -= +cartItem.price * cartItem.quantity;
        return false;
      }
      return true;
    });
    Storage.cart.deleteItem(item.id);
  }


  buy = async () => {
    try {
      const response = await this.api.post('/pedido', formatPedido(this.cart, this.totalPrice));
      if (response.statusCode === 200) {
        if (Storage.cart.clearCart()) {
          alert('Pedido feito com sucesso');
          await this.router.navigate(['']);
        } else {
          throw new Error('Não foi possivel esvaziar o carrinho');
        }
      } else {
        throw new Error('Erro ao fazer a requisição');
      }
    } catch ({ message }) {
      alert(`Erro ao fazer o pedido ${message}`);
    }
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
