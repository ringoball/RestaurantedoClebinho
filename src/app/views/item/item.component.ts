import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Items from '../../classes/index'
import Item from 'src/app/classes/Item';
import * as Storage from '../../helpers/LocalStorage';

@Component({
  selector: 'item-page',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item;

  constructor(private activeRoute: ActivatedRoute, private router: Router) {
    this.activeRoute.queryParams.subscribe((params) => {
      const { item } = params;
      this.item = Items[item]
    })
  }

  ngOnInit(): void {
  }

  goBack = async () => {
    await this.router.navigate(['']);
  }

  addToCart = async () => {
    const addition = Storage.addToCart(this.item);
    if (addition) {
      alert('Item adicionado com Sucesso');
      this.goBack();
    } else {
      alert('Houve um erro ao adicionar o Item');
    }
  }

}
