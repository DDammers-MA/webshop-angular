import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../shared/project-card/product.service';

@Component({
  selector: 'app-home',
standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  product = inject(ProductService)
  products: any[] = []


ngOnInit(): void {
  this.getData()
}

  getData() {

    this.product.loadProducts().subscribe({
      next: (data) => {
        this.products = data

      }
    })
    
  }

}
