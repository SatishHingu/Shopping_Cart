import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  // itemData: any;
  // id: any;
  product: any;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.itemData = this.productService.productdata;
    console.log(this.route.snapshot);
    this.productService.getItem(this.route.snapshot.queryParams[`id`]).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
  }
  }

