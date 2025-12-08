import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, AfterContentChecked {
  product: any[] = [];
  cartTotal = 0;



  ngOnInit() {
    this.loadCart();
    this.calculateTotal();
  }

  ngAfterContentChecked(): void {
    this.updateCart();
  }

  loadCart() {
    const cart = localStorage.getItem('cart');
    this.product = cart ? JSON.parse(cart) : [];
  }

  onRemoveItem(productId: number) {
    this.product = this.product.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.product));
  }

  calculateTotal() {
    this.cartTotal = this.product.reduce((total, item) => total + item.price, 0);
  }

  calculateShipping(): number {
    return this.cartTotal > 400 ? 0 : 14; 
  }

  calculateTax(): number {
    return this.cartTotal * 0.1;
  }

  calculateGrandTotal(): number {

    return this.cartTotal + this.calculateTax() + this.calculateShipping();
  }

  updateCart() {
    this.calculateTotal();
    this.loadCart();
    this.calculateTotal();
    
  }


}
