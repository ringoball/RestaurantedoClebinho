import { Component, OnInit } from '@angular/core';
import { Api } from 'src/app/helpers/ApiHelper';
import * as Storage from '../../helpers/LocalStorage';
import * as MenuOptions from '../../classes';
import { Router } from '@angular/router';
import { formatMenu } from 'src/app/helpers/formatter';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  menuOptions = MenuOptions;
  menu = {
    principal: [],
    carnes: [],
    acompanhamentos: [],
  };

  principal = ['arroz', 'feijao', 'arrozintegral'];
  carnes = ['maminha', 'picanha', 'frango'];
  acompanhamentos = ['farofa', 'fritas', 'salada'];

  constructor(private api: Api, private router: Router) { }

  ngOnInit(): void {
    this.principal = this.principal.map((item) => MenuOptions[item]);
    this.carnes = this.carnes.map((item) => MenuOptions[item]);
    this.acompanhamentos = this.acompanhamentos.map((item) => MenuOptions[item]);
  }

  goBack = async () => {
    await this.router.navigate(['']);
  }

  setDayMenu = async () => {
    try {
      const response = await this.api.post('/refeicao', formatMenu(this.menu));
      if (response.statusCode === 200) {
        if (Storage.menu.clearMenu()) {
          if (this.resetAllChecked()) {
            alert('Cardapio atualizado com sucesso!');
            await this.router.navigate(['']);

          } else {
            throw new Error('Não foi possivel resetar o cardapio');
          }
        } else {
          throw new Error('Não foi possivel atualizar o cardápio');
        }
      } else {
        throw new Error('Erro ao fazer a requisição');
      }
    } catch ({ message }) {
      alert(`Erro ao atualizar o cardápio ${message}`);
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
        })
      })

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
