import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const headerOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  mockUrl = 'http://localhost:3000/';
  public productdata: any;
  constructor(
    private http: HttpClient
  ) { }

  // getProduct() {
  //   return this.http.get('http://localhost:3000/products');
  // }
  // getItem(id: any) {
  //   return this.http.get(`http://localhost:3000/products?id=${id}`);
  // }
  getProduct(): Observable<any> {
    return this.http.get(this.mockUrl + 'products');
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  getItem(id: any): Observable<any> {
    return this.http.get(this.mockUrl + 'products/' + id);
  }
}
