import { Injectable } from '@angular/core';
import { CartProductModel } from '../models/cart-product.model';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: CartProductModel[] = [];
  private cartProductsSubject = new BehaviorSubject<CartProductModel[]>([]);

  cartProducts$ = this.cartProductsSubject.asObservable();

  constructor() { } 
  
  addToCart(product: Product): void {
    const existingProduct = this.cartProducts.find(item => item.product.id === product.id);

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      this.cartProducts.push({ product, quantity: 1 });
    }

    this.cartProductsSubject.next(this.cartProducts);
  }

  removeFromCart(productId: number): void {
    this.cartProducts = this.cartProducts.filter(item => item.product.id !== productId);
    this.cartProductsSubject.next(this.cartProducts);
  }

  clearCart(): void {
    this.cartProducts = [];
    this.cartProductsSubject.next(this.cartProducts);
  }

  getTotalProducts(): number {
    return this.cartProducts.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartProducts.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
