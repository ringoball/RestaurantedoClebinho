import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../cardapio';


@Component({
  selector: 'app-domingo',
  templateUrl: './domingo.component.html',
  styleUrls: ['./domingo.component.css']
})
export class DomingoComponent implements OnInit {

cardapioModel = new Cardapio('', 2)

arrozes = [1, 2];

qteArroz = 0

valor = 0




  constructor() { }

  ngOnInit(): void {
  }

}
