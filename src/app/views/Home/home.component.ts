import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cart;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  showDetails = async (item) => {
    await this.router.navigate(['item'], {
      queryParams: {
        item,
      }
    });
  }

  viewCart = async () => {
    await this.router.navigate(['cart']);
  }

  chooseMeal = async () => {
    await this.router.navigate(['meal']);
  }

  goToAdminPage = async () => {
    await this.router.navigate(['admin']);
  }


}
