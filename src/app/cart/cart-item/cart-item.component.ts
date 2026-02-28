import { Component, input, OnInit, Output, EventEmitter, output, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-cart-item',
  standalone: false,

  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  product = input<any>(); 

remove = output<number>();
quantity = input<number>();

cart = inject(CartService)

  updateQuantity(event : any) {

    // console.log(event);
    

    this.cart.addItem(event);
  }

  onRemove(id: number) {    
    if (id !== undefined && id !== null) {
      this.remove.emit(id);
    }
  }
  

}
