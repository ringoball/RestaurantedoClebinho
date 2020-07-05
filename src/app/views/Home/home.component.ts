import { Component, OnInit } from '@angular/core';
import { Cardapio } from '../../interfaces/Cardapio';
import { Router } from '@angular/router';


@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  showDetails = async (item) => {
    await this.router.navigate(['item'], {
      queryParams: {
        item,
      }
    })
  }

  chooseMeal = () => {
    console.log('meal');
  }

  ngOnInit(): void {
  }

}
