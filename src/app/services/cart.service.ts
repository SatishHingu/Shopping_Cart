import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private itemsInCart: Product[] = [];


  constructor() {
    this.itemsInCartSubject.subscribe(_ => this.itemsInCart = _);
  }

  public addToCart(item: Product) {
    this.itemsInCartSubject.next([...this.itemsInCart, item]);
  }

  public getCarts(): Observable<Product[]> {
    return this.itemsInCartSubject;
  }
  // public getTotalAmount(): Observable<number> {
  //   return this.itemsInCartSubject.map((items: Product[]) => {
  //     return items.reduce((prev, curr: Product) => {
  //       return prev + curr.price;
  //     }, 0);
  //   });
  // }
  // public removeFromCart(item: Product) {
  //   const currentItems = [...this.itemsInCart];
  //   const itemsWithoutRemoved = currentItems.filter(_ => _.id !== item.id);
  //   this.itemsInCartSubject.next(itemsWithoutRemoved);
  // }

}
