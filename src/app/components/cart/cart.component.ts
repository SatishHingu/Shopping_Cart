import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cartItems$: Observable<Product[]> = of([]);
  public cartItems: Product[] = [];
  // totalamount: number;
  product: any;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.product = this.cartService.get();
    this.cartItems$ = this.cartService.getCarts();
    console.log(this.cartItems);
    // console.log(this.route.snapshot);
    // this.productService.getItem(this.route.snapshot.queryParams[`id`]).subscribe((data: {}) => {
    //   console.log(data);
    //   this.product = data;
    // });
  }
//   addToCart(cartItems: Product) {
//     this.productService.productdata = cartItems;
//     this.product = this.productService.productdata;
//     this.product = true;
// }
getcarts() {
  this.cartService.products.subscribe(() => {
    this.cartItems = this.productService.productdata;
  });
}

}
