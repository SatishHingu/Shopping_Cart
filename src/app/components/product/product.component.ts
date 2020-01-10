import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // productdata: any;
  products: any = [];


  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
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

}
