import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as Items from '../../classes/index'
import Item from 'src/app/classes/Item';

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
    console.log('sdfgdiuo');
  }

  goBack = async () => {
    await this.router.navigate(['']);
  }

  addToCart = async () => {
    await this.router.navigate([''], {
      queryParams: {
        addedItem: this.item
      }
    });
  }

}
