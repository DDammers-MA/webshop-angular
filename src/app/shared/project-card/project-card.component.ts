import { Component, inject, input, OnInit, output } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent implements OnInit {
  
  product = input<any>()
  toast = inject(ToastService)
  cart  = inject(CartService)

  ngOnInit(): void {



  }

  addToCard(item: any) {

    this.cart.addItem(item)
  }
}
