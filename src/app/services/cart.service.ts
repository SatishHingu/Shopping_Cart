import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  mockUrl = 'http://localhost:3000/';
  public products: any;
  // private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  // private itemsInCart: Product[] = [];


  constructor(
    private http: HttpClient
  ) {
    // this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  // public addToCart(item: Product) {
  //   this.itemsInCartSubject.next([...this.itemsInCart, item]);
  // }

  // getProduct(): Observable<any> {
  //   return this.http.get(this.mockUrl + 'products');
  // }
  public getCarts(): Observable<any> {
    return this.http.get(this.mockUrl + 'cartItems/');
  }
  // public removeFromCart(item: Product) {
  //   const currentItems = [...this.itemsInCart];
  //   const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
  //   this.itemsInCartSubject.next(itemsWithoutRemoved);
  // }
  // getCart(id: any): Observable<any> {
  //   return this.http.get(this.mockUrl + 'products/' + id);
  // }
}
