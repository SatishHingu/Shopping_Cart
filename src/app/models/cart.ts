import { Product } from '../models/product';

export class Cart {
  product: Product['id'];
  quantity: number;
  total: number;
}

export function createCartItem(params: Partial<Cart>) {
  return {
    total: 0,
    quantity: 1,
    ...params
  } as Cart;
}
