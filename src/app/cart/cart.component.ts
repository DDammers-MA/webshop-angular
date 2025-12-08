import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  product: any[] = [];
  cartTotal = 0;



  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    const cart = localStorage.getItem('cart');
    this.product = cart ? JSON.parse(cart) : [];
  }

  onRemoveItem(productId: number) {

    
    this.product = this.product.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.product));
  }


}
