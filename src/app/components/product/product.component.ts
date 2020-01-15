import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import _ from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // productdata: any;
  products: any = [];
  public cartItems$: Observable<Product[]>;
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
    this.cartItems$ = this.cartService.getCarts();
    // tslint:disable-next-line: no-shadowed-variable
    this.cartItems$.subscribe(_ => _);
  }
  getSort(category: any) {
  console.log(category);
  this.products =  _.orderBy(this.products, [category], ['asc']);
  }
}
