import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastService } from './toast.service';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    toast = inject(ToastService)
    quantity: number = 1;

    private cartItems = new BehaviorSubject<CartItem[]>([]);
    public cartItems$ = this.cartItems.asObservable();

    
    addItem(item: any): void {
        const newItem = { ...item };
        const card = localStorage.getItem('cart');
        const cardItems = card ? JSON.parse(card) : [];
        const existing = cardItems.find((i: any) => i.id == newItem.id);

        if (existing) {
            existing.quantity = (existing.quantity || 0) + 1;
        } else {
            newItem.quantity = 1;
            cardItems.push(newItem);
        }
            this.toast.addToast(
            'succes',
            'cart updated',
            'succes',
            5000,
            );

        localStorage.setItem('cart', JSON.stringify(cardItems));

  


    }

    removeItem(id: string): void {
        const current = this.cartItems.value.filter(i => i.id !== id);
        this.cartItems.next(current);
    }

    removeSingleItem(product: any): void {
        const card = localStorage.getItem('cart');
        const cardItems = card ? JSON.parse(card) : [];
        const existing = cardItems.find((i: any) => i.id == product.id);

        if (existing) {
            existing.quantity = (existing.quantity || 0) - 1;
            if (existing.quantity <= 0) {
                this.removeItem(existing.id);
                return;
            }
            localStorage.setItem('cart', JSON.stringify(cardItems));
            this.toast.addToast(
                'succes',
                'cart updated',
                'succes',
                5000,
            );
        }
    }

    getCart(): CartItem[] {
        return this.cartItems.value;
    }

    clearCart(): void {
        this.cartItems.next([]);
    }
}