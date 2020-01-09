import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productdata: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productdata = this.productService.getProduct();
  }

}
