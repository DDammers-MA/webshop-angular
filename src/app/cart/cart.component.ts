import { AfterContentChecked, AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit, AfterContentChecked {
  product: any[] = [];
  cartTotal = 0;

  quantity: number = 1;

  toast = inject(ToastService)

cart = inject(CartService)

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

  updateQuantity() {

  }

  onRemoveItem(productId: number) {
    this.product = this.product.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.product));
         this.toast.addToast(
                      'succes',
                      'Product removed from cart',
                      'succes',
                      5000,
                    )


  }

  calculateTotal() {
    this.cartTotal = this.product.reduce((total, item) => {
      const price = item.price || 0;
      const qty = item.quantity || 1;
      return total + price * qty;
    }, 0);
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
