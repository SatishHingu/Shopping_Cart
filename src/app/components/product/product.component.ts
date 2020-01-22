import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
// import _ from 'lodash';
import * as _ from 'lodash';
export default 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // productdata: any;
  products: any = [];
  // cartItems: any = [];
  filters: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.getProduct();
    // this.productdata = this.productService.getProduct();
  }
  getProduct() {
    this.products = [];
    this.productService.getProduct().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }
  getSort(category: any) {
  console.log(category);
  this.products =  _.orderBy(this.products, [category], ['asc']);
  }
  getFilter(data: any) {
    console.log(data);
    this.products =  _.filter(this.products, ['name' , data]);
    console.log( this.products);
    }
    addToCart(cartItems: Product) {

      console.log(this.products);
      this.cartService.add(this.products);

    }
  //   addToCart(cartItems: Product) {
  //     this.productService.productdata = cartItems;
  //     this.products = this.productService.productdata;
  //     this.products = true;
  // }
}
