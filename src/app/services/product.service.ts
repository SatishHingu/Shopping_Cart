import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    private http: HttpClient
  ) { }

  getProduct() {
    return this.http.get('http://localhost:3000/products/');
  }
}
