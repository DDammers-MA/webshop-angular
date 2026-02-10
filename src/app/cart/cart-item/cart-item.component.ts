import { Component, input, OnInit, Output, EventEmitter, output } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  standalone: false,

  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent implements OnInit {

  product = input<any>(); 

remove = output<number>();
quantity = input<number>();


  ngOnInit(): void {
    console.log(this.product().id);
    
  }

  onRemove(id: number) {    
    if (id !== undefined && id !== null) {
      this.remove.emit(id);
    }
  }
  

}
