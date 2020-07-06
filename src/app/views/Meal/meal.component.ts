import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/helpers/ApiHelper';
import { Router } from '@angular/router';
import * as MenuOptions from '../../classes';
import * as Storage from '../../helpers/LocalStorage';
import { formatMenu, formatMeal } from 'src/app/helpers/formatter';


@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {
  menuOptions = MenuOptions;
  menu = {
    principal: [],
    carnes: [],
    acompanhamentos: [],
  };

  principal = [];
  carnes = [];
  acompanhamentos = [];

  constructor(private api: Api, private router: Router) {
    this.api.get('/refeicao').then((response) => {
      const items = response.data;
      Object.keys(items).forEach((category) => {
        if (Array.isArray(items[category])) {
          items[category].forEach((item) => {
            switch (category) {
              case 'principal':
                this.principal.push(this.normalizeString(item));
                break;
              case 'carnes':
                this.carnes.push(this.normalizeString(item));
                break;
              case 'acompanhamentos':
                this.acompanhamentos.push(this.normalizeString(item));
                break;
              default:
                break;
            }
          });
        }
      });
      this.principal = this.principal.map((item) => MenuOptions[item]);
      this.carnes = this.carnes.map((item) => MenuOptions[item]);
      this.acompanhamentos = this.acompanhamentos.map((item) => MenuOptions[item]);
    }).catch(console.log)
  }

  ngOnInit(): void {

  }

  goBack = async () => {
    await this.router.navigate(['']);
  }

  addToCart = async () => {
    try {
      if (Storage.cart.add(formatMeal(this.menu))) {
        if (this.resetAllChecked()) {
          alert('Adicionado com sucesso!');
          await this.router.navigate(['']);

        } else {
          throw new Error('Não foi possivel adicionar no carrinho');
        }
      } else {
        throw new Error('Não foi possivel adicionar no carrinho');
      }
    } catch ({ message }) {
      alert(message);
    }
  }

  toggleOnMenu = (item) => {
    item.isChecked = !item.isChecked;

    if (item.isChecked) {
      this.menu[item.category].push(item);
    } else {
      this.menu[item.category] = this.menu[item.category].filter((selectedItem) => {
        return selectedItem.id !== item.id;
      });
    }
  }

  resetAllChecked = () => {
    try {
      Object.keys(this.menu).forEach((category) => {
        this.menu[category].forEach((item) => {
          item.isChecked = false;
        });
      });

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  normalizeString = (string) => {
    const mapaAcentosHex = {
      a: /[\xE0-\xE6]/g,
      e: /[\xE8-\xEB]/g,
      i: /[\xEC-\xEF]/g,
      o: /[\xF2-\xF6]/g,
      u: /[\xF9-\xFC]/g,
      c: /\xE7/g,
      n: /\xF1/g,
      '': /\x20/g
    };

    for (let letra in mapaAcentosHex) {
      const expressaoRegular = mapaAcentosHex[letra];
      string = string.replace(expressaoRegular, letra);
    }
    console.log(string)
    return string.toLowerCase();
  }

}
