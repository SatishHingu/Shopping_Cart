import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems: any = [];

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getCartItems();


  }
  getCartItems() {
    this.cartService.getCarts().subscribe((data: {}) => {
      console.log(data);
      this.cartItems = data;
    });
  }
}
