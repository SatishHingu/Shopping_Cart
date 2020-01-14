import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  // itemData: any;
  // id: any;
  product: any;
  public cartItems$: Observable<Product[]>;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit() {
    // this.itemData = this.productService.productdata;
    console.log(this.route.snapshot);
    this.productService.getItem(this.route.snapshot.queryParams[`id`]).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
    this.cartItems$ = this
      .cartService.getCarts();

    this.cartItems$.subscribe(_ => _);
  }
  }

